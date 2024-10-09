// // import React from 'react'
// // import {useState} from 'react'

// // function Bg_chng({color}){


// //     return(
// //         <div className='w-full h-screen '  >
// //             <div className="fixed flex flex-wrap justify-center bottom-4 inset-x-0 ">
// //                 <div className="flex flex-wrap justify-center gap-3 shadow-xl rounded bg-white py-3 px-4">
// //                     <button className="px-3 py-2 rounded" onClick={()=>document.body.style.backgroundColor=color}>{color}</button>
// //                 </div>
// //             </div>
// //         </div>
// //         );
// //     }

// // export default Bg_chng



// import React from 'react';

// function Bg_chng({ color }) {
//     return (
//         <div className='flex flex-col items-center'>
//             <button 
//                 className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300" 
//                 onClick={() => document.body.style.backgroundColor = color}
//             >
//                 {color}
//             </button>
//         </div>
//     );
// }

// export default Bg_chng;



import React from 'react';

function Bg_chng({ color, setBgColor }) {
    return (
        <div className='flex flex-col items-center'>
            <button 
                className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300" 
                onClick={() => setBgColor(color)} // Update the background color using setBgColor
            >
                {color}
            </button>
        </div>
    );
}

export default Bg_chng;
