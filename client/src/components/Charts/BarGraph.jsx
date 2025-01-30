import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    // ChartData,
    // ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const BarGraph = ({
    data1,
    data2,
    title1,
    title2,
    bgColor1,
    bgColor2,
    labels = months,
    horizontal = false,
}) => {
    const options = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: title1,
                data: data1,
                backgroundColor: bgColor1,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.4
            },
            {
                label: title2,
                data: data2,
                backgroundColor: bgColor2,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.4
            },
        ],
    };

    return <Bar options={options} data={data} />;
};

BarGraph.propTypes = {
    data1: PropTypes.array.isRequired,
    data2: PropTypes.array.isRequired,
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    bgColor1: PropTypes.string.isRequired,
    bgColor2: PropTypes.string.isRequired,
    labels: PropTypes.array,
    horizontal: PropTypes.bool,
};

export default BarGraph;
