import React, { useState, useEffect, useRef } from 'react'
import video from './assets/video.mp4'
import video2 from './assets/video2.mp4'
import { genRandom } from '../utils/genRandom'
import { motion, AnimatePresence } from 'framer-motion'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'

const App = () => {

    const [letters, setTest] = useState([''])
    const word = "FAIRYFLAME"
    const wordArr = word.split('')
    const ref = useRef(null)

    useEffect(() => {
        var tempArray = ['']
        const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

        for (let x = 0; x < 22; x++) {


            setTimeout(() => {

                arr.map((items, i) => {
                    if (x >= items) {
                        tempArray[i] = word[i]
                    } else {
                        tempArray[i] = genRandom()
                    }
                })

                setTest([...tempArray])
            }, 60 * (x + 1));
        }
    }, [])

    const variant = {
        initial: {

        },
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const child = {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 100,
            transition: {
                duration: 1,
                ease: [.29, .95, .69, .98],
                delay: 0.2
            }
        }
    }

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    const mouseVariant = {
        default: {
            x: mousePosition.x - 14,
            y: mousePosition.y - 14,
            transition: {

                duration: 0.03
            }
        }
    }

    useEffect(() => {

        const mouseMove = (e) => {

            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)

        }
    }, [])

    const [vid, setVideo] = useState(true)
    const [percent, setPercent] = useState(0)

    const toggle = () => {
        setVideo(curr => !curr)
    }

    // FOR PROGRESS BAR
    // useEffect(() => {

    //     ref.current.addEventListener('scroll', e => {
    //         const myDiv = ref.current
    //         const percentScrolled = (myDiv.scrollTop / (myDiv.scrollHeight - myDiv.clientHeight)) * 100;
    //         setPercent(percentScrolled)
    //     })
    // }, [ref])



    return (
        <section className='w-full h-screen relative overflow-hidden bg-black'>

            <motion.div variants={mouseVariant} animate="default" className="h-8 w-8 bg-mypink pointer-events-none opacity-60 rounded-full absolute top-0 left-0 z-50 shadow-pinkglow"></motion.div>

            <div className='fixed top-0 left-0 w-full h-full bg-[rgba(15,15,15,0.40)] z-[9]'></div>
            <AnimatePresence mode="wait">
                {vid === true ? <motion.video initial={{ opacity: 0 }} animate={{ opacity: 100 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} src={video} autoPlay loop muted className='w-full object-cover h-full z-0 absolute top-0 left-0' key="firstvideo"></motion.video>
                    :
                    <motion.video initial={{ opacity: 0 }} animate={{ opacity: 100 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} src={video2} autoPlay loop muted className='w-full object-cover h-full z-0 absolute top-0 left-0' key="secondvideo"></motion.video>
                }

            </AnimatePresence>

            {/* PROGRESS BAR */}
            {/* <div className="absolute bottom-0 left-0 w-full h-8 text-white z-30 px-3 font-albertus flex items-center">
                <div className="h-[3px] w-full bg-[#1b1b1b] relative">
                    <div className="h-full w-0 bg-[#535353] absolute left-0 top-0 shadow-progress" style={{ width: `${percent}%` }}></div>
                </div>
            </div> */}

            <div className="absolute z-20 h-full top-0 left-0 w-full flex">
                <nav className="absolute top-0 left-0 flex  justify-between w-full items-center">


                    <div className="text-white text-2xl flex items-center flex-col justify-center gap-x-3 mt-5 ml-5 gap-y-5">
                        <img src="/logo.webp" alt="Logo" className="w-24" />
                        <AiFillTwitterCircle className='text-[28px]  hover:drop-shadow-glowi hover:text-mypink transition-all ease-in-out duration-300' />
                        <BsTelegram className='hover:drop-shadow-glowi hover:text-mypink transition-all ease-in-out duration-300r' />

                    </div>

                    <button className="px-8 py-3  text-white font-albertus rounded-lg group absolute top-9 right-0 left-0 mx-auto w-fit md:text-lg text-sm" onClick={toggle}>
                        <p className="mb-2">
                            Switch
                        </p>
                        <div className="w-6 h-[7px] relative mx-auto group-hover:w-full transition-all ease-in-out duration-300">
                            <div className="w-2 h-2 bg-mypink rounded-full absolute right-0 top-0 bottom-0"></div>
                            <div className="w-full h-[2px] bg-mypink rounded-full absolute left-0 top-0 bottom-0 my-auto transition-all ease-in-out duration-300 group-hover:shadow-pinkglow"></div>
                            <div className="w-2 h-2 bg-mypink rounded-full absolute left-0 top-0 bottom-0"></div>
                        </div>
                    </button>

                    <button className="px-8 py-3  text-white font-albertus md:mr-5 mr-3 rounded-lg group absolute top-9 right-0 md:text-lg text-sm">
                        <p className="mb-2">
                            Buy on Uniswap
                        </p>
                        <div className="w-8 h-[7px] relative mx-auto group-hover:w-full transition-all ease-in-out duration-300">
                            <div className="w-2 h-2 bg-mypink rounded-full absolute right-0 top-0 bottom-0"></div>
                            <div className="w-full h-[2px] bg-mypink rounded-full absolute left-0 top-0 bottom-0 my-auto transition-all ease-in-out duration-300 group-hover:shadow-pinkglow"></div>
                            <div className="w-2 h-2 bg-mypink rounded-full absolute left-0 top-0 bottom-0"></div>
                        </div>
                    </button>
                </nav>

                <div className="w-full h-full z-10 absolute pointer-events-none shadow-bot"></div>

                <div className="max-w-[1500px] mx-auto text-white w-fit h-fit self-end mb-8">

                    <a href="https://www.makesoil.org/" target="_blank" rel="noopener noreferrer" className="">
                        <img src="/makesoil.webp" alt="makesoil" className="mx-auto absolute bottom-6 right-6 z-20 glow" />

                    </a>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 1.5, ease: [.29, .95, .69, .98] }} className="flex lg:w-[33rem] md:w-[22rem] w-[16.5rem] mx-auto 2xl:w-[59rem] relative">
                        <img src="/fly.gif" alt="Fly" className="absolute z-10 transform -scale-x-100 w-20 -top-11 -left-11 pointer-events-none" />
                        {letters.map((items, i) => {
                            return (
                                <h1 className={`text-center 2xl:text-9xl lg:text-7xl md:text-5xl text-4xl font-albertus tracking-widest transition-all ease-in-out duration-300 hover:text-[#f76966] ${wordArr.includes(items) ? "glow " : "text-[#f76966]"}`} key={i}>{items}</h1>
                            )
                        })}
                    </motion.div>



                    <motion.div variants={variant} initial="initial" animate="animate" className='overflow-hidden text-center md:max-w-[25rem] h-[16rem] font-albertus p-3 mx-auto miniglow noscroll flex flex-col gap-y-8 mt-10 wrapper relative opacity-80 2xl:text-xl 2xl:h-[20rem] max-w-[20rem]' ref={ref}>
                        <div className="absolute top-0 left-0 flex flex-col gap-y-8 marquee w-full">
                            <div className="absolute top-left left-0 flex flex-col gap-y-10 w-full">
                                <p className="">
                                    Life is a game that I play,
                                    My wings spread in open air,
                                    Dreaming of a better place,
                                    Where no one feels despair.
                                </p>

                                <p className="">
                                    I'm not looking for a fight,
                                    But sometimes it gets too bright,
                                    My fire starts to grow.
                                </p>

                                <p className="">
                                    And it's my fairy flame,
                                    Carry me away,
                                    Lighting up the night and day,
                                    My fairy flame.
                                </p>

                                <p className="">
                                    Strange things in the shadows glimmering,
                                    A peaceful glow surrounding me,
                                    I feel so strong there's no denying it,
                                    Wherever I go keeps me free.
                                </p>

                                <p className="">
                                    And it's my fairy flame,
                                    Carry me away,
                                    Lighting up the night and day ,
                                    My fairy flame .
                                </p>

                                <p className="">
                                    &#40;My beacon stays alive and strong,
                                    A symbol of what I belong.	&#41;
                                </p>

                                <p className="">
                                    Trying to go higher and higher ,
                                    But feeling like a tiny spark in this sky .
                                    Oooooh oooooh
                                    Oooooh oooooh
                                    With every step that i make ,
                                    That little light starts getting brighter .
                                    Oooooh oooooh
                                    Oooooh oooooh
                                </p>

                                <p className="">
                                    And it's my fairy flame,
                                    Carry me away,
                                    Lighting up the night and day ,
                                    My fairy flame .
                                </p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>

        </section>
    )
}

export default App