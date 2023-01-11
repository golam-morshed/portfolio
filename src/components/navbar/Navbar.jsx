import React, { useState } from 'react'
import { images } from '../../constants'
import './Navbar.scss'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const navitems = ["Home", "About", "Skills", "Testimonials", "Works", "Contact"]
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'><img src={images.logo} alt="logo" /></div>
            <ul className='app__navbar-links'>
                {navitems.map((item) => {
                    return (
                        <li className='app__flex p-text' key={`link-${item}`}>
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    )
                })}
            </ul>
            <div className='app__navbar-menu'>
                <HiOutlineMenuAlt3 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ x: [300, 0], opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {navitems.map((item) => {
                                return (
                                    <li className='app__flex p-text' key={`link-${item}`}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav >
    )
}

export default Navbar