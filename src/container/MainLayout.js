import React,{Component} from "react";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import TabsList from "../components/TabsList/TabsList";
import './MainLayout.scss';

class MainLayout extends Component {

    state = {
        tabsList: [],
        inputData: [],
        dropdownData: "PLAYER"
    }

    getList = async () => {
        const prefix = "https://cors-anywhere.herokuapp.com/";
        const url = "https://www.songsterr.com/a/ra/songs.json?pattern=";

        console.log(this.state.inputData)
        console.log(this.state.dropdownData)

        try {
            const res = await fetch(prefix +  url + this.state.inputData);
            const data = await res.json();
            this.createTabsList(data);
        } catch (err) {
            console.log(err);
        }
    }
    
    createTabsList = data => {
        if (this.state.dropdownData !== "PLAYER"){
        const filteredData = data.filter(x => x.tabTypes.find(x => x === this.state.dropdownData))
        console.log(filteredData);
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