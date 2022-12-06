import { ReactElement, useEffect, useState } from 'react'
import { initFirebase } from '../../firebase/Firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const Onboarding = (props: any) => {

    const [basicData, setbasicData] = useState(true)
    const [dobNext, setDobNext] = useState(false)
    const [whatsAppNext, setWhatsAppNext] = useState(false)
    const [higherstEducationNext, setHigherstEducationNext] = useState(false)
    const [userTypeNext, setUserTypeNext] = useState(false)
    const [userLocationNext, setUserLocationNext] = useState(false)
    const [careerCallNext, setCareerCallNext] = useState(false)
    const [bestDayTimeNext, setbestDayTimeNext] = useState(false)
    const [done, setDone] = useState(false)

    const [userData, setUserData] = useState({
        uid: "",
        email: "",
        displayName: "",
        photoUrl: "",
        creationTime: "",
        lastSignInTime: "",
        dob: "",
        phoneNumber: 0,
        whatsAppNumber: 0,
        higherstEducation: "",
        userType: "",
        location: "",
        careerCall: "",
        bestDay: "",
        bestTime: "",
    })

    initFirebase()
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            setUserData({
                ...userData,
                uid: user?.uid,
                email: user?.email || "",
                displayName: user?.displayName || "",
                photoUrl: user?.photoURL || "",
                creationTime: user.metadata.creationTime || "",
                lastSignInTime: user.metadata.creationTime || "",
            })
        }
    }, [user])

    const handelDob = (e: any) => {
        console.log(e.target.value);
        setUserData({ ...userData, dob: e.target.value })
    }

    const handelWhatsAppNumber = (e: any) => {
        console.log(e.target.value);
        let num = parseInt(e.target.value)
        setUserData({ ...userData, whatsAppNumber: num, phoneNumber: num })
    }

    const handelHigherstEducation = (e: any) => {
        setUserData({ ...userData, higherstEducation: e.target.value })
    }
    const handelUserType = (e: any) => {
        setUserData({ ...userData, userType: e.target.value })
    }
    const handelLocation = (e: any) => {
        setUserData({ ...userData, location: e.target.value })
    }
    const handelCareerCall = (e: any) => {
        setUserData({ ...userData, careerCall: e.target.value })
    }
    const handelBestDay = (e: any) => {
        setUserData({ ...userData, bestDay: e.target.value })
    }
    const handelBestTime = (e: any) => {
        setUserData({ ...userData, bestTime: e.target.value })
    }



    const handleData = () => {
        console.log("Done got clicked");


        let url = 'https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/usersDb/data';

        let id;
        fetch(url)
            .then((response) => response.json())
            .then(json => {
                // Do something with the data
                console.log(json.data);

                id = json.data.length + 3;
                console.log(id);
            });

        let PostUrl = `https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/usersDb/data`

        let body = {
            datum: { ...userData, id: id }
        }
        fetch(PostUrl, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((response) => response.json())
            .then(json => {
                // Do something with object
                console.log(json.datum);
                // router.push("/dash")
            });


    }



    if (!user) {
        router.push("/");
        return <div className='flex justify-center items-center h-screen gap-2'>
            <button disabled type="button" className="text-white bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                </svg>
                Loading...
            </button>
        </div >
    }

    const handleLogout = () => {
        auth.signOut()
        router.push("/");
    }

    // useEffect(() => {

    //     if (router.pathname === "/onboarding") {
    //         console.log(router.pathname);
    //         const navEl = document.getElementById("mainNav")
    //         const menuEL = document.getElementById("mainMenu")

    //         console.log(navEl);
    //         console.log(menuEL);

    //         navEl?.remove()
    //         menuEL?.remove()
    //     }

    // }, [])

    if (router.pathname === "/onboarding") {
        console.log(router.pathname);
        const navEl = document.getElementById("mainNav")
        const menuEL = document.getElementById("mainMenu")

        console.log(navEl);
        console.log(menuEL);

        navEl?.remove()
        menuEL?.remove()
    }


    return (
        <>
            <div className='flex h-screen'>
                <div className='flex flex-col w-full'>
                    <div className='flex justify-between w-full items-center h-16 p-4 bg-white'>
                        <div >
                            <a href="/"><img src="../../media/careerdekho-logo.svg" width="210px" alt="logo" /></a>
                        </div>

                        <div onClick={handleLogout} className="flex justify-start items-center gap-2 cursor-pointer bg-gray-100 rounded-sm px-2">
                            <img className="w-5 h-5" src="../../media/logout.svg" alt="logout" />
                            <span className="m-1">Logout</span>
                        </div>
                    </div>
                    {basicData &&
                        <div className='flex justify-center items-center h-screen p-4 '>
                            <div className='relative w-lg px-4 py-8 rounded-xl border h-56 w-80 flex flex-col justify-between'>
                                <span className='absolute right-4 top-4 text-xs'>0/7</span>
                                <div>
                                    <h2 className='text-lg pb-2 font-semibold'>Basic Setup</h2>
                                    <h3 className='bg-red-100 p-1 rounded-sm'>Please complete basic setup to get full access</h3>
                                </div>
                                <div
                                    onClick={() => { setDobNext(true), setbasicData(false) }}
                                    className="flex justify-start w-max items-center gap-2 cursor-pointer text-white bg-green-500 rounded-full px-4">
                                    <span className="m-1">Next</span>
                                    <img className="w-5 h-5" src="../../media/right.svg" alt="logout" />
                                </div>
                            </div>
                        </div>
                    }

                    {dobNext && <div className='flex justify-center items-center h-screen p-4 '>
                        <div className='relative w-lg px-4 py-8 rounded-xl border h-56 w-80 flex flex-col justify-between'>
                            <span className='absolute right-4 top-4 text-xs'>1/7</span>
                            <div>
                                <h2 className='text-lg mb-1'>Your date of Birth*</h2>
                                <div className='text-xs mb-4'>Pelase enter your DOB</div>
                                <input className='border p-1 rounded-sm' type="date" onChange={handelDob} value={userData.dob} required />
                            </div>
                            <div
                                onClick={() => { setDobNext(false), setWhatsAppNext(true) }} className="flex justify-start w-max items-center gap-2 cursor-pointer text-white bg-green-500 rounded-full px-4">
                                <span className="m-1">Next</span>
                                <img className="w-5 h-5" src="../../media/right.svg" alt="logout" />
                            </div>
                        </div>
                    </div>}


                    {whatsAppNext && <div className='flex justify-center items-center h-screen p-4 '>
                        <div className='relative w-lg px-4 py-8 rounded-xl border h-56 w-80 flex flex-col justify-between'>
                            <span className='absolute right-4 top-4 text-xs'>2/7</span>
                            <div>
                                <h2 className='text-lg mb-1'> Your WhatsApp Number*</h2>
                                <div className='text-xs mb-4'>Pelase enter number 10 digit mobile number</div>
                                <input className='border p-1 rounded-sm' type="number" onChange={handelWhatsAppNumber} value={userData.whatsAppNumber} max="10" placeholder='10-digit number' required />
                            </div>
                            <div onClick={() => { setWhatsAppNext(false), setHigherstEducationNext(true) }} className="flex justify-start w-max items-center gap-2 cursor-pointer text-white bg-green-500 rounded-full px-4">
                                <span className="m-1">Next</span>
                                <img className="w-5 h-5" src="../../media/right.svg" alt="logout" />
                            </div>
                        </div>
                    </div>}

                    {higherstEducationNext && <div className='flex justify-center items-center h-screen p-4 '>
                        <div className='relative w-lg px-4 py-8 rounded-xl border h-56 w-80 flex flex-col justify-between'>
                            <span className='absolute right-4 top-4 text-xs'>3/7</span>
                            <div>
                                <h2 className='text-lg mb-1'>Your Higherst Education</h2>
                                <div className='text-xs mb-4'>Please select highest education till this year</div>
                                <select className='border p-1 rounded-sm' onChange={handelHigherstEducation} value={userData.higherstEducation}>
                                    <option>-education-</option>
                                    <option value="10th">10th</option>
                                    <option value="12th">12th</option>
                                    <option value="Professional certificate">Professional certificate</option>
                                    <option value="Undergraduate">Undergraduate</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Graduate">Graduate</option>
                                    <option value="Post Graduate">Post Graduate</option>
                                    <option value="PHD">PHD</option>
                                </select>
                            </div>
                            <div onClick={() => { setHigherstEducationNext(false), setUserTypeNext(true) }} className="flex justify-start w-max items-center gap-2 cursor-pointer text-white bg-green-500 rounded-full px-4">
                                <span className="m-1">Next</span>
                                <img className="w-5 h-5" src="../../media/right.svg" alt="logout" />
                            </div>
                        </div>
                    </div>}


                    {userTypeNext && <div className='flex justify-center items-center h-screen p-4 '>
                        <div className='relative w-lg px-4 py-8 rounded-xl border h-56 w-80 flex flex-col justify-between'>
                            <span className='absolute right-4 top-4 text-xs'>4/7</span>
                            <div>
                                <h2 className='text-lg mb-1'>What best describes you</h2>
                                <div className='text-xs mb-4'>Please select what best describes you from following options</div>
                                <select className='border p-1 rounded-sm' onChange={handelUserType} value={userData.userType}>
                                    <option>-userType-</option>
                                    <option value="10th">Student</option>
                                    <option value="12th">Just Graduate</option>
                                    <option value="Professional certificate">Working professional</option>
                                    <option value="Undergraduate">Parent</option>
                                </select>
                            </div>
                            <div onClick={() => { setUserTypeNext(false), setUserLocationNext(true) }} className="flex justify-start w-max items-center gap-2 cursor-pointer text-white bg-green-500 rounded-full px-4">
                                <span className="m-1">Next</span>
                                <img className="w-5 h-5" src="../../media/right.svg" alt="logout" />
                            </div>
                        </div>
                    </div>}

                    {userLocationNext && <div className='flex justify-center items-center h-screen p-4 '>
                        <div className='relative w-lg px-4 py-8 rounded-xl border h-56 w-80 flex flex-col justify-between'>
                            <span className='absolute right-4 top-4 text-xs'>5/7</span>
                            <div>
                                <h2 className='text-lg mb-1'>Your current city</h2>
                                <div className='text-xs mb-4'>Please select your base location following options</div>
                                <select className='border p-1 rounded-sm' onChange={handelLocation} value={userData.location}>
                                    <option>-city-</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Undergraduate">Hyderabad</option>
                                </select>
                            </div>
                            <div onClick={() => { setUserLocationNext(false), setCareerCallNext(true) }} className="flex justify-start w-max items-center gap-2 cursor-pointer text-white bg-green-500 rounded-full px-4">
                                <span className="m-1">Next</span>
                                <img className="w-5 h-5" src="../../media/right.svg" alt="logout" />
                            </div>
                        </div>
                    </div>}

                    {careerCallNext && <div className='flex justify-center items-center h-screen p-4 '>
                        <div className='relative w-lg px-4 py-8 rounded-xl border h-56 w-80 flex flex-col justify-between'>
                            <span className='absolute right-4 top-4 text-xs'>6/7</span>
                            <div>
                                <h2 className='text-lg mb-1'>1-1 FREE career counseling </h2>
                                <div className='text-xs mb-4'>Do you want 1-1 FREE career consultation?</div>
                                <select className='border p-1 rounded-sm' onChange={handelCareerCall} value={userData.careerCall}>
                                    <option>-select-</option>
                                    <option value="Mumbai">yes</option>
                                    <option value="Delhi">No</option>
                                </select>
                            </div>
                            <div onClick={() => { setCareerCallNext(false), setbestDayTimeNext(true) }} className="flex justify-start w-max items-center gap-2 cursor-pointer text-white bg-green-500 rounded-full px-4">
                                <span className="m-1">Next</span>
                                <img className="w-5 h-5" src="../../media/right.svg" alt="logout" />
                            </div>
                        </div>
                    </div>}

                    {bestDayTimeNext && <div className='flex justify-center items-center h-screen p-4 '>
                        <div className='relative w-lg px-4 py-8 rounded-xl border h-60 w-80 flex flex-col justify-between'>
                            <span className='absolute right-4 top-4 text-xs'>7/7</span>
                            <div>
                                <h2 className='text-lg mb-1'>Best Time to reach out you</h2>
                                <div className='text-xs mb-4'>please select best day & time for career counseling call</div>
                                <div>
                                    <select className='border p-1 rounded-sm mb-2' onChange={handelBestDay} value={userData.bestDay}>
                                        <option>- best days -</option>
                                        <option value="Monday-to-friday">Monday-to-Friday</option>
                                        <option value="satardy-&-sunday">Satardy-&-Sunday</option>
                                    </select>
                                    <select className='border p-1 rounded-sm mb-2 w-[175px]' onChange={handelBestTime} value={userData.bestTime}>
                                        <option>- best time -</option>
                                        <option value="Mumbai">Morning</option>
                                        <option value="Delhi">Afternoon</option>
                                        <option value="Delhi">Evening</option>
                                    </select>
                                </div>

                            </div>
                            <div onClick={() => {
                                setbestDayTimeNext(false), setDone(true), setTimeout(() => {
                                    handleData()
                                }, 3000)
                            }} className="flex justify-start w-max items-center gap-2 cursor-pointer text-white bg-green-500 rounded-full px-4">
                                <span className="m-1">DONE</span>
                                <img className="w-5 h-5" src="../../media/right.svg" alt="logout" />
                            </div>
                        </div>
                    </div>}

                    {done && <div
                        className='flex justify-center items-center h-screen p-4 '>
                        <div className='w-lg  rounded-xl border h-56 w-80 flex flex-col justify-center items-center'>
                            <img className='object-cover rounded-xl' src="../../media/thumbs-up.gif" alt="logout" />
                        </div>
                    </div>}

                </div>
            </div>
        </>
    )
}


export default Onboarding