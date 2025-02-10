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
        <div className={"a-slide-x sidebar_item"}>
            {icon}
            <Link to={"/"}>{text}</Link>
        </div>
    );
};

export default SidebarItem;