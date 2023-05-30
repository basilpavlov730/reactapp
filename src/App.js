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
        this.EditUser = this.EditUser.bind(this)
        this.DeleteUser = this.DeleteUser.bind(this)
    }


    render(){
      return(
        <div>
            <Header title='Список пользователей'/>
            <main>
              <UserList users={this.state.users} onDelete={this.DeleteUser} onEdit={this.EditUser}/>
            </main>
            <aside>
              <AddUser onSave={this.AddUser}/>
            </aside>
        </div>
      )
    }

    AddUser(user){
      const userId = this.state.users.length + 1
      this.setState({users: [...this.state.users, {userId, ...user}]})
    }

    EditUser(user){
      var allUsers = this.state.users
      var userToEditIndex = allUsers.findIndex(x => x.id === user.id)

      allUsers[userToEditIndex] = user
      
      this.setState({users: []}, () => this.setState({users: [...allUsers]}))
    }

    DeleteUser(id){
      this.setState({
        users: this.state.users.filter(x => x.id !== id)
      })
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