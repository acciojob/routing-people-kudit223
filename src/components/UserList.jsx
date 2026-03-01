import React from "react";

function UserList({data}){

    return(<div>
        <h1>User List</h1>
        <ul>
          {data.map((user,index)=>{
            const hrefValue="/users/"+user.id;
            return <li key={index}><a href={hrefValue}>{user.name}</a></li>
          })}
        </ul>
    </div>)

}


export default UserList;