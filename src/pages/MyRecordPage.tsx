import AppLink from "../components/AppLink";
import M1 from '../assets/images/MyRecommend-1.jpg'
import M2 from '../assets/images/MyRecommend-2.jpg'
import M3 from '../assets/images/MyRecommend-3.jpg'
import {useState} from "react";
import {createChartData, MY_DIARY_DATA} from "../common/constants";
import ButtonMoreRecord from "../components/ButtonMoreRecord";
import LineChart from "../components/LineChart";
import {LineChartProps, MyDiaryItemType} from "../common/types";

function MyRecordPage() {
    const [dataDiary, setDataDiary] = useState<MyDiaryItemType[]>(MY_DIARY_DATA);
    const [chartActive, setChartActive] = useState<number>(0);
    const [chartData, setChartData] = useState<LineChartProps["data"]>(createChartData(21));
    const handleMoreRecord = () => {
        setDataDiary((prevData) => [...prevData, ...MY_DIARY_DATA]);
    };
    const handleChangeChart = (index: number) => {
        setChartActive(index)
        setChartData(createChartData(21))
    };

    return (
        <div className='my-record-page'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='my-recommend'>
                            <div className="my-recommend-item">
                                <img src={M1} alt="BODY RECORD"/>
                                <div>
                                    <h3>BODY RECORD</h3>
                                    <AppLink to='/'>自分のカラダの記録</AppLink>
                                </div>
                            </div>
                            <div className="my-recommend-item">
                                <img src={M2} alt="MY EXERCISE"/>
                                <div>
                                    <h3>MY EXERCISE</h3>
                                    <AppLink to='/'>自分の運動の記録</AppLink>
                                </div>
                            </div>
                            <div className="my-recommend-item">
                                <img src={M3} alt="BODY RECORD"/>
                                <div>
                                    <h3>MY DIARY</h3>
                                    <AppLink to='/'>自分の日記</AppLink>
                                </div>
                            </div>
                        </div>

                        <div className="chart-ss">
                            <div className="ss-top">
                                <span>BODY <br/>RECORD</span>
                                <span className="time">2021.05.21</span>
                            </div>
                            <div className="chart-box">
                                <LineChart data={chartData}/>
                                <div className="chart-filter">
                                    {["日", "週", "月", "年"].map((item, index) => {
                                        return (
                                            <button
                                                key={index}
                                                className={`chart-btn ${chartActive === index ? "-active" : ""}`}
                                                onClick={() => handleChangeChart(index)}
                                            >
                                                {item}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="exercise">
                            <div className="ss-top">
                                <span>MY EXERCISE</span>
                                <span className="time">2021.05.21</span>
                            </div>
                            <div className="ex-list">
                                <ul>
                                    {Array.from(Array(100).keys())
                                        .map(() => ({
                                            title: "家事全般（立位・軽い）",
                                            kcal: '26kcal',
                                            min: '10 min',
                                        }))
                                        .map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    <div className="title">
                                                        {item.title}
                                                        <div>{item.kcal}</div>
                                                    </div>
                                                    <span className='time'>{item.min}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="my-diary">
                            <h3>MY DIARY</h3>
                            <div className="my-diary-grid">
                                {dataDiary.map((item, i) => {
                                    return (
                                        <div key={i} className="item">
                                            <div className="date">{item.date}</div>
                                            <div className="time">{item.time}</div>
                                            <div className="title">{item.title}</div>
                                            <div className="text">{item.text}</div>
                                        </div>
                                    )
                                })}
                            </div>

                            <ButtonMoreRecord onClick={handleMoreRecord}>
                                記録をもっと見る
                            </ButtonMoreRecord>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyRecordPage;