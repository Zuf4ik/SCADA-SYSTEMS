import './App.css';
import React, { useEffect, useState } from 'react';


import ReactFlowRenderer from './react-flow-renderer/index'


const App = () => {
  return (
    <div>
      <h1>Редактор мнемосхем для SCADA-системы</h1>

      <ReactFlowRenderer />
    </div>
  )
}

export default App;
