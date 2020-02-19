import React, { useState } from 'react';
import SearchComponent from "../components/SearchComponent/SearchComponent";
import TabsList from "../components/TabsList/TabsList";
import './MainLayout.scss';

const MainLayout = () => {

    const [tabsList, setTabsList] = useState([]);
    const [inputData, setInputData] = useState({});
    const [dropdownData, setDropdownData] = useState("PLAYER");

    const getList = async () => {
        const prefix = "https://cors-anywhere.herokuapp.com/";
        const url = "https://www.songsterr.com/a/ra/songs.json?pattern=";
        try {
            const res = await fetch(prefix + url + inputData);
            const data = await res.json();
            createTabsList(data);
        } catch (err) {
            console.log(err);
        }
    }
    
    const createTabsList = data => {
        if (dropdownData !== "PLAYER"){
        const filteredData = data.filter(x => x.tabTypes.find(x => x === dropdownData))
            setTabsList(filteredData);
        }else{
            setTabsList(data);
        }
    }

    const buttonHandle = e => {
        e.preventDefault();
        getList();
    }

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === 'inputData') {
            setInputData(value);
        }
        if (name === 'dropdownData') {
            setDropdownData(value);
        }
    }

        return (
            <div className="main-component">
                <SearchComponent onChange={e => handleChange(e)} 
                onSubmit={e => { buttonHandle(e) }} />
                <TabsList tabsList={tabsList} />
            </div>
        );
    }

export default MainLayout;