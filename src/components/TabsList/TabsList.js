import React from 'react';
import './TabsList.scss';

class TabsList extends React.Component {

    state = {
        page: 1,
        tabsList: []
    }

    handlePage = () => e => {
        let id = e.target.id;
        this.setState({ page: id });
    }

    static getDerivedStateFromProps(props, tabsList) {
        if (props.tabsList !== tabsList) {
            return { tabsList: props.tabsList };
        }
        else return tabsList;
    }

    render() {

        console.log(this.props.tabsList)

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
                        {/* <div className="image-and-tags-wrapper"> */}
                            <div className="list-type-tags">
                                {item.tabTypes.map((tagItem, index) => (<a key={index} className="tag" href={`http://www.songsterr.com/a/wa/song?id=${item.id}`} target="blank">{tagItem}</a>))}
                            </div>
                        {/* </div> */}
                    </div>))}
                <div className="pagination-buttons">
                    {pageNumbers.map(id => {
                        return (
                            <button className="pagination-button" id={id} key={id} onClick={this.handlePage(id)}>{id}</button>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default TabsList;