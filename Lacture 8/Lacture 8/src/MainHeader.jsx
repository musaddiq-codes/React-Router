import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"


const MainHeader = () => {
    return (
        <>
            {/* We can say that it is navbar page acording to technical thapa */}
            <Header />
            <Outlet />
        </>
    )
}

export default MainHeader
