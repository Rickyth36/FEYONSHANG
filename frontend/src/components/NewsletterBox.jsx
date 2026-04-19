import React from 'react'

const NewsletterBox = () => {
    const onSubmithandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800' >Subscribe now and get 20% off</p>
        <p className="text-gray-400 mt-3">
            Be the first to know about new drops, exclusive deals, and style updates.
        </p>
        <form onSubmit={onSubmithandler} className='w-full  sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 pl-3' >
            <input className='w-full sm:flex-1 outline-none' required type="email" placeholder='Enter your email' name="" id="" />
            <button className='bg-black text-xs text-white px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox