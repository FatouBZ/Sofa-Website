import React from 'react'
import NavbarComponent from '../Navbar/Navbar'
import Header from '../header/Header'
import WrapperContainer from '../WrapperContainer/WrapperContainer'
const HomePage = () => {
  return (
    <div>
      <div>
      <WrapperContainer navHead>
      <NavbarComponent/>
      <Header />
      </WrapperContainer>
      </div>
      <div className="bg-gray-100 w-full">
        <WrapperContainer></WrapperContainer>
      </div>
    </div>
  )
}

export default HomePage
