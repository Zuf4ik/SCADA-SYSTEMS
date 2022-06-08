import './App.css';
import React from 'react';
import ReactFlowRenderer from './react-flow-renderer/index'



class App extends React.Component {


  render() {
    return (
      <div>
        <h1>Редактор мнемосхем для SCADA-системы</h1>
        <ReactFlowRenderer />
      </div>
    );
  }
}

export default App;
