//import TimelineChart from "./timelinechart";
//HighchartsTimeline(Highcharts);
import RepairProcess from "./repairprocess";
import Image from "next/image";
import Link from "next/link";

function Resultat() {
  

  return (<div>
    <div className="header flex">
      <h1>Avancement </h1>
       <Link href="/">
        <p className="text-right">Retour Au Menu Pricipal</p>
       </Link>
    </div>
    <div className="body flex ">
      {/* <TimelineChart></TimelineChart> */}
      <div className="w-1/2 h-1/2">
<RepairProcess data={22}/>
</div>
<div className="w-64 h-64 mt-32">
<Image src="/copie.png"  width={100}
      height={100}/>
      </div>
    </div>
    </div>
  );
}

export default Resultat;
