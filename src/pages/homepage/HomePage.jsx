import { React } from 'react'
import NavbarMain from "../../components/navbar/Navbar"
import Introduction from "../../components/introduction/Introduction"
import "./HomePage.css"

function HomePage(){
    return(
        <>
        <div className='pageContainer' style = {{ height:"100vh"}}>
        <NavbarMain/>
        <Introduction />
        </div>
      
        </>

        
    )
}

export default HomePage;