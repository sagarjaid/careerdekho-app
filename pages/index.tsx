import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import HeroCard from '../components/HeroCard'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import Testimonial from '../components/main/Testimonial'


const Home: NextPage = () => {
  const [careerName, setCareerName] = useState("Software Engineer");


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
      <Header />
      <div className='w-full m-auto bg-blue-100'>
        <div className="h-full sdm:h-[65vh] w-full m-auto relative overflow-hidden max-w-7xl px-4 bg-blue-100">
          <div className='flex flex-row justify-between '>
            <div className='flex flex-col item-center justify-center gap-3 w-full h-96 mt-10'>
              <h1 className='text-2xl lg:text-4xl'>How to Become <br />
                A <span className='bg-green-300'>{careerName}</span></h1>
              <h3>Search 850+ top careers and get detailed  career path step-by-step.
              </h3>
              <div className='flex items-center max-w-md mt-4'>
                <input className=' h-12 w-4/5 border outline-none rounded-xl px-3' type="text" placeholder='search a career here...' />
                <span className='-m-10'>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </span>
              </div>
              <span className='flex flex-col items-start md:flex-row md:items-center gap-1 ml-2'>
                <span>
                  <img src="media/users-group.avif" className='w-20 md:w-24' alt="logo" />
                </span>
                <span className='text-xs'>& 200+ people already searched today</span>
              </span>
            </div>
            <div className='hidden w-full relative bg-transparent sdm:flex flex-row justify-end gap-2 px-2'>
              <div className="hidden slide-track sdm:flex flex-col bg-transparent gap-2">
                <HeroCard name="Web Designer" />
                <HeroCard name="Dentist" />
                <HeroCard name="Astronaut" />
                <HeroCard name="Math Teacher" />
                <HeroCard name="Youtuber" />
                <HeroCard name="software engineer" />
                <HeroCard name="Digital Marketer" />
                <HeroCard name="Graphic Designer" />
                <HeroCard name="Data Scientist" />
                <HeroCard name="Business Analyst" />
                <HeroCard name="Network Engineer" />
                <HeroCard name="Fashion Designer" />
                <HeroCard name="Financial Analyst" />
                <HeroCard name="Air Hostess" />
                <HeroCard name="Project Manager" />
                <HeroCard name="Civil Engineer" />
                <HeroCard name="Web Designer" />
                <HeroCard name="Dentist" />
                <HeroCard name="Astronaut" />
                <HeroCard name="Math Teacher" />
                <HeroCard name="Youtuber" />
                <HeroCard name="software engineer" />
                <HeroCard name="Digital Marketer" />
                <HeroCard name="Graphic Designer" />
                <HeroCard name="Data Scientist" />
                <HeroCard name="Business Analyst" />
                <HeroCard name="Network Engineer" />
                <HeroCard name="Fashion Designer" />
                <HeroCard name="Financial Analyst" />
                <HeroCard name="Air Hostess" />
                <HeroCard name="Project Manager" />
                <HeroCard name="Civil Engineer" />

              </div>
              <div className="hidden md:flex slide-track-2  flex-col bg-transparent gap-2">
                <HeroCard name="software engineer" />
                <HeroCard name="Civil Engineer" />
                <HeroCard name="Fashion Designer" />
                <HeroCard name="Data Scientist" />
                <HeroCard name="Graphic Designer" />
                <HeroCard name="Digital Marketer" />
                <HeroCard name="Air Hostess" />
                <HeroCard name="Web Designer" />
                <HeroCard name="Astronaut" />
                <HeroCard name="Project Manager" />
                <HeroCard name="Math Teacher" />
                <HeroCard name="Network Engineer" />
                <HeroCard name="Youtuber" />
                <HeroCard name="Financial Analyst" />
                <HeroCard name="Business Analyst" />
                <HeroCard name="Dentist" />
              </div>
              <div className="hidden slide-track lg:flex  flex-col bg-transparent gap-2">
                <HeroCard name="Data Scientist" />
                <HeroCard name="software engineer" />
                <HeroCard name="Air Hostess" />
                <HeroCard name="Dentist" />
                <HeroCard name="Project Manager" />
                <HeroCard name="Astronaut" />
                <HeroCard name="Business Analyst" />
                <HeroCard name="Graphic Designer" />
                <HeroCard name="Civil Engineer" />
                <HeroCard name="Financial Analyst" />
                <HeroCard name="Network Engineer" />
                <HeroCard name="Web Designer" />
                <HeroCard name="Fashion Designer" />
                <HeroCard name="Math Teacher" />
                <HeroCard name="Youtuber" />
                <HeroCard name="Digital Marketer" />
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
          {/* <div className="bg-gradient-to-t from-slate-600 h-40 relative -top-20 z-10">hello</div> */}
          {/* <button className='h-10 px-4 w-max rounded-full'>& More</button> */}
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
      <Footer />
    </>
  )
}

export default Home
