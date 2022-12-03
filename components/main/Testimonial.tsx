import React from 'react'

const Testimonial = () => {
    return (
        <div className="border w-[300px] sd:w-56 sdm:w-64 md:w-80 lg:w-[280px] flex flex-col gap-3 bg-white rounded-xl p-4 min-h-56 max-h-full">
            <div className='flex gap-2'>
                <img src="media/user.svg" alt="icon" />
                <div>
                    <h3 className='text-sm'>Aditi Kothari</h3>
                    <span className='text-xs'>Product Manager II @Razorpay</span>
                </div>
            </div>
            <p className='text-sm'>No more tracking down the documents. No more sifting through multiple files. Zeda.io provides us with a single repository of our data and makes product management simple and smart.</p>
        </div>
    )
}

export default Testimonial