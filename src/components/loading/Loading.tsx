import React from 'react';
import {TailSpin} from "react-loader-spinner";

const Loading = () => {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center",marginTop: "20px"}}>
            <TailSpin
                height="50"
                width="50"
                color="var(--primary)"
            />
        </div>
    );
};

export default Loading;