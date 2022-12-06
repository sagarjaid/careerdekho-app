import React, { useState } from 'react'
import { getAuth } from "firebase/auth";
import { initFirebase } from '../firebase/Firebase';
import { useRouter } from "next/router";


const Menu = (props: any) => {
    const [toggle, setToggle] = useState(false)
    initFirebase();
    const auth = getAuth();
    const router = useRouter();

    const handleToggle = () => {
        console.log("toogle got clicked");
        setToggle(!toggle)
    }

    const handleLogout = () => {
        auth.signOut()
        router.push("/");
    }

    return (
        <section id="mainMenu" className={toggle ? 'hidden lg:flex flex-col justify-between w-20 bg-gray-100 h-screen p-4 pt-7 ' : 'hidden lg:flex  flex-col justify-between w-64 bg-gray-100 h-screen p-4 pt-7 '}>
            <div className={toggle ? 'flex flex-col gap-1' : 'flex flex-col gap-3.5'}>
                {/* logo */}
                <div className="mb-4 cursor-pointer">
                    {toggle ?
                        <a href="/" className='flex justify-center items-center '>

                            <img
                                src="../../media/logo-icon.svg"
                                alt="logo"
                                width="35px"
                            />
                        </a>
                        :
                        <a href="/">
                            <img
                                src="../../media/careerdekho-logo.svg"
                                alt="logo"
                                width="180px"
                            />
                        </a>
                    }
                </div>

                {/* menu item */}

                <div onClick={() => router.push("/dash")} className={toggle ? "flex justify-center items-center gap-2 cursor-pointer hover:bg-white rounded-sm p-2" : "flex justify-start items-center gap-2 cursor-pointer hover:bg-white rounded-sm px-2"}>
                    < img className="w-5 h-5" src="../../media/dashboard.svg" alt="dashboard" />
                    {!toggle && <span className="m-1">Dashboard</span>}
                </div>

                <div onClick={() => router.push("/discover")} className={toggle ? "flex justify-center items-center gap-2 cursor-pointer hover:bg-white rounded-sm p-2" : "flex justify-start items-center gap-2 cursor-pointer hover:bg-white rounded-sm px-2"}>
                    <img className="w-5 h-5" src="../../media/discover.svg" alt="discover" />
                    {!toggle && <span className="m-1">Discover</span>}
                </div>

                <div onClick={() => router.push("/profile")} className={toggle ? "flex justify-center items-center gap-2 cursor-pointer hover:bg-white rounded-sm p-2" : "flex justify-start items-center gap-2 cursor-pointer hover:bg-white rounded-sm px-2"}>
                    <img className="w-5 h-5" src="../../media/profile.svg" alt="profile" />
                    {!toggle && <span className="m-1">Profile</span>}
                </div>

                <div onClick={() => router.push("/settings")} className={toggle ? "flex justify-center items-center gap-2 cursor-pointer hover:bg-white rounded-sm p-2" : "flex justify-start items-center gap-2 cursor-pointer hover:bg-white rounded-sm px-2"}>
                    <img className="w-5 h-5" src="../../media/settings.svg" alt="settings" />
                    {!toggle && <span className="m-1">Settings</span>}
                </div>

                <div onClick={() => router.push("/help")} className={toggle ? "flex justify-center items-center gap-2 cursor-pointer hover:bg-white rounded-sm p-2" : "flex justify-start items-center gap-2 cursor-pointer hover:bg-white rounded-sm px-2"}>
                    <img className="w-5 h-5" src="../../media/support.svg" alt="support" />
                    {!toggle && <span className="m-1">Support</span>}
                </div>

                <div onClick={() => router.push("/invite")} className={toggle ? "flex justify-center items-center gap-2 cursor-pointer hover:bg-white rounded-sm p-2" : "flex justify-start items-center gap-2 cursor-pointer hover:bg-white rounded-sm px-2"}>
                    <img className="w-5 h-5" src="../../media/invite-friend.svg" alt="invite friend" />
                    {!toggle && <span className="m-1">Invite friend</span>}
                </div>

                <div onClick={handleLogout} className={toggle ? "flex justify-center items-center gap-2 cursor-pointer hover:bg-white rounded-sm p-2" : "flex justify-start items-center gap-2 cursor-pointer hover:bg-white rounded-sm px-2"}>
                    <img className="w-5 h-5" src="../../media/logout.svg" alt="logout" />
                    {!toggle && <span className="m-1" >Logout</span>}
                </div>
            </div>

            {/* menu toggle  */}

            <div className={toggle ? "flex justify-center items-center gap-2 cursor-pointer hover:bg-white rounded-sm p-2" : "flex justify-end items-center cursor-pointer hover:bg-white rounded-sm py-1 px-2"} onClick={handleToggle}>
                {!toggle &&
                    <span className=" text-xs mb-0.5 mr-2">Toggle</span>}
                <img src="../../media/toggle.svg" alt="toggle" />
            </div>
        </section >
    )
}

export default Menu