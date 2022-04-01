import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function VideoCard({ id, price, rating, title }) {
    const navigate = useNavigate()
    // const {key values from our data, key, key} = videos}

    async function handleSubmit(e) {
        e.preventDefault();
        { navigate(`/videos/:${id}`) }
    }

    return (
        <li className="card">

            <h4>{title}</h4>
            <p>Rating: {rating}</p>
            <p>Price: {price}</p>

            {/* <NavLink to="/videos/{${:id}} ">/ */}

            <button className="primary" onClick={handleSubmit} >Rent</button>
            {/* </NavLink> */}
        </li>
    );
}

export default VideoCard;