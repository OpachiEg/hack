import {MenuItem, Select} from '@mui/material';
import React from 'react';

interface Item {
    value: string,
    name: string
}

interface Props {
    onSelect: (value: string) => void,
    items: Array<Item>
}

const CustomSelect: React.FC<Props> = ({onSelect, items}) => {
    return (
        <Select
            sx={{
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                        border: 0,
                    },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                        border: 0,
                    },
            }}
            onChange={(e) => {
                if (onSelect) onSelect(e.target.value);
            }}
            defaultValue={items[0].value}
            style={{
                height: "35px",
                borderRadius: "10px",
                outline: "none",
                fontSize: "14px"
            }}>
            {items?.map((v) => (<MenuItem value={v.value}><p>{v.name}</p></MenuItem>))}
        </Select>
    );
};

export default CustomSelect;