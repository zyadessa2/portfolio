import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import myImg from "../../public/images/profile/ziad.jpg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue , {duration:3000});
    const isInView = useInView(ref , {once: true});

    useEffect(() => {
      if(isInView){
        motionValue.set(value);
      }
    }, [isInView , value , motionValue])
    
    useEffect(() =>{
        springValue.on("change" , (latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    } , [springValue , value])


    return <span ref={ref}></span>
}

const about = () => {
  return <>
    <Head>
        <title>ziad | About Page</title>
        <meta name='description' content='my about section' />
    </Head>
    <TransitionEffect/>
    <main className='dark:text-light flex w-full flex-col items-center justify-center'>
        <Layout className="pt-16">
            <AnimatedText text="Passion Fuels Purpose!" ClassName='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>bigraghy</h2>
                    <p className='font-medium'>
                    Hi, I'm ziad, a web developer with a passion for creating beautiful, functional, 
                    and user-centered digital experiences. With 1 years of experience in the field. I am always looking for 
                    new and innovative ways to bring my clients' visions to life.
                    </p>
                    <p className='font-medium my-4'>
                    Experienced Front-End Developer specializing in React&Next.js  frameworks, 
                    HTML, CSS, and JavaScript tools. Proven track record of delivering high-quality projects and collaborating 
                    with cross-functional teams. Passionate about creating seamless user experiences and staying up-to-date with 
                    industry trends. Detail oriented with a focus on intuitive interfaces and accessibility. Ready to collaborate 
                    and bring your digital vision to life 
                    </p>
                    
                </div>
                <div className='col-span-3 dark:border-light dark:bg-dark relative h-max rounded-2xl 
                border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                    <Image src={myImg} alt="ziad" className="w-full h-auto rounded-2xl"
                    
                    sizes='(max-width: 768px) 100vw ,
                    (max-width:1200px) 50vw ,
                    33vw'
                    />
                </div>
                <div className='col-span-2 xl:col-span-8 xl:flex-row flex flex-col items-center justify-between xl:text-center md:order-3'>
                    <div className='xl:items-center flex flex-col items-end justify-center'>
                        <span className='md:text-6xl sm:text-5xl xs:text-4xl inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={20}/>+
                        </span>
                        <h2 className='xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75 dark:text-light/75'>satisfied clients</h2>
                    </div>
                    <div className='xl:items-center flex flex-col items-end justify-center'>
                        <span className='md:text-6xl sm:text-5xl xs:text-4xl inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={15}/>+
                        </span>
                        <h2 className='xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75 dark:text-light/75'>projects completed</h2>
                    </div>
                    <div className='xl:items-center flex flex-col items-end justify-center'>
                        <span className='md:text-6xl sm:text-5xl xs:text-4xl inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={1}/>+
                        </span>
                        <h2 className='xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75 dark:text-light/75'>years of experience</h2>
                    </div>
                </div>
            </div>
            <Skills/>
            <Experience/>
            <Education/>
        </Layout>
    </main>
  </>
}
export default about
