import ButtonMoreRecord from "../components/ButtonMoreRecord";
import {CupIcon, KnifeIcon} from "../assets";
import {useState} from "react";
import {createChartData, MEALS_HISTORY} from "../common/constants";
import {FilterButtonTypes} from "../common/types";
import LineChart from "../components/LineChart";
import BG from '../assets/images/bg_progress.png'

const FILTER_BUTTONS: FilterButtonTypes[] = [
    {key: "morning", title: "Morning", icon: <KnifeIcon/>},
    {key: "lunch", title: "Lunch", icon: <KnifeIcon/>},
    {key: "dinner", title: "Dinner", icon: <KnifeIcon/>},
    {key: "snack", title: "Snack", icon: <CupIcon/>},
];

function TopPage() {
    const [data, setData] = useState(MEALS_HISTORY);

    const handleFilterMealHistory = (type: string) => {
        const dataByType = data.filter((e) => e.type === type);
        setData(dataByType);
    };
    const handleMoreRecord = () => {
        setData((prevData) => [...prevData, ...MEALS_HISTORY]);
    };

    return (
        <>
            <section className='progress-ss'>
                <div className="progress-wrap">
                    <div className="progress">
                        <img src={BG} alt="progress"/>
                        <div className="progress-item">
                            <span><small>05/21</small> 75%</span>
                            <svg className="circular-chart white" viewBox="0 0 36 36">
                                <path d="M18 2.08a15.92 15.92 0 0 1 0 31.84 15.92 15.92 0 0 1 0-31.84" className="circle-bg"/>
                                <path d="M18 2.08a15.92 15.92 0 0 1 0 31.84 15.92 15.92 0 0 1 0-31.84" className="circle" strokeDasharray="75, 100"/>
                                <text x="18" y="20.35" className="percentage">75%</text>
                            </svg>
                        </div>
                    </div>
                    <div className="progress-chart">
                        <LineChart data={createChartData(21)}/>
                    </div>
                </div>
            </section>
            <section className='meal-history'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div className="filter-buttons">
                                {FILTER_BUTTONS.map((item) => {
                                    return (
                                        <div className="item" key={item.key}>
                                            <button onClick={() => handleFilterMealHistory(item.key)}>
                                                {item.icon}
                                                <div className="title">{item.title}</div>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="filter-content">
                                {data.map((item, i) => {
                                    return (
                                        <div className="meal-history-item" key={i} title={item.title}>
                                            <img src={item.icon} alt={item.title}/>
                                            <div className="title">{item.title}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            <ButtonMoreRecord onClick={handleMoreRecord}>
                                記録をもっと見る
                            </ButtonMoreRecord>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopPage;