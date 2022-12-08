import { useEffect, useState } from 'react'
import { getAuth } from "firebase/auth";
import { initFirebase } from '../firebase/Firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";



const Nav = () => {

    const [toggle, setToggle] = useState(false)
    const [avatar, setAvatar] = useState("")
    const [showModal, setShowModal] = useState(false)


    initFirebase();
    const auth = getAuth();
    const router = useRouter();
    const [user, loading] = useAuthState(auth);


    const handleToggle = () => {
        console.log("toogle got clicked");
        setToggle(!toggle)
    }

    const handleLogout = () => {
        auth.signOut()
        router.push("/");
    }

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    useEffect(() => {
        setAvatar(user?.photoURL || "../../media/avtar.svg")
    }, [])

    return (
        <div>
            <div className='sticky top-0 left-0 flex justify-between items-center h-16 p-4 bg-white' id="mainNav">
                <div className='lg:hidden'>
                    <a href="/"><img src="../../media/careerdekho-logo.svg" width="210px" alt="logo" /></a>
                </div>
                <span onClick={handleToggle}>
                    {toggle ? <svg className="lg:hidden w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        : <svg className="lg:hidden w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>}
                </span>
                <ul className='hidden lg:flex items-center gap-4 cursor-pointer' onClick={handleShowModal}>
                    <img className='w-10 h-10 rounded-full' src={avatar} width="210px" alt="logo" />
                </ul>

                {showModal && <div className='hidden absolute right-4 top-14 mt-2 w-48 p-4  lg:flex  flex-col gap-3 rounded-md border bg-white'>
                    <div className='flex flex-col gap-1'>
                        <div className='text-sm'>
                            {user?.displayName}
                        </div>
                        <div className='text-xs'>
                            {user?.email}
                        </div>
                    </div>
                    <div onClick={handleLogout} className={toggle ? "flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-sm p-2" : "flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-sm px-2"}>
                        <img className="w-3 h-3" src="../../media/logout.svg" alt="logout" />
                        {!toggle && <span className="m-1 text-sm" >Logout</span>}
                    </div>
                </div>}


            </div>
            {toggle ? <div className='absolute z-50 bg-white px-6 w-screen sd:w-[35%]  right-0 h-screen lg:hidden'>
                <div className='flex flex-col gap-4 mt-2'>
                    <div onClick={() => { router.push("/dash"), handleToggle() }} className="flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-sm px-2">
                        <img className="w-5 h-5" src="../../media/dashboard.svg" alt="dashboard" />
                        <span className="m-1">Dashboard</span>
                    </div>

                    <div onClick={() => { handleToggle(), router.push("/discover") }} className="flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-sm px-2">
                        <img className="w-5 h-5" src="../../media/discover.svg" alt="discover" />
                        <span className="m-1">Discover</span>
                    </div>

                    <div onClick={() => { handleToggle(), router.push("/profile") }} className="flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-sm px-2">
                        <img className="w-5 h-5" src="../../media/profile.svg" alt="profile" />
                        <span className="m-1">Profile</span>
                    </div>

                    <div onClick={() => { handleToggle(), router.push("/settings") }} className="flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-sm px-2">
                        <img className="w-5 h-5" src="../../media/settings.svg" alt="settings" />
                        <span className="m-1">Settings</span>
                    </div>

                    <div onClick={() => { handleToggle(), router.push("/help") }} className="flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-sm px-2">
                        <img className="w-5 h-5" src="../../media/support.svg" alt="support" />
                        <span className="m-1">Support</span>
                    </div>

                    <div onClick={() => { handleToggle(), router.push("/invite") }} className="flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-sm px-2">
                        <img className="w-5 h-5" src="../../media/invite-friend.svg" alt="invite friend" />
                        <span className="m-1">Invite friend</span>
                    </div>

                    <div onClick={handleLogout} className="flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-sm px-2">
                        <img className="w-5 h-5" src="../../media/logout.svg" alt="logout" />
                        <span className="m-1">Logout</span>
                    </div>
                </div>
            </div> : ""
            }
        </div >
    )
}

export default Nav