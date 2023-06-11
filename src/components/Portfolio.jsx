import React from 'react';
import calculator from '../Assets/portfolio/calculator2.png';
import codepen from '../Assets/portfolio/Codepen.png';
import spotify from '../Assets/portfolio/spotify.png';
import stopwatch from '../Assets/portfolio/stopwatch2.png';
import weather from '../Assets/portfolio/weather.png';

const Portfolio = () => {


const portfolios=[
    {
        id:1,
        src: codepen,
        href1: "https://remarkable-chebakia-772266.netlify.app",
        href2:"https://github.com/Shishank-Baghel/codepen_clone.git"
    },
     {
        id:2,
        src: weather,
        href1: "https://super-unicorn-ceabae.netlify.app",
        href2:"https://github.com/Shishank-Baghel/weather_app.git"

    }, 
    {
        id:3,
        src: spotify,
        href1: "https://sparkly-creponne-ea9b12.netlify.app",
        href2:"https://github.com/Shishank-Baghel/spotify_clone_HTML_CSS_JS.git"

    }, 
    {
        id:4,
        src: calculator,
        href1: "https://illustrious-macaron-46fe8f.netlify.app",
        href2:"https://github.com/Shishank-Baghel/basic_calculator.git"

    },
     {
        id:5,
        src: stopwatch,
        href1: "https://reliable-torrone-0e8c4f.netlify.app",
        href2:"https://github.com/Shishank-Baghel/stop-watch.git"

    },
]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id,src,href1,href2})=>(
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg " >
                <img src={src} alt=""  className='rounded-md duraton-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                   
                   <a href={href1} target="_blank"
              rel="noreferrer"><button className='w-1/2 px-6 py-2 m-1 duration-200 hover:scale-105'>Demo</button></a> 
                    
                    <a href={href2} target="_blank"
              rel="noreferrer"><button className='w-1/2 px-6 py-2 m-1 duration-200 hover:scale-105'>Code</button></a>
                </div>
            </div>))
            }



            {/* cards */}
           
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio;