import React from 'react';
import Header from './components/header'
import UserList from './components/UserList';
import AddUser from './components/addUser';
import axios from 'axios';

class App extends React.Component {

  baseUrl = 'http://localhost:5000/api/Users'

    constructor(props){
        super(props)

        this.state = {
            counter: 0,
            userText: "",
            users: []
        }

        this.LoadUsers();

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

    LoadUsers(){
      axios.get(this.baseUrl).then(res => {
          var userDtos = [];
          res.data.forEach(element => {
            userDtos.push({
              id: element.id,
              name: element.name,
              email: element.email
            })
          });

          this.setState({
            users: []
          }, () => this.setState({
            users: userDtos
          }))
      })
    }

    async AddUser(user){

      var createUserRequest = {
        UserName: user.name,
        Email: user.email
      }

      await axios.post(this.baseUrl, createUserRequest)

      this.LoadUsers();
      // const userId = this.state.users.length + 1
      // this.setState({users: [...this.state.users, {userId, ...user}]})
    }

    async EditUser(user){

      var updateUserRequest = {
        UserName: user.name,
        Email: user.email
      }

      await axios.put(this.baseUrl + '/' + user.id, updateUserRequest)

      this.LoadUsers()

      // var allUsers = this.state.users
      // var userToEditIndex = allUsers.findIndex(x => x.id === user.id)

      // allUsers[userToEditIndex] = user
      
      // this.setState({users: []}, () => this.setState({users: [...allUsers]}))
    }

    async DeleteUser(id){
      await axios.delete(this.baseUrl + '/' + id)

      this.LoadUsers()
      // this.setState({
      //   users: this.state.users.filter(x => x.id !== id)
      // })
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