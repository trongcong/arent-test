import {ArrowUp} from "../assets";

function ButtonToTop() {
    const onToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    return (
        <button className="btn-to-top" onClick={onToTop}>
            <ArrowUp/>
        </button>
    )
}

export default ButtonToTop;