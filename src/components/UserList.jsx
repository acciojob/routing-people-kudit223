import React from "react";
import { Link } from "react-router-dom";

function UserList({data}){
  
    return(<div>
        <h1>User List</h1>
        <ul>
          {data.map((user,index)=>{
            const hrefValue="/users/"+user.id;
            return <li key={index}><Link to={hrefValue}>{user.name}</Link></li>
          })}
        </ul>
    </div>)

}


export default UserList;