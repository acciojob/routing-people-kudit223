import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function UserDetails({ data }) {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(() => data.filter(usr => usr.id === id));
    },[])

    return (<>
        {user?<div>
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>:<div>Loading...</div>}
    </>)
}

export default UserDetails;