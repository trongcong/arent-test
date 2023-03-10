import AppLink from "../components/AppLink";
import M1 from '../assets/images/MyRecommend-1.jpg'
import M2 from '../assets/images/MyRecommend-2.jpg'
import M3 from '../assets/images/MyRecommend-3.jpg'
import {useState} from "react";
import {MEALS_HISTORY} from "../common/constants";
import ButtonMoreRecord from "../components/ButtonMoreRecord";

const MY_DIARY_DATA = Array.from(Array(8).keys())
    .map(() => ({
        title: "私の日記の記録が一部表示されます。",
        text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
        date: '2021.05.21',
        time: '23:25',
    }))


function MyRecordPage() {
    const [data, setData] = useState(MY_DIARY_DATA);

    const handleMoreRecord = () => {
        setData((prevData) => [...prevData, ...MY_DIARY_DATA]);
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

                        <div className="chart">
                            chart
                        </div>

                        <div className="exercise">
                            <div className="ex-top">
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
                                {data.map((item, i) => {
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