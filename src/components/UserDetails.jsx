
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function UserDetails({ data }) {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(() =>{
            let filterData=data.filter((item)=>item.id===Number(id));
            return filterData;
        });
    },[]);
    
    
    
    return (<div>
        {user?<div>
            <h1>User Details</h1>
            <p>Name: {user[0].name}</p>
            <p>Username: {user[0].username}</p>
            <p>Email: {user[0].email}</p>
            <p>Phone: {user[0].phone}</p>
            <p>Website: {user[0].website}</p>
        </div>:"Loading..."}
    </div>);
}

export default UserDetails;