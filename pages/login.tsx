import React from 'react'
import { initFirebase } from '../firebase/Firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const Login = () => {

    initFirebase()
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result.user);
    }

    if (user) {
        router.push("/dash");
        console.log(user, "user login Page");
    }

    if (!user) {
        console.log("no user found: login Page");
    }

    return (
        <div className='flex flex-col gap-2 justify-center items-center h-screen'>
            <h1>Login</h1>
            <img
                src="https://www.vizio.com/en/account/images/buttons-social-google-web.png"
                alt="logo"
                width="240px"
                onClick={signIn}
            />
        </div>
    )
}

export default Login