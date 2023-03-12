import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS, CategoryScale, Legend, LinearScale, LineElement, PointElement, Title, Tooltip
} from "chart.js";
import {LineChartProps} from "../common/types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
ChartJS.defaults.color = "#fff";

export const defaultOptions = {
    responsive: true,
    plugins: {
        legend: {display: false},
        title: {display: false},
    },
    scales: {
        x: {
            border: {
                display: false,
            },
            grid: {
                display: true,
                color: "#777777",
            },
            ticks: {
                font: {
                    size: 12,
                },
            },
        },

        y: {
            border: {
                display: false,
            },
            grid: {
                display: false,
            },
            ticks: {
                display: false,
            },
        },
    },
};

function LineChart(props: LineChartProps) {
    const {options = defaultOptions, data} = props
    return (
        <div className="chart-wrap">
            <Line options={options} data={data}/>
        </div>
    )
}

export default LineChart;