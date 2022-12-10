import React from 'react'
import Timeline from '../../components/Timeline'

const CareerPath = () => {
    return (
        <>
            <div className='flex flex-row w-full justify-between overflow-hidden'>
                <div className='max-w-5xl w-3/4 p-4 pl-8 flex h-full'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-medium'>Software Engineer Career Path</h2>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-2 text-sm p-2'>
                                <p className='font-medium'>What is Software Engineering?</p>
                                <p>It is a branch of engineering that deals with the development of software products like website, webapps & mobile apps.</p>
                                <p>Software engineers work on creating, designing, maintaining, and managing various types of web applications.</p>
                                <p><span className='font-medium'>fun fact:</span> Do you know Software engineers are one of the highest paying jobs in India.</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <iframe className='w-[300px] h-[170px] rounded-lg' src="https://www.youtube.com/embed/6ffUHK7o5yI?&modestbranding=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='overflow-y-scroll'>
                    <Timeline screenName="What is" />
                    <Timeline screenName="Best for" />
                    <Timeline screenName="Career Trends" />
                    <Timeline screenName="Career Path" />
                    <Timeline screenName="Universities" />
                    <Timeline screenName="Colleges" />
                    <Timeline screenName="Classes & Institutions" />
                    <Timeline screenName="Free Courses" />
                    <Timeline screenName="Paid Courses" />
                    <Timeline screenName="Companies & Cities" />
                    <Timeline screenName="Salary Insights" />
                    <Timeline screenName="Job Titles" />
                    <Timeline screenName="Job Titles Salary" />
                    <Timeline screenName="Job JD" />
                    <Timeline screenName="Day in a Life" />
                    <Timeline screenName="Entrepreneurial Scope" />
                    <Timeline screenName="Related Job Titles" />
                    <Timeline screenName="Done" />
                </div>
            </div>
        </>
    )
}

export default CareerPath