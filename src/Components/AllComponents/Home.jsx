import React from 'react'
import NavbarComponent from '../Navbar/Navbar'
import Header from '../header/Header'
import WrapperContainer from '../WrapperContainer/WrapperContainer'
import MidFilterSection from '../MidSection/MidFilterSection'
import MidComponentParent from '../MidSection/MidComponentParent'
const HomePage = () => {
  return (
    <div>
      <div>
        <WrapperContainer navHead>
          <NavbarComponent />
          <Header />
        </WrapperContainer>
      </div>
      <div className="bg-gray-100 w-full">
        <WrapperContainer>
          <MidFilterSection />
        </WrapperContainer>
        <MidComponentParent />
      </div>
    </div>
  )
}

export default HomePage
