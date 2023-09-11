import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from 'highcharts/modules/exporting';
import timeline from 'highcharts/modules/timeline';

// Initialize Highcharts modules
HighchartsExporting(Highcharts);
timeline(Highcharts);

const Tests = () => {
  const options = {
    title: {
      text: "My chart",
    },
    xAxis: {
      categories: ["Avancement"],
    },
    yAxis: {
      categories: ["Produit reçu", "diagnostique", "attente de pièces"],
      title: null,
    },
    series: [
      {
        type: 'timeline',
        data: [{
          name: "Produit reçu",
          dataLabels: {
            format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
            '{point.x:%d %b %Y}</span><br/>{point.label}',
          },
          label: "Label for point 1",
          x: Date.UTC(2022, 1, 1)
        }, {
          name: "diagnostique",
          dataLabels: {
            format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
            '{point.x:%d %b %Y}</span><br/>{point.label}',
          },
          label: "Label for point 2",
          x: Date.UTC(2022, 2, 1)
        }, {
          name: "attente de pièces",
          dataLabels: {
            format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
            '{point.x:%d %b %Y}</span><br/>{point.label}',
          },
          label: "Label for point 3",
          x: Date.UTC(2022, 3, 1)
        }],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Tests;
