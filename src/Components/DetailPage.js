import React from "react";
import { useParams} from "react-router-dom";
import Review from "./Review"
function DetailPage({videos, user, setUser }) {



    let { id } = useParams();
    const idv2 = id.substring(1)
 
    return (
        <ul>{videos[idv2].reviews.map(review=> <Review review = {review} />)}</ul>
        
    )}



export default DetailPage;