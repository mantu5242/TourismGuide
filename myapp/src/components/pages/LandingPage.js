import React from 'react'
import {Link} from 'react-router-dom'
import bgl from '../../image/bgl.jpg'
import Tool from './Carousel/Tool'
import Navbar from './Carousel/Navbar'
// import Tool from './Carousel/Tool'
const LandingPage = () => {
  return (
    <div className='' >
      <div>
          <Navbar/>
          <div className='bg-black p-10 absolute z-0'>
              <img src={bgl} className='opacity-60 blur-sm '></img>
          </div>
          <div className=' absolute z-10 m-auto  w-full pt-20'>
              <h1 className='text-center text-white font-extrabold font-serif text-8xl m-10 bg-gradient-to-r from-indigo-500 '>Welcome to Kashmir</h1>
              <p className='text-center text-green-300 pl-10 pr-10 mb-20'>Popularly known as the "Paradise on Earth," Jammu and Kashmir  is a tourist favorite for its scenic splendor, snow-capped mountains, plentiful wildlife, exquisite monuments, hospitable people, and local people handicrafts. Nestled in the Himalayan, Pir Panjal and Karakoram mountain ranges are renowned for their natural beauty and gentle people. Kashmir is memorable, as it's not only a nature lover's paradise but also a must-visit place for all adventure junkies.
                Kashmir's trekking and hiking routes are spellbinding, dotted with the most beautiful mountain peaks, massive glaciers, splendid monasteries, blue lakes, rivers, forests, verdant meadows, and tall pine trees. While adventure sports like Skiing, golf, river rafting, paragliding, and camping make the trip to Kashmir more adventurous, Amarnath and Vaishno Devi attract many pilgrims every year. 
                Among one of the top honeymoon destinations in India, Gulmarg boasts of being a beautiful town, unlike the crowd in Manali and Shimla. Kashmir is also home to Asia's longest Cable Car - Gulmarg Gondola, a truly enchanting experience. The Shikara in the Dal Lake of Srinagar cannot be missed! The exquisite Mughal gardens like Nishat Bagh, Shalimar Bagh, and Chashm-E-Shahi are also must-visits. The state's unparalleled beauty and charm and the residents' sweetness will remain etched in your memory forever.
                Kashmiri cuisine or Wazwan, is famous all over the globe. So when in Kashmir, trying out the local dishes, which are rich in unique fragrant spices, is a must. Also, the Kashmiri shawls, Kashmiri apples, and dried fruits (almonds and walnuts) from the Lal Chowk Market are a must-buy. Be mindful of heavy snowfall affecting connectivity to some destinations in Kashmir during the winter months of December to February.

              </p>
              <Tool/>
          </div>
      </div>
      <div className= 'body bottom-0  h-64 w-full bg-orange-200'>

      </div>
      
    </div>
  )
} 

export default LandingPage
