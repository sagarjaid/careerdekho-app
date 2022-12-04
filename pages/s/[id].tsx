import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/main/Header'
import Footer from '../../components/main/Footer'
import { initFirebase } from '../../firebase/Firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


const id = () => {
    const router = useRouter()
    const careerName = router.query.id

    initFirebase()
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    if (user) {
        console.log(user, "user dash Page");
    }

    if (!user) {
        router.push("/");
        console.log("no user found: login Page");
        return <div className='flex justify-center items-center h-screen gap-2'>
            <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                </svg>
                Loading...
            </button>
        </div >;
    }

    const handleRedirect = () => {
        router.push("/thanks");
    }

    return (
        <>
            <div className=' w-full m-auto flex flex-col items-center px-4 pt-10 pb-32 gap-5'>
                <div>
                    <h2 className='text-2xl font-medium text-center'>How to Become a {careerName}</h2>
                    <p className='hidden sdm:block text-center mt-1'>Neque porro quisquam est qui dolorem ipsum quia dolor </p>
                </div>
                <div className='flex flex-col sdm:flex-row gap-2 items-center justify-between'>
                    <div className='w-full flex justify-center'>
                        <img src="../media/doc.png" width="300px" alt="doc" />
                    </div>
                    <button onClick={handleRedirect} className='sdm:hidden w-full mb-6 border h-10 px-4 bg-green-500 rounded-md text-white'>get it for FREE!</button>

                    <div className='flex flex-col w-full gap-8 justify-around m-auto'>
                        <div className='w-full border rounded-lg p-4 bg-white hover:shadow-md'>
                            <h3 className='text-xl font-medium'>Detailed Career Path from college to job step-by-step</h3>
                            <p className='mt-2 text-sm'>Neque porro quisquam est qui dolorem ipsum quia dolor<br /> sit amet, consectetur, adipisci velit...</p>
                        </div>
                        <div className='w-full border rounded-lg p-4 bg-white hover:shadow-md'>
                            <h3 className='text-xl font-medium'>FREE 1:1 Call with a career discovery session (45min)</h3>
                            <p className='mt-2 text-sm'>Neque porro quisquam est qui dolorem ipsum quia dolor<br /> sit amet, consectetur, adipisci velit...</p>
                        </div>
                        <button onClick={handleRedirect} className='border h-10 px-4 bg-green-500 rounded-md text-white'>get it for FREE!</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default id