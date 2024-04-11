import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import backgroundImage from './Images/background.jpg';
import menu from './Images/burgermenu.jpg';
// import mut from './Images/mut.svg';
import Mutwhite from './Images/Mutwhite.svg';
import Kommunikationskongress from './Images/kkkongress-logo.svg';
import Rückblick from './Images/Rückblick_2008-2017.jpg';
import './App.css';

function App() {
  return (

<div>


{/* --!SECTION Container 1 */}

    <div className=' bg-220e76 mx-auto p-0  top-0'>

            <img src={backgroundImage} className="mx-auto w-full" />
            <button className="absolute text-2xl top-16 right-10 h-[80px] w-[300px] text-white rounded-full px-1 py-1 font-bold" style={{ fontFamily: 'Proxima Nova, sans-serif' }} style={{ backgroundColor: '#ED5566' }} >
              Shop Tickets
            </button>
          
          {/* <div className="absolute top-10 left-10 h-[180px] w-[180px]"> */}
              <img src={Kommunikationskongress} className="absolute top-0 left-10 h-[180px] w-[180px]" />
              <img src={Mutwhite} className="absolute top-16 left-10 h-[180px] w-[220px] mt-5"/>

              {/* <p className="absolute top-30 left-30 text-lg text-red-600 font-lights" style={{fontSize: '36px'}}>

                  KOMMUNIKATIONSKONGRESS          
                  <br /> 
                  <br /> 

                  27. & 28. September 2018           
                  <br /> 
                  <br /> 
                  SAVE THE DATE  

              </p> */}

          {/* </div> */}


    </div>


  {/* --!SECTION Container 2  */}

    <div className="bg-220e76 mx-auto px-5 pt-14 w-[full] h-[2000px] mt-0">

      {/* <div>hello</div> */}

      <p className="text-3xl font-bold text-center text-6xl">
          <span className="text-custom-color text-xs">
            Kommunikationskongress
          </span> <br />
          <span className="text-custom-color">
            DER KOMMUNIKATIONSKONGRESS 2024 IN
          </span> <span className="text-red-600">BERLIN</span>      
        </p>

        <p className="mt-11 text-center text-lg text-white font-light mx-12" style={{fontSize: '36px'}}>
          Der Kommunikationskongress ist ein zweitägiges Netzwerk- und 
          Weiterbildungsevent, auf dem aktuelle und zukunftsweisende 
          Herausforderungen der Kommunikationsbranche erörtert und 
          beleuchtet werden. Jährlich kommen rund 1.500 Entscheider 
          in Berlin zusammen, um über den Tellerrand ihrer Profession zu 
          blicken, Trends zu diskutieren und disruptive Lösungsansätze 
          in ihren Alltag zu integrieren. 
        
          <br /> 
          <br /> 
          <br /> 
          <br />

          Die Menge an Vortragsformaten, Speakern und Netzwerkmöglichkeiten 
          ist es, was den Kommunikationskongress so einzigartig macht. Seien 
          Sie am 27. und 28. September 2018 dabei und gestalten Sie die 
          Zukunft Ihrer Profession mit!        
        </p>

        <div>

        <p className=" text-3xl font-bold ml-20 mt-20 mb-[50px] text-6xl">
          <span className="text-custom-color text-xs">
            Kommunikationskongress
          </span> <br />
          <span className="text-custom-color">
          RÜCKBLICK </span> <span className="text-red-600">2008-2017</span>      
        </p>

        {/* <img src={Rückblick} className='mx-auto' /> */}

        </div>
  
    </div>

    </div>





  );
  }

export default App;
