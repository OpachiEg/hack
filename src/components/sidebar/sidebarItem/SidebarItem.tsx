import React, {ReactElement} from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

interface Props {
    icon: ReactElement,
    text: string,
    to?: string
}

const SidebarItem: React.FC<Props> = ({icon,text,to}) => {
    return (
        <Link to={to ?? "/"} className={"a-slide-x sidebar_item"}>
            {icon}
            <p>{text}</p>
        </Link>
    );
};

export default SidebarItem;