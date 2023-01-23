import React from 'react'

const About = () => {
  return (
    <div className='text-base mb-5 px-4'>
      <h2 className='text-xl font-bold text-center text-purple-800'>About</h2>
      <h4 className='text-l font-bold italic mb-5 text-purple-800'>About developer</h4>
      <p className='text-sm text-gray-800'>Hi!! my name is Franco Vaccari, i'm working so hard to became a web frontend and backend developer.</p>
      <p className='text-sm text-gray-800'>I decided to make a project were i can show some skills i've learnd on last time</p>
      <p className='text-sm mb-5 text-gray-800'>I hope you enjoy it...</p>
      <h4 className='text-l font-bold italic mb-5 text-purple-800'>All my Links</h4>
      <a className='text-xl mr-5 text-gray-800' href="https://www.linkedin.com/in/franco-vaccari-b4123a246/?originalSubdomain=ar" target="_blank"><i className="bi bi-linkedin"></i></a>
      <a className='text-xl mr-5 text-gray-800 ' href="https://github.com/FrancoVacc" target="_blank"><i className="bi bi-github"></i></a>
      
      <h4 className='text-l font-bold italic my-5 text-purple-800'>About the API</h4>
      <p className='text-sm text-gray-800'> The <span className='italic'>Faketore API</span> it's a RestFull API that anyone can use</p>
      <p className='text-sm text-gray-800'>to make a marketplace for free, its allows to use some methods to get information, push, make or delete.</p>
      <p className='text-sm text-gray-800 mb-5'>is simple to use and so powerfull!!!</p>
      <h4 className='text-l font-bold italic mb-5 text-purple-800'>API Link</h4>
      <a className='text-sm mr-5 text-purple-800' href="https://fakestoreapi.com/" target="_blank">Fake Store API</a>
    </div>
  )
}

export default About