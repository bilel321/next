import Link from "next/link"
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { GrServices } from 'react-icons/gr'

import Demande from "./demande"
import { FcSearch }from 'react-icons/fc'
import Image from "next/image";

import copie from "../../public/copie.jpg"
function trial (){
    return (<div className="">
        <div className=" header bg-gradient-to-r from-[#64748b] via-[#5dfce2] to-[#ba5dfc] border-b-4 border-[#9da6a2]	 h-[80px] flex justify-between " ><h1 className="w-[340px] mt-[10px] ml-[10px] text-2xl font-serif  hover:text-white"> Welcome to Ettonsi Garanti</h1>
        <Image src="/logo2.png" width={70} height={10}/> 
         <Link href="/about" ><div className=" flex justify-right mt-[10px]  text-2xl font-serif hover:text-white gap-2 ml-[30px]">A propos Elgaranti Tounsi <BsBoxArrowInUpRight /></div></Link></div>
    
    <div className="body flex w-[1349px] bg-indigo-500 h-screen shadow-inner shadow-gray-600">
    <Link href="/demande" ><div className="  bg-indigo-500 hover:bg-indigo-600 transition duration-300 ease-in-out h-[657px] w-[675px] ">
        
    <div className="bg-image bg-[url('/loupe.png')] hover:bg-[url('')] bg-auto bg-center bg-no-repeat	 h-[657px] w-[675px]   "> 

      
      {/* <Image src="/loupe.png" 
       width={140}
      height={100}
      /> */}
     
      {/* <p className="pt-[320px] text-center text-[0px] hover:text-[28px] ">Demande de service réparation </p> */}
      <div className=" text-center color-overlay d-flex justify-content-center align-items-center text-[28px] pt-[300px] hover:pt-[250px] font-mono">Demande de service réparation</div>
</div>
</div></Link>
    {/* <Link href="/suivi" >  <div style={{backgroundImage: 'url(${copie})',backgroundSize: "cover"}} className=" bg-cyan-600 hover:bg-cyan-700 transition duration-300 ease-in-out h-[657px] w-[683px] bg-[url('/pignon-removebg-preview.png')]" > */}
    <Link href="/suivi" >  <div  className=" bg-cyan-600 hover:bg-cyan-700 transition duration-300 ease-in-out h-[657px] w-[674px] " >

     <div className="bg-image bg-[url('/pignon-removebg-preview.png')] hover:bg-[url('')] bg-auto bg-center bg-no-repeat	  h-[657px] w-[674px]   "> 
      {/* <Image src="/pignon-removebg-preview.png" 
       width={140}
      height={100}
      /> */}
            <div className=" text-center color-overlay d-flex justify-content-center align-items-center text-[28px] pt-[300px] hover:pt-[250px] font-mono ">suivez la réparation de votre appareil</div>

    </div> 
       </div></Link>
    </div>
    <div className=" footer bg-[#373940] h-[170px] flex  text-[#8C9999]" >
       
       <div  className=' flex-col mb-4 mb-md-0 w-[300px] '>
           <h5 className='text-uppercase text-2xl'>Footer Content</h5>

           <p  className="text-xl">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
           </p>
         </div>

       <div  className='flex-col mb-4 mb-md-0 ml-[200px]'>
           <h5 className='text-uppercase text-2xl'>Links</h5>

       <ul className='list-unstyled mb-0 w-[100px] text-xl'>
             <li>
               <a href='#!' className="hover:text-white">
                 Link 1
               </a>
             </li>
             <li>
               <a href='#!' className="hover:text-white">
                 Link 2
               </a>
             </li>
             <li>
               <a href='#!' className="hover:text-white">
                 Link 3
               </a>
             </li>
             <li>
               <a href='#!' className="hover:text-white">
                 Link 4
               </a>
             </li>
           </ul>
           </div>
           
       <div className=" ml-[400px] mt-[140px] text-[#8C9999] flex hover:text-white ">   &copy; {new Date().getFullYear()} Copyright:{' '}
       <a className='text-dark' >MDBootstrap.com</a> <div className="mt-1"> </div></div>
       
       </div>
       </div>
    )
}
export default trial