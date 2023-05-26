import React from "react";
import User from "./User";

class UserList extends React.Component{
        
    render(){
        return(
            <div>
                { this.props.users.map(user => 
                    <div key={user.id}>
                        <User userItem={user}/>
                    </div>)}
            </div>
        )
    }
}

export default UserList