import React, { Component } from 'react';
import './SearchComponent.scss';

class SearchComponent extends Component {

    render() {
        return (
            <div className="container-search">
                <div className="header-search">
                    <h1>The hands find the way to do what the heart wants to say</h1>
                    <p>- Paco de Lucia -</p>
                </div>
                <div className="wrap-search">
                    <form onSubmit={this.props.onSubmit}>
                        <input id="data-input" name="inputData" type="text" placeholder="Song or artist" autoComplete="on" aria-label="data-input" onChange={this.props.onChange} />
                        <select id="form-tabs" defaultValue="PLAYER" name="dropdownData" aria-label="dropdownData" onChange={this.props.onChange}>
                                <option value="CHORDS">chords</option>
                                <option value="TEXT_BASS_TAB">bass</option>
                                <option value="TEXT_GUITAR_TAB">guitar</option>
                                <option value="PLAYER">player</option>
                            </select>
                        <input className="button-search" type="submit" value="SEARCH" aria-label="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchComponent;