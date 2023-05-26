import React from 'react';
import Header from './components/header'
import UserList from './components/UserList';
import AddUser from './components/addUser';

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            counter: 0,
            userText: "",
            users: [{
              id: 1,
              name: "Pasha",
              email: "pasha@stankin.ru"
          },{
              id: 2,
              name: "Sasha",
              email: "sasha@stankin.ru"
          },{
              id: 3,
              name: "Masha",
              email: "masha@stankin.ru"
          }]
        }

        this.AddUser = this.AddUser.bind(this)
        this.onInputClick = this.onInputClick.bind(this)
    }


    render(){
      return(
        <div>
          {/* <Header title='Privet!'/>
          <Header title='Privet!!!'/>
          <Header title='!!!!!'/>
          <h1>Hello world!</h1>
          <input 
            onClick={this.onInputClick}
            onChange={data => this.setState({userText: data.target.value})}
            onMouseEnter={this.onInputMouseOver}/>
            <h3>{this.state.counter}</h3>
            <h3>{this.state.userText}</h3> */}
            <Header title='Список пользователей'/>
            <main>
              <UserList users={this.state.users}/>
            </main>
            <aside>
              <AddUser onAdd={this.AddUser}/>
            </aside>
        </div>
      )
    }

    AddUser(user){
      const userId = this.state.users.length + 1
      this.setState({users: [...this.state.users, {userId, ...user}]})
    }

    onInputClick(){
        this.setState (
            {counter: this.state.counter + 1}
            )

        console.log('Clicked!')
      }
      
      onInputMouseOver(){
        console.log('MouseOver!')
      }
}

export default App