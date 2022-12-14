import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import HeroCard from '../components/HeroCard'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import SearchDropDown from '../components/main/SearchDropDown'
import Testimonial from '../components/main/Testimonial'
import { initFirebase } from '../firebase/Firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";


const Home: NextPage = () => {
  const [careerName, setCareerName] = useState("Software Engineer");
  const [value, setValue] = useState()

  initFirebase()
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (user) {
    router.push("/dash");
    console.log(user, "user login Page");
    return <div className='flex justify-center items-center h-screen gap-2'>
      <button disabled type="button" className="text-white bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
        <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
        </svg>
        Loading...
      </button>
    </div >;
  }


  const handleValue = (a: any) => {
    setValue(a)
  }


  useEffect(() => {
    setInterval(() => {
      setTimeout(() => {
        setCareerName("Digital Marketer")
      }, 2000)

      setTimeout(() => {
        setCareerName("Business Analyst")
      }, 4000)
      setTimeout(() => {
        setCareerName("Project Manager")
      }, 6000)
    }, 6400)
  }, [])

  return (
    <>
      <div className='w-full m-auto bg-blue-100'>
        <div className={value ? "h-[70vh] sdm:h-[80vh] w-full m-auto relative overflow-hidden max-w-7xl px-4 bg-blue-100" : "h-full sdm:h-[80vh] w-full m-auto relative overflow-hidden max-w-7xl px-4 bg-blue-100"}>
          <div className='flex flex-row justify-between '>
            <div className='flex flex-col item-center justify-start gap-3 w-full h-96 mt-20 sd:mt-32'>
              <h1 className='text-2xl lg:text-4xl'>How to Become <br />
                A <span className='bg-green-300'>{careerName}</span></h1>
              <h3>Search 850+ top careers and get detailed  career path step-by-step.
              </h3>
              <SearchDropDown handleValue={handleValue} style="w-4/5" />
              {!value && <span className='flex flex-col items-start md:flex-row md:items-center gap-1 ml-2'>
                <span>
                  <img src="media/users-group.avif" className='w-20 md:w-24' alt="logo" />
                </span>
                <span className='text-xs'>& 200+ people already searched today</span>
              </span>}

            </div>
            <div className='hidden w-full relative bg-transparent sdm:flex flex-row justify-end gap-2 px-2'>
              <div className="hidden slide-track sdm:flex flex-col bg-transparent gap-2">
                <HeroCard name="Web Designer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Dentist" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Astronaut" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Math Teacher" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Youtuber" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Software Engineer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Digital Marketer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Graphic Designer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Data Scientist" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Business Analyst" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Network Engineer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Fashion Designer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Financial Analyst" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Air Hostess" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Project Manager" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Civil Engineer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Web Designer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Dentist" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Astronaut" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Math Teacher" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Youtuber" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Software Engineer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Digital Marketer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Graphic Designer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Data Scientist" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Business Analyst" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Network Engineer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Fashion Designer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Financial Analyst" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Air Hostess" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Project Manager" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Civil Engineer" style="w-52 h-52 bg-transparent" />

              </div>
              <div className="hidden md:flex slide-track-2  flex-col bg-transparent gap-2">
                <HeroCard name="Software Engineer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Civil Engineer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Fashion Designer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Data Scientist" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Graphic Designer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Digital Marketer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Air Hostess" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Web Designer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Astronaut" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Project Manager" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Math Teacher" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Network Engineer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Youtuber" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Financial Analyst" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Business Analyst" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Dentist" style="w-52 h-52 bg-transparent" />
              </div>
              <div className="hidden slide-track lg:flex  flex-col bg-transparent gap-2">
                <HeroCard name="Data Scientist" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Software Engineer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Air Hostess" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Dentist" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Project Manager" />
                <HeroCard name="Astronaut" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Business Analyst" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Graphic Designer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Civil Engineer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Financial Analyst" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Network Engineer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Web Designer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Fashion Designer" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Math Teacher" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Youtuber" style="w-52 h-52 bg-transparent" />
                <HeroCard name="Digital Marketer" style="w-52 h-52 bg-transparent" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='max-w-7xl m-auto px-4'>
        <div className='flex flex-col gap-3 justify-center text-center items-center my-14'>
          <h2 className='text-2xl font-medium'>A Mordern career Dashboard</h2>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          <img className='rounded-lg mt-8 hover:translate-y-2' src=" media/dash.svg" width="85%" alt="cover" />
        </div>
      </div>

      <div className=' w-full m-auto bg-gray-100 flex flex-col items-center pt-8 gap-5'>
        <h2 className='text-2xl font-medium text-center px-4'>FREE Services For Limited Time!</h2>
        <p className='text-center px-4'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        <div className='flex flex-col md:flex-row max-w-4xl gap-8 justify-around m-auto my-14 p-4'>
          <div className='w-full border rounded-lg pt-6 pl-4 bg-white hover:translate-y-2 hover:shadow-md'>
            <h3 className='text-xl font-medium'>Detailed Career Path from college to job step-by-step</h3>
            <p className='mt-2 text-sm'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <div className='flex items-end overflow-hidden'>
              <span className='flex justify-between gap-2 items-center h-10 px-2 text-green-500 rounded-xl mb-5'><button className='w-full text-left'>EXPLORE</button>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
              <img className='w-full object-fill' src="media/g.svg" alt="1-1 call" />
            </div>
          </div>
          <div className='w-full border rounded-lg pt-6 pl-4 bg-white hover:translate-y-2 hover:shadow-md'>
            <h3 className='text-xl font-medium'>FREE 1:1 Call with a career discovery session (45min)</h3>
            <p className='mt-2 text-sm'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <div className='flex items-end overflow-hidden'>
              <span className='flex justify-between gap-2 items-center h-10 px-2 text-green-500 rounded-xl mb-5'><button className='w-full text-left'>EXPLORE</button>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
              <img className='w-full object-fill' src="media/b.svg" alt="1-1 call" />
            </div>
          </div>
        </div>


        <div className='flex flex-col m-auto items-center max-w-4xl gap-8 mb-14 px-2'>
          <div><h2 className='text-2xl font-medium text-center'>Users Love US!</h2>
            <p className='text-center mt-2'>Here is what they have to say about us</p>
          </div>
          <div className='hidden sd:flex flex-wrap gap-4 justify-center lg:justify-around mt-8'>
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
          <div className='sd:hidden flex flex-wrap gap-4 justify-center lg:justify-around mt-8'>
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </div>
      </div>

      <div className=' m-4 text-center h-full'>
        <div className='bg-blue-500 text-white flex flex-col m-auto max-w-4xl justify-center gap-4 items-center rounded-2xl h-60 my-32 px-4 py-8'>
          <span className='text-2xl mt-4'>consfued between two career paths?</span>
          <p className='text-center'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          <span className='flex justify-between gap-2 items-center py-3 h-10 px-5 bg-white rounded-full mb-5'>
            <button className='w-full text-left font-medium text-blue-600'>Search Now!</button>
            <svg className="w-6 h-6" fill="none" stroke="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </span>
        </div>
      </div>
    </>
  )
}

export default Home
