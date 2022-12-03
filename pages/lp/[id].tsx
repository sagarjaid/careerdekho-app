import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/main/Header'
import Footer from '../../components/main/Footer'


const id = () => {
    const router = useRouter()
    const careerName = router.query.id
    return (
        <>
            <Header />
            <div className=' w-full m-auto bg-gray-100 flex flex-col items-center py-8 gap-5'>
                <h2 className='text-2xl font-medium text-center'>How to Become a {careerName}</h2>
                <p className='text-center'>Neque porro quisquam est qui dolorem ipsum quia dolor sit <br />amet, consectetur, adipisci velit...</p>
                <div className='flex gap-2 items-center justify-between'>
                    <div className='w-full flex justify-center'>
                        <img src="../media/doc.png" width="300px" alt="doc" />
                    </div>
                    <div className='flex flex-col w-full gap-8 justify-around m-auto'>
                        <div className='w-full border rounded-lg p-4 bg-white hover:translate-y-2 hover:shadow-md'>
                            <h3 className='text-xl font-medium'>Detailed Career Path from college to job step-by-step</h3>
                            <p className='mt-2 text-sm'>Neque porro quisquam est qui dolorem ipsum quia dolor<br /> sit amet, consectetur, adipisci velit...</p>
                        </div>
                        <div className='w-full border rounded-lg p-4 bg-white hover:translate-y-2 hover:shadow-md'>
                            <h3 className='text-xl font-medium'>FREE 1:1 Call with a career discovery session (45min)</h3>
                            <p className='mt-2 text-sm'>Neque porro quisquam est qui dolorem ipsum quia dolor<br /> sit amet, consectetur, adipisci velit...</p>
                        </div>
                        <button className='border h-10 px-4 bg-green-500 rounded-md text-white'>get it for FREE!</button>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default id