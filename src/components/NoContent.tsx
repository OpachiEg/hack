import React from 'react';

interface Props {
    message: string
}

const NoContent: React.FC<Props> = ({message}) => {
    return (
        <div className={"a-opacity"} style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            paddingBottom: "20px"
        }}>
            <p>{message}</p>
        </div>
    );
};

export default NoContent;