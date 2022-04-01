import React from "react";

function VideoCard({ id, price, rating, title }) {

    // const {key values from our data, key, key} = videos}





    return (
        <li className="card">

            <h4>{title}</h4>
            <p>Rating: {rating}</p>
            <p>Price: {price}</p>

            <button className="primary">Rent</button>

        </li>
    );
}

export default VideoCard;