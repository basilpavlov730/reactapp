import React from "react";
import { BsFillBrushFill, BsFillBackspaceFill } from "react-icons/bs";
import AddUser from "./addUser";

class User extends React.Component{
    constructor(props){
        super(props)

        this.state={
            showEditUserForm: false
        }
    }

    render(){
        return(
            <div className="user">
                <BsFillBrushFill className="editButton" onClick={() => {
                    this.setState({
                        showEditUserForm: !this.state.showEditUserForm
                    })
                }}/>
                <BsFillBackspaceFill className="deleteButton" onClick={() => this.props.onDelete(this.props.userItem.id)}/>
                <h1>{this.props.userItem.name}</h1>
                <p>{this.props.userItem.email}</p>
                {this.state.showEditUserForm && <AddUser onSave={this.props.onEdit} userToEdit = {this.props.userItem}/>}
            </div>
        )
    }
}

export default User