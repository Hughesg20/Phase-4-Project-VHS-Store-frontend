import React from "react";
import { useParams} from "react-router-dom";
import Review from "./Review"
function DetailPage({videos, user, setUser }) {



    let { id } = useParams();
    const idv2 = id.substring(1)
 
    function thing (){
        return(
        <div>{videos[idv2].reviews.map(review=> <Review review = {review} />)}</div>
        )
    }
    return (
        <button onClick={thing}>yo</button>

    )}



export default DetailPage;