import React, {useContext, useState} from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Tab} from "@mui/material";
import ProgressTable from "../components/progressTable/ProgressTable";
import "./index.css";
import {AuthContext} from "../../../provider/AuthProvider";

const Progress = () => {

    const {currentUser} = useContext(AuthContext);

    const [currentTab, setCurrentTab] = useState(1);

    return (
        <div className={"main-container"}>
            <p className={"a-slide-y"}>
                Успеваемость
                <span style={{fontSize: "18px",fontFamily: "MF-Regular",marginLeft: "10px"}}>{currentUser?.full_name} ({currentUser?.group_name})</span>
            </p>
            <TabContext value={currentTab}>
                <TabList style={{marginTop: "10px"}} onChange={(event, newValue) => {
                    setCurrentTab(newValue)
                }}>
                    <Tab className={"sem-tab"} style={{fontFamily: "MF-Regular"}} label="Ⅰ" value={1}/>
                    <Tab className={"sem-tab"} style={{fontFamily: "MF-Regular"}} label="Ⅱ" value={2}/>
                    <Tab className={"sem-tab"} style={{fontFamily: "MF-Regular"}} label="Ⅲ" value={3}/>
                    <Tab className={"sem-tab"} style={{fontFamily: "MF-Regular"}} label="Ⅳ" value={4}/>
                </TabList>
                <TabPanel style={{padding: 0}} value={1}><ProgressTable semester={1}/></TabPanel>
                <TabPanel style={{padding: 0}} value={2}><ProgressTable semester={2}/></TabPanel>
                <TabPanel style={{padding: 0}} value={3}><ProgressTable semester={3}/></TabPanel>
                <TabPanel style={{padding: 0}} value={4}><ProgressTable semester={4}/></TabPanel>
            </TabContext>
        </div>
    );
};

export default Progress;