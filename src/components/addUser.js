import React from "react";

class AddUser extends React.Component{

    User = {}
    
    constructor(props){
        super(props)

        this.state={
            name: "",
            email: ""
        }
    }

    render(){
        return(
            <form ref={el => this.myAddUserForm = el}>
                <input placeholder="Имя пользователя" onChange={data => this.setState({name: data.target.value})}/>
                <input placeholder="Email" onChange={data => this.setState({email: data.target.value})}/>

                <button type="button" onClick={() => {
                    this.User ={
                        name: this.state.name,
                        email: this.state.email
                    }

                    if(this.props.userToEdit)
                        this.User.id = this.props.userToEdit.id 

                    this.props.onSave(this.User)
                this.myAddUserForm.reset()
                }}>Сохранить</button>
            </form>
        )
    }
}

export default AddUser