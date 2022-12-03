import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='m-auto min-h-72 max-h-full py-4 bg-slate-100 flex flex-col justify-around items-center'>
                <div className='max-w-7xl flex flex-col md:flex-row px-6 gap-4'>
                    <div className='w-full sdm:w-[40%] flex flex-col gap-2'>
                        <div className='-ml-2'>
                            <img src="../../media/careerdekho-logo.svg" width="180px" alt="logo" />
                        </div>
                        <div className='text-xs text-gray-500'>© CAREERDEKHO 2022 All Rights reserved</div>
                    </div>
                    <div className='w-full flex flex-col gap-6'>
                        <div className='flex flex-col sd:flex-row justify-around gap-3 '>

                            <ul className='w-full'>
                                <li>company</li>
                                <li className='text-sm mt-2'><a href="/OurStory">our story</a></li>
                                <li className='text-sm'><a href="/Contact">contact us</a></li>
                            </ul>

                            <ul className='w-full -ml-1'>
                                <li>legal</li>
                                <li className='text-sm mt-2'><a href="/T&C">terms of use</a> </li>
                                <li className='text-sm'><a href="/PrivacyPolicy">privacy policy</a></li>
                            </ul>

                            <ul className='w-full'>
                                <li>social</li>
                                <li className='text-sm mt-2'><a href="https://www.linkedin.com/company/careerdekho/" target="_blank" rel="noopener noreferrer">linkedin</a></li>
                                <li className='text-sm'><a href="https://twitter.com/careerdekhoo" target="_blank" rel="noopener noreferrer">twitter</a></li>
                                <li className='text-sm'><a href="https://www.instagram.com/careerdekhoco" target="_blank" rel="noopener noreferrer">instagram</a></li>
                            </ul>
                        </div>
                        <div>
                            {/* <p className='text-xs'>All trademarks and logos or registered trademarks and logos found on this Site or mentioned herein belong to their respective owners and are solely being used for informational purposes.</p> */}
                            <p className='text-xs mt-2'>Information provided herein has been gathered from public sources. CAREERDEKHO disclaims any and all responsibility in connection with veracity of this data. Information presented on this website is for educational purposes only and should not be treated as legal, financial , or any other form of advice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer