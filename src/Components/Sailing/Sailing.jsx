import React,{useState} from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CirclesWithBar } from 'react-loader-spinner';

export default function Sailing() {
    let nav=useNavigate()
    async function getAllGames(){
        const options = {
          method: 'GET',
          url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
          params: {
            category: 'sailing'
          },
          headers: {
            'X-RapidAPI-Key': 'e7ec09a5b6msh30db8840fe87c4ep185321jsn73c0658bb17f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        };
        
      return await axios.request(options);

      
    }
     let {data,isLoading}=useQuery('getAllGames',()=>getAllGames())
     console.log(data?.data);
   return <>
   {isLoading?  <div className='  flex   justify-center items-center h-screen'>

<CirclesWithBar
height="300"
width="300"
color="#fff"
wrapperStyle={{}}
wrapperClass=""
visible={true}
outerCircleColor=""
innerCircleColor=""
barColor=""

ariaLabel='circles-with-bar-loading'
/>
</div>
   :
     <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 mx-auto container px-2 sm:px-6 lg:px-8'>
       {data?.data.map((game)=>
         <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.4 }}
              viewport={{once:true}}
         onClick={
           ()=>nav(`/details/${game.id}`)
         }
         key={game.id} className='mt-6 rounded-md   bg-slate-300'>
           <div className=" relative rounded-md">
             <img src={game.thumbnail} className='rounded-md' alt="" />
             <h1 className='absolute top-2 right-2 bg-white py-1 px-2 rounded-md'>Free</h1>
           </div>
           <div className=" mx-2 p-2 relative h-40">
             <div className="flex justify-between w-auto text-lg">
               <h1 className=''>{game.title}</h1>
              
             </div>
             <h1 className='text-md'>{game.short_description.split('',60)}</h1>
             <div className="  relative ">
              <div className="flex mt-3 text-sm lg:mt-6  w-full absolute">
              <h1 className='absolute left-0 bg-white py-1 px-2 rounded-md'>{game.platform}</h1>
              <h1 className=' absolute right-0 bg-white py-1 px-2 rounded-md'>{game.release_date}</h1>
              </div>
            </div>
           </div>
           </motion.div>
       )
       }
     
     </div>}
   </>
}
