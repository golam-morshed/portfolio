import React from 'react'
import { motion } from 'framer-motion'
import './Header.scss'
import { images } from '../../constants'

function Header() {
    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }
    const featuredSkills = [images.flutter, images.redux, images.sass]
    return (
        <div className="app__header app__flex home">

            <div className='app__header-badge'>
                <div className='badge-cmp app__flex'>
                    <motion.p
                        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >👋</motion.p>
                    <div style={{ marginLeft: 20 }}>
                        <motion.p
                            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                            transition={{ duration: 0.7, delay: 0.2 }} className='p-text'>Hi, I am</motion.p>
                        <motion.h1
                            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                            transition={{ duration: 0.7, delay: 0.3 }} className='head-text'>G. Morshed</motion.h1>
                    </div>
                </div>
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.7, delay: 0.4 }} className='tag-cmp app__flex'>
                    <p className='p-text'>Web Developer</p>
                    <p className='p-text'>Freelancer</p>
                </motion.div>
            </div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="Profile Background" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="overlay_circle"
                    src={images.circle}
                    alt="profile circle"
                />
            </motion.div>


            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circle"
            >
                {featuredSkills.map((featuredSkill) => {
                    return (
                        <div className='circle-cmp app__flex' key={`featured-skill-${featuredSkill}`}>
                            <img src={featuredSkill} alt="{featuredSkill}" />
                        </div>
                    )
                })}
            </motion.div>

        </div >
    )
}

export default Header