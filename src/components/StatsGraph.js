import React from "react";
import { useState } from 'react';
import { statsColors } from "../pages/PageStats";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const StatsGraph = () => {

    const radios = ["Classique", "Carte", "Forme", "Global"];
    const [selectedRadio, setSelectedRadio] = useState(radios[0]);
    let datasetsG = {};
    let colors = statsColors;

    let n = 0;

    radios.forEach((r) => {
        datasetsG[r] = [];
        for (let i = 1; i < 100; i++) {
            datasetsG[r].push({ x: i, y: (Math.sin(i / 3) + 1) * 3 - n })
        }

        n++;
    });

    let data = datasetsG[selectedRadio];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Statistiques',
            },
            tooltip: {
                callbacks: {
                    title: function (tooltipItem, data) {
                        return tooltipItem[0].label + (tooltipItem[0].label > 1 ? "ème" : "ère") + " partie";
                    }
                }
            }
        },
        scales: {
            xAxis: {
                type: 'linear',
                min: 1,
                scaleBeginAtZero: false,
            },

            yAxis: {
                reverse: true,
                min: 0,
                max: 6,
            }
        }
    };

    const dataGraph = {
        datasets: [
            {
                label: "Nombre d'essais",
                data: data,
                borderColor: colors[selectedRadio]["borderColor"],
                backgroundColor: colors[selectedRadio]["backgroundColor"],
            }
        ]
    };
    return (
        <div>
            <Line options={options} data={dataGraph} />

            <ul className="radio-container">
                {radios.map((dataset, index) => (
                    <li key={index}>
                        <input type="radio" id={"graph-" + dataset} name="datasetRadio" checked={dataset === selectedRadio} onChange={(e) => {
                            setSelectedRadio((e.target.id.replace(/^(graph-)/, '')));
                        }} />
                        <label htmlFor={"graph-" + dataset}>{dataset}</label>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default StatsGraph;