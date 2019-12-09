import React, { Component } from 'react';
import {Slider} from './Slider';
import './styles.css';

export default class App extends Component {
  constructor(){
    super()
    this.state ={
      contacts: ['Joga', 'Leyla', 'Blake'],
      count: 0
    }
  }

  // Increment "count" by 1 if "count" !== contacts.lenght
      // else: resets back to first contact

  nextContact = () => {
    const l = this.state.contacts.length -1
    if (this.state.count !== l ) {
        this.setState(prevState => ({
          count: prevState.count + 1,
          currentContact: prevState.contacts[prevState.count + 1]
        }))
    }else{
      this.setState(prevState => ({
        count: 0,
        currentContact: prevState.contacts[0]
      }))
    }
  }

  render() {
    const { count, currentContact } = this.state
    const styles = {
      container: { display: 'flex', justifyContent: 'center', width: '100vw', height: 300 },
      btn: { width: '100%', display: 'flex', justifyContent: 'center' }
    }
    return (
      <div>
        <div style={ styles.container }>
          <Slider count={ count }>
              <h1>{ currentContact }</h1>
          </Slider>
        </div>
        <div style={ styles.btn }>
          <button onClick={ this.nextContact }>NEXT</button>
        </div>
      </div>
    )
  }
}
