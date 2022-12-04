import { useState } from "react";
import { initFirebase } from '../../firebase/Firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";


const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    initFirebase()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
        router.push("/thanks");
        console.log(result.user);
    }


    const handleClick = () => {

        if (user) {
            router.push("/dash");
        } else {
            setShowModal(true)
        }
    }

    return (
        <>
            <button
                type="submit"
                className='border h-10 px-4 bg-green-500 rounded-md text-white'
                onClick={handleClick}
            >
                <span>
                    UNLOCK FOR FREE
                </span>
            </button>
            {
                showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none cursor-pointer pb-4 px-4">
                                    <span className="flex justify-end my-2">
                                        <button
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="text-xs text-gray-900">X</span>
                                        </button>
                                    </span>
                                    <span>
                                        <img
                                            src="https://www.vizio.com/en/account/images/buttons-social-google-web.png"
                                            alt="logo"
                                            width="240px"
                                            onClick={signIn}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null
            }
        </>
    )
}

export default Modal