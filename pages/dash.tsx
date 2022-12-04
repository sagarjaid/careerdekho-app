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
            <div className='flex flex-col items-center gap-3 w-full h-full justify-center p-4'>
                <h1 className='text-2xl lg:text-4xl'>Hi {userName}</h1>
                <h3 className='text-center max-w-md lg:max-w-full px-2'>Search 850+ top careers and get detailed  career path step-by-step.</h3>
                <SearchDropDown handleValue={handleValue} style="w-full" type="auth" />
                <div className='flex flex-col items-center max-w-4xl gap-8 px-2 mt-2'>
                    <p className='text-center mt-2'>Trednding career searches across india</p>
                    <div className='hidden sd:flex flex-wrap gap-4 justify-center lg:justify-around'>
                        <Trending name="Software Engineer" />
                        <Trending name="Civil Engineer" />
                        <Trending name="Fashion Designer" />
                        <Trending name="Data Scientist" />
                        <Trending name="Graphic Designer" />
                        <Trending name="Digital Marketer" />
                        <Trending name="Air Hostess" />
                        <Trending name="Web Designer" />
                        <Trending name="Project Manager" />
                    </div>
                    <div className='sd:hidden flex flex-wrap gap-4 justify-center lg:justify-around'>
                        <Trending name="Fashion Designer" />
                        <Trending name="Data Scientist" />
                        <Trending name="Graphic Designer" />
                        <Trending name="Digital Marketer" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default dash