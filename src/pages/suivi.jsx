import axios from "@/lib/axios"
import Link from "next/link"
import { useEffect, useState } from "react";
import { FaRegSmileWink } from 'react-icons/fa'
import { AiOutlineRollback } from 'react-icons/ai'
import Modal from 'react-modal'
//import Button from 'react-bootstrap/Button';
//import Button from '@mui/material/Button';

//import Modal from 'react-bootstrap/Modal';
//import SendIcon from '@mui/icons-material/SendIcon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";



function Suivi(props) {
    let bool = false
    console.log(bool)
    const [phone_number, setPhone_Number] = useState('')
    const [phone_id, setPhone_id] = useState('')
    const phonee ={ phone_number: 0, phone_id:0}
    let [appareils, setAppareils] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        axios.get("/api/appareils").then((response) => {
            const data = response.data;
            console.log(data);
            setAppareils(data.data);
            console.log("appareils",appareils);
        });
    }, []);

    const submitForm = async event => {
        event.preventDefault()
        console.log(phone_number);
        phonee.phone_number =phone_number ;
        phonee.phone_id =phone_id ;
        console.log("phonee",phonee);
        axios.get("/api/clients/"+ phonee.phone_number +"/appareils/"+ phonee.phone_id).then((response) => {
            const data = response.data;
            console.log("resultat",data);
            
            console.log("bool",bool)
            console.log("id",phonee.phone_id);
            console.log("phoneenumber",phonee.phone_number);
            console.log("number",data.phone_number);
            setIsOpen(true)
            setModalShow(true)
            // alert("good")
           // popup("good")
            // return(
            //     <div><Link href="/appareils/1"/></div>
            // )
            }).catch(function (error) {
                // handle error
               // alert("false credentials")
                toast.error('false credentials !', {
                    position: toast.POSITION.TOP_CENTER
                });

                console.log("false credentials",error);
              });
             // if(!error) bool = true;
              //console.log("error",error)
              
       // alert("test");
        // redirect('/');
    }
    const customStyles = {
        overlay: {
           backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        content: {
           top: '50%',
           left: '50%',
           right: 'auto',
           height: '150px',
           width: '330px',
           bottom: 'auto',
           marginRight: '-50%',
           transform: 'translate(-50%, -50%)'
        }
     }
    const path = !bool ? '/appareils/1':''

    // function MyVerticallyCenteredModal(props) {
    //     return (
    //       <Modal
    //         {...props}
    //         size="lg"
    //         aria-labelledby="contained-modal-title-vcenter"
    //         centered
    //       >
    //         <Modal.Header closeButton>
    //           <Modal.Title id="contained-modal-title-vcenter">
    //             Modal heading
    //           </Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>
    //           <h4>Centered Modal</h4>
    //           <p>
    //             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    //             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
    //             consectetur ac, vestibulum at eros.
    //           </p>
    //         </Modal.Body>
    //         <Modal.Footer>
    //           <Button onClick={props.onHide}>Close</Button>
    //         </Modal.Footer>
    //       </Modal>
    //     );
    //   }
    return <div>
        {/* <div className="header">
            Suivez le procés de réparation
            <div className=" ml-[1000px]">
            <Link href='/'> Return to Home</Link>
            </div>
        </div> */}
        <div className=" header bg-gradient-to-r from-[#8d19e0] via-[#5dfce2] to-[#ba5dfc] h-[80px] flex justify-between" ><div className="w-[340px] mt-[10px] ml-[10px] text-2xl font-serif  hover:text-white">  Suivez le procés de réparation</div>
        <Image src="/logo2.png" width={70} height={10}/> 
         <Link href="/" ><div className="  mt-[10px] flex text-2xl font-serif hover:text-white gap-2 ml-[126px]">  Retour à l'accueil <div className="mt-1"><AiOutlineRollback/> </div></div></Link></div>
        <div className="body bg-white h-screen px-[100px] flex ">
        {/* <form action="/api/form" method="get"> */}
        
        <div className="bg-[#EBEBEB] w-300px mx-[50px] mt-[100px] mb-[200px] rounded shadow-2xl	">
        <form onSubmit={submitForm} autoComplete="off">
            <div className="flex pt-[50px] gap-16">
                <p className="w-[400px] text-[#313E59] text-2xl font-semibold ml-[50px]">Entrez votre numéro de téléphone:</p>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-[200px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" value={phone_number}  onChange={event => setPhone_Number(event.target.value)} placeholder="22 000 000" type="text" name="search" id="phone_number" required/>
            </div>
            <div className="flex pt-[50px] gap-16">
                <p className="w-[400px] text-[#313E59] text-2xl font-semibold ml-[50px]"> Entrez la référence de votre appareil:</p>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-[200px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" value={phone_id}  onChange={event => setPhone_id(event.target.value)} placeholder="#qsdmcdlc215" type="text" name="search"  id="phone_id" required/>

            </div>
            {/* {appareils.map((appareil) => (
                <div className="" key={appareil.id}>
                    <h1>{appareil.name}</h1>
                    <h1>{appareil.status}</h1>
                </div>
            )
            )} */}
              {/* <Link href={path}> */}
              <button className="relative mt-[50px]  inline-flex items-center justify-center p-0.5 mb-[50px] mr-2 ml-[700px] overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
  <span className="relative  px-5 py-2.5 transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
     Vérifier
  </span>
</button>
            {/* </Link> */}

            </form>
            </div>
            <div className="mt-[100px]"><Image src="/fille.png"  width={250}
      height={180}/></div>
            <Modal isOpen={isOpen} style={customStyles} centered><div className="flex text-xl mx-[10px] gap-4">Credentials matched !!<FaRegSmileWink className="w-[30px] h-[30px] text-[#50d71e]"/> </div>
            <Link href={"/appareils/"+phone_id}>
            {/* <Button variant="contained" endIcon={<SendIcon />}> Send</Button> */}
            {/* <p>goooo</p> */}
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[25px] ml-[55px]">
            goooo    <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
            
            </Link>
            </Modal>
            {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
            {/* <Link href="/resultat">
                <span> rechercher</span>
            </Link>
            <Link href={path}>
                <span> recherchertest</span>
            </Link> */}

            {/* </form> */}
            <ToastContainer />

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
}
export default Suivi
