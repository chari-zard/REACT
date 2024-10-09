// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Bg_chng from './bg_chng.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <div className='fixed flex justify-between bg-white py-3 px-3 bottom-3 inset-x-0 mx-3 rounded'>
//   {/* <> */}
//     <Bg_chng color={'olive'}/>
//     <Bg_chng color={'green'}/>
//     <Bg_chng color={'blue'}/>
//     <Bg_chng color={'orange'}/>
//     <Bg_chng color={'yellow'}/>
//     <Bg_chng color={'purple'}/>
//     <Bg_chng color={'grey'}/>
//     <Bg_chng color={'red'}/>
//     <Bg_chng color={'cyan'}/>
//   </div>
//   {/* </> */}
//   </StrictMode>,
// )




import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Bg_chng from './bg_chng.jsx';
import './index.css';

function App() {
  const [bgColor, setBgColor] = useState('white'); // Initial background color

  return (
    <div style={{ backgroundColor: bgColor }} className="w-full h-screen">
      <StrictMode>
        <div className='flex justify-between'>
          <Bg_chng color={'olive'} setBgColor={setBgColor} />
          <Bg_chng color={'green'} setBgColor={setBgColor} />
          <Bg_chng color={'blue'} setBgColor={setBgColor} />
          <Bg_chng color={'orange'} setBgColor={setBgColor} />
          <Bg_chng color={'yellow'} setBgColor={setBgColor} />
          <Bg_chng color={'purple'} setBgColor={setBgColor} />
          <Bg_chng color={'grey'} setBgColor={setBgColor} />
          <Bg_chng color={'red'} setBgColor={setBgColor} />
          <Bg_chng color={'cyan'} setBgColor={setBgColor} />
        </div>
      </StrictMode>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
