import React from 'react'
import Header from '../components/Header'


const Wishlist = () => {
    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px' }} className='px-5'>
                <>
                    <h1 className='text-4xl font-bold text-red-600'>my Wishlist</h1>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className='rounded border p-2 shadow'>
                            <img width={'100%'} height={'200px'} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQExFiJpOJkzZ5eJZYzA-D_oUz_52MNfjkaORAieGlywKdH8UjVz3sZ5vh4s9PefOZralP5Anp_MpSIYuiZkIUq7tgbocttROaFIWalSPO8Kct75iUTXXD2SA&usqp=CAc" alt="" />

                            <div className='text-center'>
                                <h3 className='text-x1 font-bold'>Teddy</h3>
                                <div className='flex justify-evenly mt-3'>
                                    <button className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                                    <button className='text-xl'><i class="fa-solid fa-cart-plus text-green-600"></i></button>

                                </div>

                            </div>
                        </div>
                    </div>

                </>
            </div>
        </>
    )
}

export default Wishlist