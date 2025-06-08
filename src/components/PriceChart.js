import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/PriceChart.css';
import { useTranslation } from 'react-i18next';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const PriceChart = () => {
  const { t } = useTranslation();
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Price',
        data: [1, 2, 1.5, 3, 2.5, 4, 3.5],
        borderColor: '#06d702',
        backgroundColor: 'rgba(6,215,2,0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <section className="price-chart">
      <h2>{t('priceChart')}</h2>
      <Line data={data} options={options} />
    </section>
  );
};

export default PriceChart;
