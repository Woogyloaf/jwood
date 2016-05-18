'use strict';
import React, { Component } from 'react';
import packageJSON from '../../../package.json';
import { SuperCellIcon, HappyFaceIcon } from './icons';
import StatelessComponent from './statelessComponentExample';

class App extends Component {
  render() {
    const version = packageJSON.version;
    const style = {
      card: {
        width: '100%',
        background: '#fff',
        borderRadius: '5px',
        WebkitBoxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        padding: '30px 40px 30px 40px',
        margin: '10px',
      },
      version: {
        textAlign: 'center',
        margin: '-15px 0 40px',
      },
    };
    return (
    <div className='container'>

      <div className="row">
        <div className='card' style={style.card}>
          <h1 className='logo'>"SuperCell <SuperCellIcon /> Index Page"</h1>
          <p style={style.version}>version {version}</p>
          <p>Hello, this is a <strong>{this.props.phrase}</strong>  <HappyFaceIcon /></p>
        </div>
      </div>

      <div className="row">
        <div className='card' style={style.card}>
          <p>I use <strong>flexbox</strong> for my layouts!
          </p>
        </div>

        <div className='card' style={style.card}>
          <p>Check out the <strong><a href="/style-guide.html">Style Guide</a></strong></p>
        </div>

        <div className='card' style={style.card}>
          <StatelessComponent />
        </div>
        
      </div>

    </div>
    );
  }
}

export default App;
