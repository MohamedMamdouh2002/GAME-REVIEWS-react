import axios from 'axios';
import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export default function Details() {
    let {id}=useParams()
async function getDetails(myId){

    const options = {
        method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
  params: {id: myId},
  headers: {
      'X-RapidAPI-Key': 'e7ec09a5b6msh30db8840fe87c4ep185321jsn73c0658bb17f',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}
return await axios.request(options);
}

let {data,isLoading} =useQuery("getDetails",()=>getDetails(id))
console.log(data?.data);

  return <>
   {isLoading?
  <div className='  flex   justify-center items-center h-screen'>

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
   : <div>
    <div className="  mx-auto  container px-2 sm:px-6 lg:px-12 bg-slate-800 text-white lg:h-screen">
      <h1 className='mb-8 text-4xl pt-5'>Details Game</h1>
        <div className="lg:flex justify-between  ">
        
        <div className="lg:w-1/3 sm:mb-4">
            <img src={data?.data?.thumbnail} className='lg:h-56  mb-2 ' alt="" />

        <h3 className=''>Title: <small className='text-lg p-1 rounded-lg bg-amber-400'>{data?.data?.title}</small> </h3>
              <p className='mt-2 text-lg'> Category: <span className="text-lg p-1 rounded-lg bg-amber-400"> {data?.data?.genre}</span> </p>
              <p className='my-3 text-lg'>Platform: <span className="text-lg p-1 rounded-lg  bg-amber-400"> {data?.data?.platform}</span> </p>
              <p className=' text-lg'>Status: <span className="text-lg p-1 rounded-lg bg-amber-400"> {data?.data?.status}</span> </p>
            </div>
        <div className="lg:w-2/3 sm:mb-5">
              <p className="small mb-5">{data?.data?.description}</p>
              <a className="bg-amber-200 hover:bg-amber-400 duration-500 text-black px-3 py-3 outline-double outline-yellow-200 " target="_blank" href={data.data?.game_url}>Show Game</a>
        </div>
          
        </div>
    </div>
    </div>}
  </>
}
