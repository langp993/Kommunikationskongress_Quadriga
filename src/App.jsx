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


///////////////////////////


// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import backgroundImage from './Images/background.jpg';
// import menu from './Images/burgermenu.jpg';
// // import mut from './Images/mut.svg';
// import Mutwhite from './Images/Mutwhite.svg';
// import Kommunikationskongress from './Images/kkkongress-logo.svg';
// import Rückblick from './Images/Rückblick_2008-2017.jpg';
// import './App.css';

// function App() {
//   return (

    
//     <div className="flex flex-col items-center justify-center min-h-screen mt-80 mb-0" style={{ zIndex: '10'}}> {/* Add margin top and bottom */}
//       <div>


// /////// This is a SECTION - 

//         {/* <div className='w-[400px] h-[400px] bg-white mx-auto'> */}
//         <div className=' bg-white mx-auto p-5 absolute top-0'>

//           {/* hello */}
//             {/* <div className=" mx-auto mb-40 w-full p-10 m-4"> */}
//         <img src={backgroundImage} className="mx-auto w-full" />
//         <button className="absolute text-2xl top-10 right-10 h-[80px] w-[300px] text-white rounded-full px-1 py-1 font-bold" style={{ fontFamily: 'Proxima Nova, sans-serif' }} style={{ backgroundColor: '#ED5566' }} >Shop Tickets</button>

//       {/* </div> */}
//           </div>

//           <div className="absolute top-10 left-10 h-[180px] w-[180px]">
//         <img src={Kommunikationskongress} alt="Vite logo" />
//       </div>

//       <div className="absolute top-[100px] left-10 h-[180px] w-[180px]">
        
//         <img src={Mutwhite} />

//                <p className="absolute top-80 left-[620px] text-lg text-red-600 font-lights" style={{fontSize: '36px'}}>

//           KOMMUNIKATIONSKONGRESS          
//           <br /> 
//           <br /> 

//           27. & 28. September 2018           
//           <br /> 
//           <br /> 
//           SAVE THE DATE  

//           </p>



//       {/* <div className=" mx-auto mb-40 w-full p-10 m-4">
//         <img src={backgroundImage} className="w-[full] mx-auto top-0 left-0 absolute" />
//       </div> */}

//         {/* Button */}
//       {/* <button className="absolute top-0 right-0 h-20 w-40 bg-green-500 text-white">Button</button> */}
//       {/* <button className="absolute text-2xl top-10 right-10 h-[80px] w-[300px] text-white rounded-full px-1 py-1 font-bold" style={{ fontFamily: 'Proxima Nova, sans-serif' }} style={{ backgroundColor: '#ED5566' }} >Shop Tickets</button> */}

//       {/* <div className="flex justify-center">
//         <img src={menu} className="w-[full]" alt="Vite logo" />
//       </div> */}

// {/* <div className="absolute top-10 left-10 h-[180px] w-[180px]">
//         <img src={Kommunikationskongress} alt="Vite logo" />
//       </div>

//       <div className="absolute top-[100px] left-10 h-[180px] w-[180px]">
        
//         <img src={Mutwhite} /> */}

//           {/* <p className="absolute top-80 left-[620px] text-lg text-red-600 font-lights" style={{fontSize: '36px'}}>

//           KOMMUNIKATIONSKONGRESS          
//           <br /> 
//           <br /> 

//           27. & 28. September 2018           
//           <br /> 
//           <br /> 
//           SAVE THE DATE  

//           </p> */}

//       </div>




//       {/* <div className="flex justify-center">
//         <img src={viteLogo} className="w-[200px]" alt="Vite logo" />
//       </div> */}

//       {/* <div className=" mx-auto">
//         <img src={backgroundImage} className="w-[full] mx-auto" />
//       </div> */}


//       <div className='mt-[500px] bg-yellow-200 pt-5'>


        // <p className="text-3xl font-bold text-center p-8 m-50px text-6xl">
        //   <span className="text-custom-color text-xs">
        //     Kommunikationskongress
        //   </span> <br />
        //   <span className="text-custom-color">
        //     DER KOMMUNIKATIONSKONGRESS 2024 IN
        //   </span> <span className="text-red-600">BERLIN</span>      
        // </p>

        // <p className="mt-11 text-center text-lg text-white font-light mx-12" style={{fontSize: '36px'}}>
        //   Der Kommunikationskongress ist ein zweitägiges Netzwerk- und 
        //   Weiterbildungsevent, auf dem aktuelle und zukunftsweisende 
        //   Herausforderungen der Kommunikationsbranche erörtert und 
        //   beleuchtet werden. Jährlich kommen rund 1.500 Entscheider 
        //   in Berlin zusammen, um über den Tellerrand ihrer Profession zu 
        //   blicken, Trends zu diskutieren und disruptive Lösungsansätze 
        //   in ihren Alltag zu integrieren. 
        
        //   <br /> 
        //   <br /> 
        //   <br /> 
        //   <br />

        //   Die Menge an Vortragsformaten, Speakern und Netzwerkmöglichkeiten 
        //   ist es, was den Kommunikationskongress so einzigartig macht. Seien 
        //   Sie am 27. und 28. September 2018 dabei und gestalten Sie die 
        //   Zukunft Ihrer Profession mit!        
        // </p>

        // <div>

        // <p className=" text-3xl font-bold ml-20 mt-20 mb-[50px] text-6xl">
        //   <span className="text-custom-color text-xs">
        //     Kommunikationskongress
        //   </span> <br />
        //   <span className="text-custom-color">
        //   RÜCKBLICK </span> <span className="text-red-600">2008-2017</span>      
        // </p>

        // {/* <img src={Rückblick} className='mx-auto' /> */}

        // </div>


// </div>

//       </div>

//     </div>
//   );
// }

// export default App;