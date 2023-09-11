import React from 'react';
import Highcharts from 'highcharts';
import HighchartsTimeline from 'highcharts/modules/timeline';
import HighchartsReact from 'highcharts-react-official';

HighchartsTimeline(Highcharts);

function TimelineChart() {
  const chartOptions = {
    chart: {
      inverted: true,
      marginLeft: 135,
      type: 'timeline',
    },
    xAxis: {
      type: 'datetime',
      visible: false,
    },
    yAxis: {
      categories: ['Produit reçu', 'Diagnostique', 'Attente de pièces'],
      title: null,
      reversed: true,
    },
    title: {
      text: 'Timeline Chart',
    },
    series: [{
      data: [{
        x: Date.UTC(2023, 1, 1),
        name: 'Event 1',
        description: 'Description of event 1',
        y: 0, // Produit reçu
      }, {
        x: Date.UTC(2023, 2, 1),
        name: 'Event 2',
        description: 'Description of event 2',
        y: 1, // Diagnostique
      }, {
        x: Date.UTC(2023, 3, 1),
        name: 'Event 3',
        description: 'Description of event 3',
        y: 2, // Attente de pièces
      }],
    }],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default TimelineChart;
