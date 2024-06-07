import React, { Component } from 'react'
import Image from 'next/image'
import image from  '../public/images/bg.jpg'
import images from  '../public/images/3676962.jpg'
import Header from './Header'
import AboutPage from './AboutPage'
import Contact from './Contact'

export default function HomePage() {
 
    return (
        <> 
       
         <div className='flex flex-col'>
            <div className="bg-white relative  w-screen h-screen">
           

             <Header/>
                <div className="bg-white h-screen  flex relative z-20 items-center overflow-hidden">
                    <div className="container mx-auto px-12 ml-24 flex relative py-16">
                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                            </span>
                            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
                                Welcome
                                <span className="text-5xl sm:text-7xl">
                                    to SenKayyit
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base  dark:text-white">
                                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                            </p>
                            <div className="flex mt-8">
                                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-[#101122] border-2 border-transparent text-white text-md mr-4 hover:bg-[#30314f]">
                                    Get started
                                </a>
                                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 bg-[#cdcdd8] text-[#17173d] hover:bg-[#6f7075] hover:text-white text-md">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className=" flex sm:block sm:w-1/3 lg:w-3/5 relative">
                            
                            <Image
                            className="max-w-xs md:max-w-sm m-auto"
                            src={images}
                            width={1000}
                            height={1000}
                            alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
                <div className='h-full text-black bg-slate-400'><AboutPage/></div>
                <div className='h-full text-black bg-[#1424417b]'><Contact/></div>

            </div>
           
        </div>    
        </>
    )
  
}

