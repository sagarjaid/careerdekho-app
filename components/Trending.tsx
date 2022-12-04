import React from 'react'

const Trending = (props: any) => {
    const { name } = props
    const defultName = "Software Engineer"

    return (
        <div className="border w-[250px] sd:w-56 sdm:w-64 md:w-80 lg:w-[280px] flex flex-col gap-3 bg-white rounded-xl p-2 min-h-56 max-h-full">
            <div className='flex gap-4 items-center py-1 mx-2'>
                <span>
                    <img className="w-5 h-5" src="../../media/trending.svg" alt="icon" />
                </span>
                <div>
                    <h3 className='text-sm'> {name || defultName}</h3>
                </div>
            </div>
        </div>
    )
}

export default Trending