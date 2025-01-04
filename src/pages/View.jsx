import React from 'react'
import Header from '../components/Header'


const View = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col mx-5'>
                <div className='grid grid-cols-2 items-center h-screen'>
                    <img width={"450px"} height={"200px"} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQExFiJpOJkzZ5eJZYzA-D_oUz_52MNfjkaORAieGlywKdH8UjVz3sZ5vh4s9PefOZralP5Anp_MpSIYuiZkIUq7tgbocttROaFIWalSPO8Kct75iUTXXD2SA&usqp=CAc" alt="" />
                    <div>
                        <h3 className='font-bold'>PID : id</h3>
                        <h1 className='text-5xl font-bold'>Teddy</h1>
                        <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
                        <h4>Brand : brand</h4>
                        <h4>Category : category</h4>
                        <p>
                            <span className='font-bold '>Description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque quis at, rem ex placeat? Aliquid repellat facere, nulla similique quo perferendis cumque. Tempora molestiae commodi perspiciatis harum architecto dignissimos.
                        <div className='flex justify-between mt-5'>
                            <button className='bg-blue-600 text-white p-2'> Add to Wishlist</button>
                            <button className='bg-green-600 text-white p-2'> Add to Cart</button>


                        </div>
                        
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default View