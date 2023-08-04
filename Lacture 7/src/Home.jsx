import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import Header from "./components/Header"


const Home = () => {
    return (
        <>
            We can say that it is navbar page acording to technical thapa
            <Header />
            <Outlet />
        </>
    )
}

export default Home
