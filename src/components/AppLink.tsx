import {Link, LinkProps} from "react-router-dom";

interface Props extends LinkProps {
}

function AppLink(props: Props) {
    const {children, ...rest} = props;
    return <Link {...rest}>{children}</Link>;
}

export default AppLink
