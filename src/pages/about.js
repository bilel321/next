import Image from "next/image"
import Link from "next/link"
import styles from './about.module.css'
import { useEffect, useState } from "react";

function About() {
    
  
    return <div>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0/js/bootstrap.bundle.min.js"></script>

       <h1> About ettounsi Garanti</h1> 
     {/* <Image src="/logo3.svg" width={500} height={100}/>  */}
       <Image src="/logo2.png" width={100} height={100}/> 

       <Link href='/' > Return to Home</Link> 
 
      <div className="text-3xl ">
        <p className="font-bold underline" > email adress </p>
        <p>phone number</p>


        
      </div> 
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" /> 


      


                      
</div>
}
export default About

/////////////////////


import React from "react";
