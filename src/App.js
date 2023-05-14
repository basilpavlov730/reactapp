import React from 'react';
import Header from './components/header'

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            counter: 0
        }

        this.onInputClick = this.onInputClick.bind(this)
    }


    render(){
      return(
        <div>
          <Header title='Privet!'/>
          <Header title='Privet!!!'/>
          <Header title='!!!!!'/>
          <h1>Hello world!</h1>
          <input 
            onClick={this.onInputClick}
            onMouseEnter={this.onInputMouseOver}/>
            <h3>{this.state.counter}</h3>
        </div>
      )
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