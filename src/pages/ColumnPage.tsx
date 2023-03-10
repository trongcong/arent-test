import AppLink from "../components/AppLink";
import {COLUMNS, MEALS_HISTORY, RECOMMEND_ITEMS} from "../common/constants";
import ButtonMoreRecord from "../components/ButtonMoreRecord";
import {useState} from "react";

function ColumnPage() {
    const [data, setData] = useState(COLUMNS);

    const handleMoreRecord = () => {
        setData((prevData) => [...prevData, ...COLUMNS]);
    };
    return (
        <>
            <section className='column-wrap'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="recommended">
                                {RECOMMEND_ITEMS.map((item, i) => {
                                    return (
                                        <div key={i} className="recommend-item">
                                            <h3>{item.title}</h3>
                                            <div>{item.subtitle}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="columns">
                                {data.map((item, i) => {
                                    return (
                                        <div key={i} className="column-item">
                                            <div className="img-wrap">
                                                <AppLink to={item.url}>
                                                    <img src={item.img} alt={item.title}/>
                                                </AppLink>
                                                <div className='time'>{item.time}</div>
                                            </div>
                                            <h3><AppLink to={item.url}>{item.title}</AppLink></h3>
                                            <div className="tags">
                                                {
                                                    item.tags.map(tag => <span>{tag}</span>)
                                                }
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <ButtonMoreRecord onClick={handleMoreRecord}>
                                コラムをもっと見る
                            </ButtonMoreRecord>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ColumnPage;