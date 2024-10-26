import React from "react";
import { useParams } from "react-router-dom";
function Post() {
    const {id} = useParams()
    return (
    <div>
        you have clicked a element with id : {id}
    </div>
    )
}
export default Post;