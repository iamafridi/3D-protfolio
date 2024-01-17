
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,

} from "../assets/icons";
// import firebase from "../assets/icons/firebase.svg"
export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: firebase,
    //     name: "Firebase",
    //     type: "Authentication",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/iamafridi',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/iamafridi',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Elara Travels',
        description: 'A  Full-stack Application featuring user and admin privileges and a secure payment gateway.Where user can Easily book a destinations and make hassle-free payments, ensuring a smooth and delightful journey. ',
        link: 'https://elara-travels.web.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'VehiQuest- A car rental platform',
        description: 'A Full-Stack Application where user can rent a car or host a car for rental and an admin role to access and monitor everything, also User can pay with their visa card and individuals can see their own dedicated user ,host or admin dashboards.',
        link: 'https://github.com/iamafridi/vehi-quest-client',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Elara Library',
        description: 'An online Book library, Where user can book appoinments. User can update books and add books to the website  by simply login .',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'PHero-Arena',
        description: 'A gaming Website for the gamers, where they can see the latest news,upcoming events and purchase items.',
        link: 'https://phero-arena.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Donation Campaign',
        description: 'Donation camping page where any user can donatate and keep track of their donations ',
        link: 'https://phdonationcampaign.netlify.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Tea Here BD',
        description: 'a modern Tea Shop website where user can see the available item and know about the latest product in the list.',
        link: 'https://iamafridi.github.io/teahere.bd/',
    }
];