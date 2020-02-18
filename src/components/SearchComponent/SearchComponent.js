import React, { Component } from 'react';
import './SearchComponent.scss';


class SearchComponent extends Component {

//     state = {
//         inputValue: [],
//         dropdownValue: [],
//         // tabsList: []
//     }

//     handleSubmit=()=> {
//     console.log("kazik")
//         // this.setState({ inputValue: val }, this.handleSubmit());
// }

//     handleInput = e => {
//         // event.preventDefault();
//         console.log(e.target.value)
//         console.log(e.target.value.split())
//        let val = e.target.value.split();
//         this.setState({ inputValue: val }, this.handleSubmit());
//         console.log(this.state.inputValue)
//         // this.props.inputValueHandle(event.target.value);
//     }
//     handleDropdown = e => {
//         // event.preventDefault();
//         console.log(e.target.value)
//         let dropVal = e.target.value.split();
//         console.log(dropVal)
//         this.setState({ dropdownValue: dropVal }, this.handleSubmit());
//         console.log(this.state.dropdownValue)
//         // this.props.inputValueHandle(event.target.value);
//     }

    render() {
        // return (
        //     <div className="container-search">
        //         <div className="header-search">
        //             <img alt="left" className="header-image" src="./images/jane-left.png" />
        //             <h1>find something yummy <br />with jane the piglet</h1>
        //             <img alt="right" className="header-image" src="./images/jane-right.png" />
        //         </div>
        //         <div className="wrap-search">
        //             <form onSubmit={this.handleSubmit()}>
        //                 <label>
        //                     <input id="data-input" type="text" placeholder="Enter SONG or BAND name" autoComplete="on" inputvalue={this.state.inputValue} onChange={e => this.handleInput(e)} />
        //                 </label>
        //                 <label>
        //                     {/* <select id="form-tabs"  onChange={this.props.onChange}> */}
        //                     <select id="form-tabs" dropdownvalue={this.state.dropdownValue} onChange={e => this.handleDropdown(e)}>
        //                         <option defaultValue="">All</option>
        //                         <option value="CHORDS">chords</option>
        //                         <option value="TEXT_BASS_TAB">bass</option>
        //                         <option value="TEXT_GUITAR_TAB">guitar</option>
        //                         <option value="PLAYER">player</option>
        //                     </select>
        //                 </label>
        //                 <input className="button-search" type="submit" value="SEARCH"/>
        //             </form>
        //             {/* <button className="button-search" id="button-search" onClick={this.props.onClick}>SEARCH</button> */}
        //         </div>
        //     </div>
        // )
        return (
            <div className="container-search">
                <div className="header-search">   
                <h1>The hands find the way to do what the heart wants to say</h1>
                <p>- Paco de Lucia -</p>       
                    <h2>FIND TABLATURE<br/>YOU NEED</h2> 
                </div>
                <div className="wrap-search">
                    <form onSubmit={this.props.onSubmit}>
                        <label>
                            <input id="data-input" name="inputData" type="text" placeholder="Song title or artist" autoComplete="on" onChange={this.props.onChange} />
                        </label>
                        <label>
                            <select id="form-tabs" defaultValue="PLAYER" name="dropdownData" onChange={this.props.onChange}>
                            {/* <select id="form-tabs" onChange={e => this.handleDropdown(e)}> */}
                                {/* <option value="">All</option> */}
                                <option value="CHORDS">chords</option>
                                <option value="TEXT_BASS_TAB">bass</option>
                                <option value="TEXT_GUITAR_TAB">guitar</option>
                                <option value="PLAYER">player</option>
                            </select>
                        </label>
                        <input className="button-search" type="submit" value="SEARCH"/>
                    </form>
                    {/* <button className="button-search" id="button-search" onClick={this.props.onClick}>SEARCH</button> */}
                </div>
            </div>
        )
    }
}

export default SearchComponent;