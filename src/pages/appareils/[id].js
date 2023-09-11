import { useRouter } from "next/router"
import axios from "@/lib/axios"
import { useEffect, useState } from "react";
import RepairProcess from "../RepairProcess";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRollback } from 'react-icons/ai'
import { AiTwotonePrinter } from 'react-icons/ai'

AiTwotonePrinter
// import { print } from '@fortawesome/free-solid-svg-icons'
//import{FontAwesomeIcon } from'@font-awesome/FontAwesomeIcon'
import { CgCloseR } from 'react-icons/cg'
import Backdrop from '@mui/material/Backdrop';
import { CircularProgress } from '@mui/material';
import Modal from 'react-modal'
import Router from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './appareil.module.css'


function appareil(props){
  let [cname, setCname] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on("routeChangeStart",(url) =>{
    console.log("2!!!");
    setIsLoading(true)
    
  });
  Router.events.on("routeChangeComplete",(url) =>{
    setIsLoading(false)

    console.log("2...");
  });
  

  const [isOpen, setIsOpen] = useState(false)
const [modalShow, setModalShow] = useState(false)
    let [appareils, setAppareils] = useState([]);
    let [valeur, setValeur] = useState(0);
    let arr = [];
    const router = useRouter()
const appid = router.query.id ;
let etat = "produit reçu";
 let x = 10;
    useEffect(() => {
        if (!appid) return;
        console.log(appid);
        axios.get(`/api/appareils/${appid}`).then((response) => {
            const data = response.data;
            let y = 10;
            console.log("data",data);
            console.log("datasta",data.data.status);
            etat = data.data.status;
            console.log("xx",etat)
            if (etat == "diagnostique") y=1;
            console.log("xxx",y)
            console.log("appareils",appareils)
            setAppareils([data.data]);
            if (etat == "produit reçu") {y=0;}
    else if (etat == "diagnostique") {y=1;}
    else if (etat == "devis") {y=2;}
    else if (etat == "attente_composants") {y=3;}
    else if (etat == "reparation") {y=4;}
    else if (etat == "en_livraison") {y=5;}
    else if (etat == "livré") {y=6;}
    console.log("x2",y);
    setValeur(valeur + y);
    console.log("val",valeur)

    return y;
        });
    }, [appid]);
    console.log("datas",appareils[0])
    arr = appareils[0];
   // let cid = data.data.client_id;
   // console.log("cid", cid);
    console.log("arr", arr);
    //x = y ;
console.log("x",x);




function identify(props) {
    let k = 0 ;
    if (props == "reparation") {k= 4;}
    else if (props == "produit reçu") {k=0;}
    else if (props == "diagnostique") {k=1;}
    else if (props == "devis") {k=2;}
    else if (props == "attente_composants") {k=3;}
    else if (props == "en_livraison") {k=5;}
    else if (props == "livré") {k=6;}
    return k;
}
const customStyles = {
  overlay: {
     backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  content: {
     top: '50%',
     left: '50%',
     right: 'auto',
     height: '500px',
     width: '400px',
     bottom: 'auto',
     marginRight: '-50%',
     transform: 'translate(-50%, -50%)'
  }
}

function generer_devis(){
  setIsOpen(true)
  setModalShow(true)

}
let dev = appareil.devis ;
function verif_devis(props){
let cid = props.client_id;
console.log("cid",cid);
  // useEffect(() => {
    axios.get(`/api/clients/${cid}`).then((response) => {
        const data2 = response.data.data.name;
        setCname(data2);
        //console.log(data);
        // setAppareils(data.data);
        console.log("client",data2);
    });
  // }, []);
  

  console.log("dev",props.devis);
  
  const parsedDate = new Date(props.created_at);

const year = parsedDate.getFullYear();
const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
const day = String(parsedDate.getDate()).padStart(2, "0");

const date2 = `${year}-${month}-${day}`;

console.log("date2",date2);
  if(!props.devis) return <div className="="text-xl>votre n'est pas généré</div>;
  return <div>
    {/* <div className="text-xl"> votre devis est {props.devis}</div> */}
    <div className="container">
    <div className="row">
            <div className="col-lg-12">
                <div className={styles.card}>
                    <div className="card-body">
                        {/* <div className="invoice-title">
                            <h4 className="float-end text-[15px]">Invoice #DS0204 <span className="badge bg-success text-[12px] ms-2">Paid</span></h4>
                            <div className="mb-4">
                               <h2 className="mb-1 text-muted">Bootdey.com</h2>
                            </div>
                            <div className="text-muted">
                                <p className="mb-1">3184 Spruce Drive Pittsburgh, PA 15201</p>
                                <p className="mb-1"><i className="uil uil-envelope-alt me-1"></i> xyz@987.com</p>
                                <p><i className="uil uil-phone me-1"></i> 012-345-6789</p>
                            </div>
                        </div> */}
    
                        <hr className="my-4"/>
    
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="flex text-muted gap-4">
                                    <h5 className="text-[16px] mb-3 font-bold">Billed To:</h5>
                                    <p>{cname}</p>
                                    {/* <h5 className="text-[15px] mb-2">Preston Miller</h5>
                                    <p className="mb-1">4068 Post Avenue Newfolden, MN 56738</p>
                                    <p className="mb-1">PrestonMiller@armyspy.com</p>
                                    <p>001-234-5678</p> */}
                                </div>
                            </div>
                            
                            <div className="col-sm-6">
                                <div className="text-muted text-sm-end">
                                    {/* <div>
                                        <h5 className="text-[15px] mb-1">Invoice No:</h5>
                                        <p>#DZ0112</p>
                                    </div> */}
                                    <div className="flex mt-4 gap-4">
                                        <h5 className="text-[16px] mb-1 font-bold">Invoice Date:</h5>
                                        <p>{date2}</p>
                                    </div>
                                    {/* <div className="mt-4">
                                        <h5 className="text-[15px] mb-1">Order No:</h5>
                                        <p>#1123456</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        
                        <div className="py-2">
                            <h5 className="text-[16px] font-bold">Order Summary</h5>
    
                            <div className="table-responsive">
                                <table className="table align-middle table-nowrap table-centered mb-0">
                                    <thead>
                                        <tr className=" border-2">
                                            
                                            <th className=" border-2">Item</th>
                                            <th className=" border-2">Price</th>
                                            <th className=" border-2">Quantity</th>
                                            <th className="text-end w-[120px] border-2" >Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className=" border-2">
                                            {/* <th scope="row">01</th> */}
                                            <td className=" border-2">
                                                <div>
                                                    <h5 className="text-truncate text-[16px] mb-1 ">{props.panne}</h5>
                                                    {/* <p className="text-muted mb-0">Watch, Black</p> */}
                                                </div>
                                            </td>
                                            <td className=" border-2">Dt {props.devis}</td>
                                            <td className=" border-2">1</td>
                                            <td className="text-end border-2">Dt {props.devis}</td>
                                        </tr>
                                        {/* <tr> */}
                                            {/* <th scope="row">02</th> */}
                                            {/* <td>
                                                <div>
                                                    <h5 className="text-truncate text-[14px] mb-1">Stainless Steel S010</h5>
                                                    <p className="text-muted mb-0">Watch, Gold</p>
                                                </div>
                                            </td> */}
                                            {/* <td>$ {props.devis}</td>
                                            <td>2</td>
                                            <td className="text-end">$491.00</td>
                                        </tr> */}
                                        <tr className=" border-2">
                                            <th scope="row" colspan="3" className="text-end border-2 ">Sous-Total :</th>
                                            <td className="text-end">Dt 500.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" colspan="3" className="border-2 text-end">
                                                Discount :</th>
                                            <td className="border-2 text-end">- Dt 50.00</td>
                                        </tr>
                                        
                                        <tr>
                                            <th scope="row" colspan="3" className="border-2 text-end">
                                            Frais de Livraison :</th>
                                            <td className="border-2 text-end">Dt 10.00</td>
                                        </tr>
                                        
                                        <tr>
                                            <th scope="row" colspan="3" className="border-2 text-end">
                                                Tax :</th>
                                            <td className="border-2 text-end">Dt 95.00</td>
                                        </tr>
                                        
                                        <tr>
                                            <th scope="row" colspan="3" className="border-2 text-end">Total :</th>
                                            <td className="border-2 text-end"><h4 className="m-0 fw-semibold">Dt 555.00</h4></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-print-none mt-4">
                                <div className="float-end">
                                    <a href="javascript:window.print()" className="btn btn-success me-1"><button className="bg-blue-500 hover:bg-blue-400 font-bold flex rounded py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 text-white mt-[10px] mb-[50px] gap-2"> 
                                       Imprimer <AiTwotonePrinter/>
                                       </button> 
                                    {/* <FontAwesomeIcon icon="fa-solid fa-print" /> */}
                                    </a>
                                    {/* <a href="#" className="btn btn-primary w-md">Send</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
}

function accepter(props){
  let id= props.id;
  setIsOpen(false);
  axios.put(`/api/appareils/${id}?traitement=accepté`).then((response) => {
    toast.success('le traitement a été accepté !', {
        position: toast.POSITION.TOP_CENTER
    }); })
  //props="accepté";
  console.log("traitement",props)
 // console.log("traitementappareil",appareil)

}

function refuser(props){
  let id= props.id;
  setIsOpen(false);

  axios.put(`/api/appareils/${id}?traitement=refusé`).then((response) => {
    toast.error('le traitement a été refusé !', {
        position: toast.POSITION.TOP_CENTER
    }); })

  props="refuser";
  console.log("traitement",props)
}


if (!appid) return null;
    return(<div>
    

    
    {/* <div className=" bg-[#8d19e0] h-[50px]  flex " ><h1 className="hover:text-white">  Avancement</h1>
         <Link href="/" ><div className=" ml-[900px] flex hover:text-white gap-2">  Return to Home <div className="mt-1"><AiOutlineRollback/> </div></div></Link></div> */}
     
         <div className=" header bg-gradient-to-r from-[#8d19e0] via-[#5dfce2] to-[#ba5dfc] h-[80px] flex justify-between" ><div className="w-[340px] mt-[10px] ml-[10px] text-2xl font-serif  hover:text-white">  Suivez l'Avancement</div>
         <Image src="/logo2.png" width={70} height={10}/>
         <Link href="/" ><div className="  mt-[10px] flex text-2xl font-serif hover:text-white gap-2 ml-[126px]">  Retour à l'accueil <div className="mt-1"><AiOutlineRollback/> </div></div></Link></div>
     
     <div className="body flex h-screen ml-[50px] mt-[50px]">
    
        {/* {appid? appid: <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open
                
              >
                <CircularProgress color="inherit" />
              </Backdrop>} */}

        {appareils? appareils.map((appareil) => (
            <div className="w-1/2 h-1/2  key={appareil.id}"  >
                {/* <div className="" key={appareil.id}> */}
                    {/* <h1 >{appareil.name}</h1>
                    <h1>{appareil.status}</h1> */}
                    {/* <h1>{identify(appareil.status)}</h1> */}
                    {/* </div> */}
               
     
      
      {/* <div className="w-1/2 h-1/2  key={appareil.id}"  > */}
       {/* <div> */}
       {!<RepairProcess/> && <h2>gggg</h2> && <CircularProgress className="z-40" 
      //  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
       />}

     <RepairProcess data={identify(appareil.status)}/>
     {/* <button className="relative   inline-flex items-center justify-center p-0.5  mr-2 ml-[700px] overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" onClick={generer_devis}>
  <span className="relative  px-5 py-2.5 transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
     Générer Devis
  </span>
</button> */}
<button className="relative w-[200px] mt-[50px]  inline-flex items-center justify-center p-0.5 mb-[50px] mr-2 ml-[700px] overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" onClick={generer_devis}>
  <span className="relative w-[200px]  transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Générer Devis  </span>
</button>
     {/* </div> */}
     <Modal isOpen={isOpen} style={customStyles} centered>
      <div className="flex ">
      <div className="text-xl mx-[10px]">Gestion du Devis </div>
      <div className={styles.iclose} onClick={() => setIsOpen(false)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <svg viewBox="0 0 36 36" className={styles.circle}>
        <path
      stroke-dasharray="100, 100"
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831" 
    />
       </svg>
      </div>
      </div>
     {/* <button onClick={() => setIsOpen(false)}>Close Modal<CgCloseR/></button>   */}
            {verif_devis(appareil)}
            {/* {appareil.devis} */}
            
           
            <div className="flex-center">
            <button onClick={() => accepter(appareil)} className={styles.b93} >Accepter</button>
            <button onClick={() => refuser(appareil)} className={styles.b92} >Refuser</button>
            </div>
            </Modal>
      </div>
      
      )
      ): <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
      
    >
      {/* <CircularProgress color="inherit" /> */}
    </Backdrop>} 
    
     <div className="w-64 h-64 mt-32 mr-[50px]  fixed right-1">
      <Image src="/garcon.png"  width={250}
      height={180}/>
      </div>
    </div>
    <ToastContainer />


{/* <Modal isOpen={isOpen} style={customStyles} centered><div className="text-xl mx-[10px]">Credentials matched !! </div>
            <div>hhhhhh</div>
            <verif_devis/>
            {appareil.devis}
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
            </Modal> */}

    <div className=" footer bg-[#373940] h-[170px] flex  text-[#8C9999] mt-[15px]" >
       
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
    );
}
export default appareil