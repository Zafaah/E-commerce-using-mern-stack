import React from 'react'
import bg from '../assets/Images/bg.webp'
import Product from '../components/Product'
import Shope from './Shope'

const Home = () => {
   return (
      <div><img src={bg} style={{ width: 1300 }} />
         <Shope />
      </div>
   )
}

export default Home
