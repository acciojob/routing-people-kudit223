import React from "react";
import { useParams } from "react-router-dom";


function UserDetails({data}){
    const {id}=useParams();
    const user=data.filter(usr=>usr.id===id);
    return(<div>
        <h1>User Details</h1>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
    </div>)
}

export default UserDetails;