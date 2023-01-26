import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import NavBar from '../components/NavBar'


const PublicLayout = () => {

  const navigation = useNavigation()
  return (
    <div className='md:px-40 my-1'>
        <NavBar/>
        <main>
          {
            navigation.state === "loading" ? <div className='flex justify-center'> <Loading/> </div>  : <Outlet/>
          }
        </main>
        <Footer/>
    </div>
  )
}

export default PublicLayout