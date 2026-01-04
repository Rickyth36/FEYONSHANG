import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
          <p>We believe clothing is more than just a product it’s a reflection of confidence,
            personality, and everyday living. Our brand is built on creating thoughtfully designed wear that balances modern style with comfort and quality.
          </p>
          <p>
            Our mission is to redefine everyday fashion by blending style, comfort, and individuality. We design clothing for people who value self-expression and confidence in what they wear. Each collection is carefully curated to deliver versatile pieces that move with you from casual moments to everyday routines. With a focus on quality
             and modern design, we aim to create wear that feels authentic, effortless, and made for real life.
          </p>
          <b className='text-gray-800' >Our Mission</b>
          <p>We exist to create fashion that moves with modern lifestyles. Our mission is to design versatile, comfortable, and stylish clothing that supports self-expression and confidence every day. By focusing on quality, functionality, and contemporary aesthetics, we aim to make fashion
             accessible, meaningful, and inspiring for those who value individuality in what they wear.
          </p>
        </div>
      </div>
        <div className="text-xl py-4">
          <Title text1={'WHY'}  text2={'CHOOSE US'}/>
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className='text-gray-600' >Every product goes through strict quality checks to ensure superior fabric, precise stitching, and lasting comfort.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className='text-gray-600' >We make shopping simple and hassle-free with an easy-to-use platform, smooth ordering process, and reliable delivery.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600' >Dedicated support ensuring quick responses, clear communication, reliable solutions, and a smooth shopping experience always.
            </p>
          </div>
        </div>
        <NewsletterBox />
    </div>
  )
}

export default About