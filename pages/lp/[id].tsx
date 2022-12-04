import React from 'react'
import { useRouter } from 'next/router'
import Modal from '../../components/main/Modal'
import { initFirebase } from '../../firebase/Firebase';
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


const id = () => {
    const router = useRouter()
    const careerName = router.query.id

    initFirebase()
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    if (user) {
        router.push("/dash");
        console.log(user, "user login Page");
    }


    return (
        <>
            <div className=' w-full m-auto bg-gray-100 flex flex-col items-center px-4 pt-10 pb-32 gap-5'>
                <div>
                    <h2 className='text-2xl font-medium text-center'>How to Become a {careerName}</h2>
                    <p className='hidden sdm:block text-center mt-1'>Neque porro quisquam est qui dolorem ipsum quia dolor </p>
                </div>
                <div className='flex flex-col sdm:flex-row gap-2 items-center justify-between'>
                    <div className='w-full flex justify-center'>
                        <img src="../media/doc.png" width="300px" alt="doc" />
                    </div>
                    <button onClick={() => router.push("/login")} className='sdm:hidden w-full mb-6 border h-10 px-4 bg-green-500 rounded-md text-white'>get it for FREE!</button>

                    <div className='flex flex-col w-full gap-8 justify-around m-auto'>
                        <div className='w-full border rounded-lg p-4 bg-white hover:translate-y-2 hover:shadow-md'>
                            <h3 className='text-xl font-medium'>Detailed Career Path from college to job step-by-step</h3>
                            <p className='mt-2 text-sm'>Neque porro quisquam est qui dolorem ipsum quia dolor<br /> sit amet, consectetur, adipisci velit...</p>
                        </div>
                        <div className='w-full border rounded-lg p-4 bg-white hover:translate-y-2 hover:shadow-md'>
                            <h3 className='text-xl font-medium'>FREE 1:1 Call with a career discovery session (45min)</h3>
                            <p className='mt-2 text-sm'>Neque porro quisquam est qui dolorem ipsum quia dolor<br /> sit amet, consectetur, adipisci velit...</p>
                        </div>
                        <button onClick={() => router.push("/login")} className='border h-10 px-4 bg-green-500 rounded-md text-white'>get it for FREE!</button>
                        {/* <Modal /> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default id