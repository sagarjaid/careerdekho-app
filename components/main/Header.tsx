import { useState } from 'react'


const Header = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        console.log("toogle got clicked");
        setToggle(!toggle)
    }
    return (
        <>
            <div className='max-w-7xl m-auto'>
                <div className='sticky top-0 left-0 flex justify-between items-center h-16 p-4 bg-white' id="mainHeader">
                    <div>
                        <a href="/"><img src="../../media/careerdekho-logo.svg" width="210px" alt="logo" /></a>
                    </div>
                    <span onClick={handleToggle}>
                        {toggle ? <svg className="lg:hidden w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            : <svg className="lg:hidden w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>}
                    </span>
                    <ul className='hidden lg:flex items-center gap-4'>
                        <li><a href="/">home</a></li>
                        <li ><a href="/about">our fuel</a></li>
                        <li><a href="https://chat.whatsapp.com/Fw89tfjh2Yv3Kzhy8IcNbX" target="_blank" rel="noopener noreferrer">community</a></li>
                        <li> <a href="/login">login</a> </li>
                        <li><a className='border h-10 py-2 px-4 bg-green-500 rounded-md text-white' href="/login">get started</a></li>
                    </ul>
                </div>
                {toggle ? <div className='absolute z-50 bg-white px-6 w-screen sd:w-[35%]  right-0 h-screen lg:hidden pt-4'>
                    <ul className='flex flex-col gap-6'>
                        <li><a href="/">home</a></li>
                        <li ><a href="/about">our fuel</a></li>
                        <li><a href="https://chat.whatsapp.com/Fw89tfjh2Yv3Kzhy8IcNbX" target="_blank" rel="noopener noreferrer">community</a></li>
                        <li> <a href="/login">login</a> </li>
                        <li><a className='border h-10 py-2 px-4 -ml-1 bg-green-500 rounded-md text-white' href="/login">get started</a></li>
                    </ul>
                </div> : ""}
            </div>
        </>
    )
}

export default Header