import React from 'react'
import { Link } from 'react-router-dom'
import arrow from "../assets/icons/arrow.svg"

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center' > {text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn' >
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5  '>
            Greetings to my world,
            I am <span className='font-semibold'> Afridi</span> 🧸
            <br />
            A MERN Stack Developer from Bangladesh
        </h1>
    ),
    2: (
        <InfoBox
            text="I am a blogger and developer,constantly learning new skils"
            link="/about"
            btnText="Know More about me"

        />
    ),
    3: (
        <InfoBox
            text="My work can be intresting to you, Check them here"
            link="/projects"
            btnText="Visit my Protfolio"

        />
    ),
    4: (
        <InfoBox
            text="Looking for a developer ? I am just a click away."
            link="/contact"
            btnText="Let's connect"

        />
    ),
}



const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo;