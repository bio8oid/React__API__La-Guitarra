import React from 'react';
import './TabsList.scss';

class TabsList extends React.Component {

    state = {
        page: 1,
        tabsList: []
    }

    handlePage = id => e => {
        this.setState({ page: id });
    }

    static getDerivedStateFromProps(props, tabsList) {
        if (props.tabsList !== tabsList) {
            return { tabsList: props.tabsList };
        }
        else return tabsList;
    }

    render() {

        const dataset = this.props.tabsList;
        const pageSet = this.state.page;
        const offset = (pageSet - 1) * 10
        const paginatedItems = dataset.slice(offset).slice(0, 10)
        const pages = Math.ceil(dataset.length / 10);
        const pageNumbers = Array.from({ length: pages }, (x, page) => ++page);

        return (

            <div className="list-wrapper">
                {paginatedItems.map(item => (
                    <div className="list-item" key={item.id}>
                        <h2>{item.artist.name}</h2>
                        <p>{item.title}</p>
                        <div className="image-and-tags-wrapper">
                            <div className="list-ingredients-tags">
                                {item.tabTypes.map((type, index) => (
                                    <a key={index} className="tag" href={`http://www.songsterr.com/a/wa/song?id=${item.id}`} target="blank">{type}</a>))}
                            </div>
                        </div>
                    </div>))}
                <div>
                    {pageNumbers.map(id => {
                        return (
                            <button className="pagination-button" id={id} key={id} onClick={this.handlePage(id)}>{id}</button>
                        );
                    })}
                </div>
                <div className="logo"><h3>© bio8oid</h3></div>
            </div>
        )
    }
}

export default TabsList;