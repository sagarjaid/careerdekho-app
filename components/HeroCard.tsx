import React from 'react'

const HeroCard = (props: any) => {
    const { name } = props
    return (
        <div className="w-52 h-52 bg-transparent">
            <div className='border bg-white rounded-2xl p-3 w-full h-full flex flex-col justify-center gap-1'>
                <span>
                    <svg className="w-10 h-10 bg-gray-100 p-2 rounded-full mb-2" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </span>
                <span>
                    {name}
                </span>
                <span className='text-xs'>
                    how to become a {name}
                </span>
            </div>
        </div>
    )
}

export default HeroCard