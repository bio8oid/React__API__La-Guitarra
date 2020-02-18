import React, { useState, useEffect } from 'react';
import './TabsList.scss';

const TabsList = props => {

    const [page, setPage] = useState(1);

    const handlePage = id => e => {
        setPage(id);
    }

    useEffect(() => setPage(1), [props.tabsList]);

    const dataset = props.tabsList;
    const pageSet = page;
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
                    <div className="list-type-tags">
                        {item.tabTypes.map((tagItem, index) => (<a key={index} className="tag" href={`http://www.songsterr.com/a/wa/song?id=${item.id}`} target="blank">{tagItem}</a>))}
                    </div>
                </div>))}
            <div className="pagination-buttons">
                {pageNumbers.map(id => {
                    return (
                        <button className="pagination-button" id={id} key={id} onClick={handlePage(id)}>{id}</button>
                    );
                })}
            </div>
        </div>
    )
}

export default TabsList;