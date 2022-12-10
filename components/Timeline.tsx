import React from 'react'

const Timeline = (props: any) => {

    const { screenName } = props;

    return (
        <div className='flex gap-2 px-4 h-10'>
            <div className="bg-amber-200 relative">
                <div className="absolute left-1/2 -ml-0.5 w-0.5 h-10 bg-gray-600"></div>
                <div className="absolute -ml-[5px] w-2 h-2 top-1/3 rounded-full bg-green-600"></div>
            </div>
            <div className='flex items-center h-full'>
                <div >{screenName}</div>
            </div>
        </div>
    )
}
export default Timeline