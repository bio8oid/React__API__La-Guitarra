import React from 'react';
import './TabsList.scss';

class TabsList extends React.Component {

    state = {
        page: 1,
        info: [{
            id: '',
            title: "",
            artist: { name: "No results ..." },
            tabTypes: [],
            noBackground: "no-background",
        }]
    }

    handlePage = id => e => {
        this.setState({ page: id });
    }

    static getDerivedStateFromProps(props, prevState) {
        if (props.tabsList !== prevState.tabsList) {
            return { tabsList: props.tabsList, page: 1 };
        }
        else return prevState;
    }

    render() {

        let dataset = this.props.tabsList;
        let noPagination = "";

        if(dataset.length === 0) {
            noPagination = "no-pagination";
            dataset = this.state.info;
        }

        const pageSet = this.state.page;
        const offset = (pageSet - 1) * 10
        const paginatedItems = dataset.slice(offset).slice(0, 10)
        const pages = Math.ceil(dataset.length / 10);
        const pageNumbers = Array.from({ length: pages }, (x, page) => ++page);

        return (
            <div className="list-wrapper">
                {paginatedItems.map(item => (
                    <div className={`list-item ${item.noBackground}`} key={item.id}>
                        <h2>{item.artist.name}</h2>
                        <p>{item.title}</p>
                        <div className="list-tabtypes-tags">
                            {item.tabTypes.map((type, index) => (
                                <a key={index} className="tag" href={`http://www.songsterr.com/a/wa/song?id=${item.id}`} target="blank">{type}</a>))}
                        </div>
                    </div>))}
                <div >
                    {pageNumbers.map(id => {
                        return (
                            <button className={`pagination-button ${noPagination}`} id={id} key={id} onClick={this.handlePage(id)}>{id}</button>
                        );
                    })}
                </div>
                <div className="logo"><h3>© bio8oid</h3></div>
            </div>
        )
    }
}

export default TabsList;