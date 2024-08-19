"use client"

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2500, 3700],
                backgroundColor: ['#0747b6', '#2265b6', '#2f91fa']
            }
        ],
        lablels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
    return <Doughnut data={data}
    options={{
        cutout: '60%',
        plugins:{
            legend: {
                display: false}
        }
    }
}
    />
}

export default DoughnutChart