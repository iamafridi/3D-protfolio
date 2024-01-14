import React from 'react'
import { skills } from '../constants'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className='max-container bg-amber-50'>
      <Helmet>
        <title>Afridi | About</title>
      </Helmet>
      <h1 className='head-text'>
        Hello , I'm <span className='blue-gradient_text font-semibold drop-shadow'>Afridi</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          MERN Stack Developer based in Bangladesh, a driven Computer Science undergrad with a knack for MERN (MongoDB, Express.js, React.js, Node.js) stack development. With a deep enthusiasm for crafting efficient and user-centric web applications, I've honed my skills through hands-on projects and coursework. <br /> <br />

          🚀 Currently expanding my expertise in modern web technologies while pursuing my degree, I thrive on embracing new challenges and leveraging my coding prowess to create seamless, scalable, and visually captivating web experiences.
          <br /> <br />
          📝 Beyond coding, I channel my passion for technology into writing engaging blogs, sharing insights, tips, and experiences from my journey in the world of web development. Through my writing, I aim to inspire and educate others in the tech community.
          <br /> <br />
          🌐 Looking for opportunities to apply my skills, contribute to impactful projects, and collaborate with like-minded professionals in the field of web development. Let's connect and explore how we can innovate together!
          <br /> <br />
          Happy Coding
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'> My Skils</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (

            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default About