import React from "react";

class User extends React.Component{

    render(){
        return(
            <div className="user">
                <h1>{this.props.userItem.name}</h1>
                <p>{this.props.userItem.email}</p>
            </div>
        )
    }
}

export default User