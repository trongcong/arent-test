import ButtonMoreRecord from "../components/ButtonMoreRecord";
import {CupIcon, KnifeIcon} from "../assets";
import {useState} from "react";
import {MEALS_HISTORY} from "../common/constants";
import {FilterButtonTypes} from "../common/types";

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
            <section className='chart'>
                chart
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