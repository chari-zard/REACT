import React from 'react'

function Card({title='The Coldest Sunset'}){
    return(
    <>
    <div class=" bg-slate-200 max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-32 h-40" src="https://images.pexels.com/photos/28733751/pexels-photo-28733751/free-photo-of-steam-train-on-glenfinnan-viaduct-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl text-black mb-2">{title}</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
</>
);
}

export default Card



//here we made a card component which can be called as much time as you want
//you don't have to write the code again and again for the same thing
//function Card({title='The Coldest Sunset'}){
//in this the thing between {} is called props but they are now destructured
//these values are passed where this component is being used and if no props passed then it'll show the default value i.e The Coldest Sunset
