import React,{Component} from "react";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import TabsList from "../components/TabsList/TabsList";
import axios from "axios"
import './MainLayout.scss';

class MainLayout extends Component {

    state = {
        tabsList: [],
        // tabsList: [{
        //         id: '',
        //         title: "",
        //     artist: { name: "No results..." },
        //     tabTypes: []
        // }],
        inputData: [],
        dropdownData: "PLAYER"
    }

    getList = async () => {
        const prefix = "https://cors-anywhere.herokuapp.com/";
        const url = "https://www.songsterr.com/a/ra/songs.json?pattern=";
        try {
            const res = await axios.get(prefix +  url + this.state.inputData);
            const data = await res.data;
            this.createTabsList(data);
        } catch (err) {
            console.log(err);
        }
    }
    
    createTabsList = data => {
        if (this.state.dropdownData !== "PLAYER"){
        const filteredData = data.filter(x => x.tabTypes.find(x => x === this.state.dropdownData))
        this.setState({ tabsList: filteredData });
        }else{
            this.setState({ tabsList: data });
        }
    }

    buttonHandle = e => {
        e.preventDefault();
        this.getList();
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="main-component">
                <SearchComponent onChange={e => this.handleChange(e)} 
                onSubmit={e => { this.buttonHandle(e) }} />
                <TabsList tabsList={this.state.tabsList} />
            </div>
        );
    }
}

export default MainLayout;