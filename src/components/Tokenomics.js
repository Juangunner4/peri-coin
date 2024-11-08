import React from 'react';
import { Pie } from 'react-chartjs-2';
import '../styles/Tokenomics.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTranslation } from 'react-i18next';

ChartJS.register(ArcElement, Tooltip, Legend);

function Tokenomics() {
  const { t } = useTranslation();

  const data = {
    labels: ['Liquidity Pool (LP)', 'Treasury', 'Centralized Exchange (CEX) Wallet'],
    datasets: [
      {
        label: 'Tokenomics Distribution',
        data: [85, 10, 5],
        backgroundColor: ['#06d702', '#e68901', '#e60000'],
        borderColor: ['#025b00', '#875000', '#590000'],
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
    maintainAspectRatio: false,  // Allows control over chart size
    layout: {
      padding: 20,
    },
  };

  return (
    <section className="tokenomics">
      <h2>{t("tokenomics")}
      </h2>
      <div className="chart-container">
        <Pie data={data} options={options} width={250} height={250} />
      </div>
    </section>
  );
}

export default Tokenomics;
