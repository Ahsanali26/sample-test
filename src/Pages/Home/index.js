import React from 'react'
import { Card } from '../../Components'
import '../../scss/main.scss'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h4>Welcome</h4>
        <div className='cards-container'>
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Home
