import React from 'react'
import { Link } from 'react-router-dom'


const Contacts = () => {
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
            <section>
                <h1>Contact</h1>
            </section>
        </>
    )
}

export default Contacts
