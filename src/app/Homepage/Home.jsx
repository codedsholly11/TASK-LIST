import React, {useContext} from 'react'
import Hero from './Hero'
import Clear from './Clear'
import Focus from './Focus'
import { AppContext } from '../../Context/AppContext'


const Home = () => {
  const  {bgColor, color} = useContext(AppContext)

  return (
    <div style={{backgroundColor:bgColor, color}}>
        <Hero/>
        <Clear/>
        <Focus/>
    </div>
  )
}

export default Home
