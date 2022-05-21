/*import React from "react";
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
    BarElement
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const StatsGraph = () => {

    const radios = ["Classique", "Carte", "Forme", "Global"];
    const [selectedRadio, setSelectedRadio] = useState(radios[0]);

    let colors = statsColors;

    if (!localStorage.getItem("history")) {
        return (
            <div>
                Pas de stats disponibles...
            </div>
        );
    }

    let datasets = JSON.parse(localStorage.getItem("history"));

    const optionsGraph = {
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
                    },
                    label: function (tooltipItem, data) {
                        return parseFloat(tooltipItem.formattedValue) >= 7 ? "échec" : tooltipItem.formattedValue + " essai" + (parseFloat(tooltipItem.formattedValue) > 1 ? "s" : ""); //TODO !!!!
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
                min: 1,
                max: 7,
                ticks: {
                    callback: function (value) {
                        if (value == 7) return "échec";
                        return value;
                    }
                }

            }
        }
    };

    const dataGraph = {
        datasets: [
            {
                label: "Nombre d'essais",
                data: datasets[selectedRadio],
                borderColor: colors[selectedRadio]["borderColor"],
                backgroundColor: colors[selectedRadio]["backgroundColor"],
            }
        ]
    };

    const labelsBars = ["1", "2", "3", "4", "5", "6", "échec"];
    const optionsBar = {
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
                        return (tooltipItem[0].label === "échec" ? "Échecs" : ("Victoires en " + tooltipItem[0].label + " essai" + (tooltipItem[0].label > 1 ? "s" : "")));
                    }
                }
            }
        },
        scales: {
            yAxis: {
                ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (value % 1 === 0) { return value; } }
                }
            }
        }
    };

    let filteredDataBar = [];
    for (let i = 1; i <= 7; i++) {
        let tmpData = datasets[selectedRadio].filter(val => {
            if (val.y === i)
                return true;
        });
        filteredDataBar.push({ x: i, y: tmpData.length });
    }

    const dataBar = {
        labels: labelsBars,
        datasets: [
            {
                label: "Nombre de parties",
                data: filteredDataBar,
                borderColor: colors[selectedRadio]["borderColor"],
                backgroundColor: colors[selectedRadio]["backgroundColor"],
            }
        ]
    };

    return (
        <div>
            <Line options={optionsGraph} data={dataGraph} />
            <Bar options={optionsBar} data={dataBar} />

            <ul className="radio-container">
                {radios.map((dataset, index) => (
                    <li key={index}>
                        <input type="radio" id={dataset} name="datasetRadio" checked={dataset === selectedRadio} onChange={(e) => {
                            setSelectedRadio(e.target.id);
                        }} />
                        <label htmlFor={dataset}>{dataset}</label>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default StatsGraph;*/