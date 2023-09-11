
import Link from "next/link"
import axios from "@/lib/axios"
import Head from "next/head";
import { FcSearch } from 'react-icons/fc'
import { redirect } from 'next/navigation';
import { AiOutlineRollback } from 'react-icons/ai'
import styles from './appareils/appareil.module.css'
import Image from "next/image";

import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NonSSRWrapper = dynamic(() => import('./nossr'), {
    ssr: false
});

  
function Demande() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_Number] = useState('')
    const [adress, setAdress] = useState('')
    const [phone_name, setPhone_Name] = useState('')
    const [coordinates, setCoordinates] = useState('')
    const clientt ={ name: "null",email: "null",phone_number: 0,adress: "null",phone_name: "null", coordinates: "null"};
    const submitForm = async event => {
        event.preventDefault()
        console.log(name);
        clientt.name = name;
        clientt.email = email;
        clientt.phone_number =phone_number ;
        clientt.adress =adress ;
        clientt.phone_name = phone_name;
        clientt.coordinates = JSON.stringify(coordinates) ;
        console.log(coordinates);
        console.log(clientt);
        axios.post('/api/clients', clientt).then((response) => {
            toast.success('Votre demande a été créé avec succès !', {
                position: toast.POSITION.TOP_CENTER
            });
        }).catch(function (error) {
            // handle error
           // alert("false credentials")
            toast.error('coordonnées manquantes !', {
                position: toast.POSITION.TOP_CENTER
            });

            console.log("false credentials",error);
          });
       // alert("Votre demande a été créé avec succès");
        
        // redirect('/');
    }
    
    
    return (
        <div>
             {/* <title>elgranatie</title> */}
            {/* <div className="header">
               
            demander service
            <Link href='/'> Return to Home</Link>
            </div> */}
            {/* <div className=" header bg-red-300  flex " ><h1 className="hover:text-white">  demander service</h1>
         <Link href="/" ><div className=" ml-[900px] flex hover:text-white gap-2">  Return to Home <div className="mt-1"><AiOutlineRollback/> </div></div></Link></div> */}
            
         <div className=" header bg-gradient-to-r from-[#8d19e0] via-[#5dfce2] to-[#ba5dfc] h-[80px] flex justify-between" ><div className="w-[340px] mt-[10px] ml-[10px] text-2xl font-serif  hover:text-white">  demander service</div>
         <Image src="/logo2.png" width={70} height={10}/> 

         <Link href="/" ><div className="  mt-[10px] flex text-2xl font-serif hover:text-white gap-2 ml-[125px]">  Retour à l'accueil <div className="mt-1"><AiOutlineRollback/> </div></div></Link></div>

            <div className="body bg-white w-[1349px]  h-screen px-[100px]">
            <div className="bg-[#EBEBEB]  mx-[50px] mt-[100px] rounded shadow-2xl	">
            <form onSubmit={submitForm} autoComplete="off">
                <div className="flex gap-20">
                <div>
                <div className="flex pt-[50px] gap-4">
                <p className="w-[300px] pl-[35px]">Entrez votre Prénom et Nom:</p>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="ex: Mohamed Trabelsi" value={name}  onChange={event => setName(event.target.value)} type="text" name="name" id="name" required/>
                </div>
                <div className="flex pt-[10px] gap-4">
                    <p className="w-[300px] pl-[35px] pl-[35px]"> Entrez votre numéto du téléphone:</p>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="ex: 22000000" type="text" value={phone_number}  onChange={event => setPhone_Number(event.target.value)} name="phone_number" id="phone_number" required/>

                </div>

                <div className="flex pt-[10px] gap-4">
                    <p className="w-[300px] pl-[35px]"> Entrez votre e-mail:</p>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="ex: nom@email.com" type="text" value={email}  onChange={event => setEmail(event.target.value)}name="email" id="email" required/>

                </div>

                <div className="flex pt-[10px] gap-4">
                    <p className="w-[300px] pl-[35px]"> Entrez votre adresse:</p>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="ex: Tunis avenue Liberté" type="text" value={adress}  onChange={event => setAdress(event.target.value)} name="adress" id="adress" required/>

                </div><div className="flex pt-[10px] gap-4">
                    <p className="w-[300px] pl-[35px]"> Entrez le modele de votre appareil:</p>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="ex: Samsung Galaxy S22" type="text" value={phone_name}  onChange={event => setPhone_Name(event.target.value)} name="phone_name" id="phone_name" required/>

                </div>
                </div>
                <div className="w-[414px] h-[150px] pt-[50px] ">
                <NonSSRWrapper onChange={(r)=>setCoordinates(r)} />
                </div>
                </div>
                {/* <button className="bg-[#d71ec1] flex rounded text-white mt-[150px]">  */}
                {/* <button className="bg-blue-500 hover:bg-blue-400 font-bold flex rounded py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 text-white mt-[100px] mb-[50px] gap-2"> 
                  <FcSearch/> sauvegarder
                </button> */}
                <button className={styles.b89}> sauvegarder</button>

                    {/* {JSON.stringify(coordinates)} */}
           </form> 
           </div>
            </div>
            <ToastContainer />
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
export default Demande

