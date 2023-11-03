import React from 'react'

const Contact = () => {
  return (
    <div className='w-full px-4 md:px-44 bg-gradient-to-b from-black to-gray-900 text-white md:h-screen' id='contact'>
      <div className=' max-w-screen-lg flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className=' text-4xl font-bold border-b-2 inline border-gray-400'>Contact</p>
            <p className='my-4'>Submit the form below to get in touch with me</p>
        </div>

        <div className=' flex justify-center items-center'>
            <form action="https://getform.io/f/eec3445b-20b8-4353-a4ed-876c50715b74" method='POST' className=' flex flex-col w-full md:w-1/2 gap-4 '>
                <input type="text" name='name' placeholder='Enter Your Name'
                  className=' bg-transparent border-2 rounded-md text-white p-2 focus:outline-none' 
                  />
                  <input type="text" name='email' placeholder='Enter Your Email'
                  className=' bg-transparent border-2 rounded-md text-white p-2 focus:outline-none' 
                  />
                  <textarea name="message" rows="10" placeholder='Enter Your Message '
                  className=' bg-transparent border-2 rounded-md text-white p-2 focus:outline-none'></textarea>

                  <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 my-8 mx-auto rounded-md hover:scale-105 duration-200 flex items-center'>Let's talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
