import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Router from 'next/router'

const RepairProcess = (props) => {
  Router.events.on("routeChangeStart",(url) =>{
    console.log("Repair...");
  });
console.log("proooops",props.data);
let x=props.data ;
console.log("variable",x);
  const options = {
    chart: {
      backgroundColor: '#EBEBEB',
      type: 'bar'
      
    },
    title: {
      text: 'Product Repair Status',
    align: 'left'
    },
    legend: {
        enabled : false
    },
    colors: [
        '#764ABC',
        
    ],
    xAxis: {
    gridLineWidth: 0,
    min: 0
   
  },
    yAxis: {
    min: 0,
    title: {
      text: ' avancement(etat actuel)',
      align: 'high'
    },
      categories: ['produit reçu', 'Diagnostique', 'devis', 'en attente de Composants', 'Réparation du Produit', 'Produit en livraison', 'Produit livré'],
      gridLineWidth: 0,
      labels: {
       overflow: 'justify'
    },
    },
    tooltip: {
    // valueSuffix: ' millions',
        enabled: false

  },
  credits: {
    enabled: false
  },
    plotOptions: {
      bar: {
        pointWidth: 40,
        borderRadius: 10,
       
        dataLabels: {
            enabled: true
        },
        groupPadding: 0.1
    },
    
      series: {
        borderWidth: 0,
        
        pointWidth: 40,
      //   borderRadius: {
      //     radius: 10
      // },
        dataLabels: {
          enabled: true,
          //format: '{point.y:.0f}%',
          formatter: function() {
            // Calculate the percentage relative to the specified range
            var percentage = (this.y - 0) / (6 - 0) * 100;
            
            // Format the percentage with one decimal place
            return percentage.toFixed(1) + '%';
          },
      
          style: {
            color: 'red',
            textOutline: 'none',
            fontSize: '16px'
          }
        }
      }
    },
    xAxis: {
        lineWidth: 0,

      //categories: ['', '', '', ''],
      labels: {
        enabled: false
      },
      
      title: {
        text: 'Status',
        style: {
          color: 'black'
        }
      }
    },
    series: [{
      name: 'Status',
      data: [x]
    }]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default RepairProcess;
