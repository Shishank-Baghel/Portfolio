import React from 'react';
import html from "../Assets/experience/html.png";
import javascript from "../Assets/experience/JavaScript2.png";
import tailwind from "../Assets/experience/Tailwind_CSS.png";
import css from "../Assets/experience/css.png";
import github from "../Assets/experience/github2.png";
import material from "../Assets/experience/material-ui.png";
import react from "../Assets/experience/react.png";
import reduxtoolkit from "../Assets/experience/reduxtoolkit.png";

const Experience = () => {

    const experience = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'REACT',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:reduxtoolkit,
            title:'REDUX-TOOLKIT',
            style:'shadow-purple-500'
        },
        {
            id:6,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-sky-400'
        },{
            id:7,
            src:github,
            title:'GITHUB',
            style:'shadow-gray-500'
        },{
            id:8,
            src:material,
            title:'MATERIAL-UI',
            style:'shadow-sky-500'
        },
    ];

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p2 inline'>Experience</p>
                <p className='py-6'>I have experience working with the following technologies, making me proficient in their usage</p>
            </div>


            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>



                {
                    experience.map(({id,src,title,style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>

                    ))
                }
                
                
            </div>
        </div>


    </div>
  )
}

export default Experience;