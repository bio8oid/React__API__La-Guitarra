import React from 'react';
import './SearchComponent.scss';

const SearchComponent = props => {

    return (
        <div className="container-search">
            <div className="header-search">
                <h1>The hands find the way to do what the heart wants to say</h1>
                <p>- Paco de Lucia -</p>
                <h2>FIND TABLATURE<br />YOU NEED</h2>
            </div>
            <div className="wrap-search">
                <form onSubmit={props.onSubmit}>
                    <label>
                        <input id="data-input" name="inputData" type="text" placeholder="Song title or artist" autoComplete="on" onChange={props.onChange} />
                    </label>
                    <label>
                        <select id="form-tabs" defaultValue="PLAYER" name="dropdownData" onChange={props.onChange}>
                            <option value="CHORDS">chords</option>
                            <option value="TEXT_BASS_TAB">bass</option>
                            <option value="TEXT_GUITAR_TAB">guitar</option>
                            <option value="PLAYER">player</option>
                        </select>
                    </label>
                    <input className="button-search" type="submit" value="SEARCH" />
                </form>
            </div>
        </div>
    )
}

export default SearchComponent;