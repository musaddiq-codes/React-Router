import React from "react"
import { Link, NavLink } from "react-router-dom"


const Home = () => {
    return (
        <>
            <header>
                <a href="">Logo</a>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Home
