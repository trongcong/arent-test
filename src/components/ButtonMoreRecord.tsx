import {ButtonMoreRecordProps} from "../common/types";

function ButtonMoreRecord(props: ButtonMoreRecordProps) {
    const { children, ...rest } = props;
    return (
        <button className="btn-more-record" {...rest}>
            {children}
        </button>
    );
}

export default ButtonMoreRecord;
