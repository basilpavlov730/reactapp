import React from "react";

class AddUser extends React.Component{

    constructor(props){
        super(props)

        this.state={
            name: "",
            email: ""
        }
    }

    render(){
        return(
            <form>
                <input placeholder="Имя пользователя" onChange={data => this.setState({name: data.target.value})}/>
                <input placeholder="Email" onChange={data => this.setState({email: data.target.value})}/>

                <button type="button" onClick={() => this.props.onAdd({
                    name: this.state.name,
                    email: this.state.email
                })}>Добавить пользователя</button>
            </form>
        )
    }
}

export default AddUser