import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
Link

const Home = () => {
  return (
    <>
  <Header/>
  <div style={{paddingTop:'100px'}} className='container px-4 mx-auto' >
    <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQExFiJpOJkzZ5eJZYzA-D_oUz_52MNfjkaORAieGlywKdH8UjVz3sZ5vh4s9PefOZralP5Anp_MpSIYuiZkIUq7tgbocttROaFIWalSPO8Kct75iUTXXD2SA&usqp=CAc" alt="" />
        
        <div className='text-center'>
<h3 className='text-x1 font-bold'>Teddy</h3>
<Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'> view More...</Link>
            </div>
            </div>
    </div>

  </div>
  </>
  )
}

export default Home
