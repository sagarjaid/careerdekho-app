import { useEffect, useState } from 'react'
import { initFirebase } from '../firebase/Firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Menu from '../components/Menu';
import Nav from '../components/Nav';
import Trending from '../components/Trending';
import SearchDropDown from '../components/main/SearchDropDown'
import Testimonial from '../components/main/Testimonial';



const dash = () => {

    const [userName, setUsername] = useState("Guest User");
    const [value, setValue] = useState("")


    initFirebase()
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    if (user) {
        console.log(user, "user dash Page");
    }

    if (!user) {
        router.push("/");
        console.log("no user found: login Page");
        return <div className='flex justify-center items-center h-screen'>Loading...</div>
    }

    const handleValue = (a: any) => {
        setValue(a)
    }

    useEffect(() => {
        setUsername(user?.displayName || userName)
    }, [])



    return (
        <>
            <div className='flex flex-col h-screen justify-center lg:justify-start items-center w-full bg-white lg:mt-32 mb-4 p-4'>
                <div className='flex flex-col justify-center items-start gap-3  p-4 border rounded-md' >
                    <h2 className='text-xl'>Thank you!</h2>
                    <p>We have capured your intrest </p>
                    <p>One of your career experts will contact you soon</p>
                </div>
            </div>
        </>
    )
}

export default dash