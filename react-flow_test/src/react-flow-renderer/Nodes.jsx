import React from "react";
import { Handle } from 'react-flow-renderer';
import { Tooltip } from '@mui/material';
import "./css/elements_styles.css"



//  ---------------------  Система управления  -----------------------



const ControlUnit = ({ data }) => {
  return (
    <Tooltip title="Система управления">

      <div>


{/* //  ---------------------  Система управления верхняя часть  ----------------------- */}

        <div className="CU-rectangle-one">
          <div id={data.id}>{data.label}</div>
        </div>

        <div className="CU-rectangle-two">
          <div id={data.id}>{data.label}</div>
        </div>

        <div className="CU-rectangle-three">
          <div id={data.id}>{data.label}</div>
        </div>

        <div className="CU-rectangle-four">
          <div id={data.id}>{data.label}</div>
        </div>

        <div className="CU-rectangle-five">
          <div id={data.id}>{data.label}</div>
        </div>

        <div className="CU-rectangle">
          <div id={data.id}>{data.label}</div>
        </div>


        {/* //  ---------------------  Система управления центр  ----------------------- */}

        <div className="CU-center-left-top">
          <div id={data.id}>{data.label}</div>
        </div>

        <div className="CU-center-right-top">
          <div id={data.id}>{data.label}</div>
        </div>

        <div className="CU-center-left-bot">
          <div id={data.id}>{data.label}</div>
        </div>

        <div className="CU-center-right-bot">
          <div id={data.id}>{data.label}</div>
        </div>



        {/* //  ---------------------  Система управления нижняя часть  ----------------------- */}


        <div className="CU-rectangle-bot">
          <div id={data.id}>{data.label}</div>
        </div>

      </div>
    </Tooltip>
  );
}



//  ---------------------  Насос  -----------------------

const RectangleNode = ({ data }) => {
  return (
    <Tooltip title="Насос">


      {/* //  ---------------------  Насос 1 часть  ----------------------- */}

      <div className="cistern-top">

        <div className="cistern-box">
          <div id={data.id}>{data.label}</div>
          <Handle
            type="target"
            position="left"
            id={`${data.id}.left`}
            style={{ top: '95px', borderRadius: 0, width: '10px', height: '10px' }}
          />
          <div id={data.id}>{data.label}</div>
          <Handle
            type="source"
            position="right"
            id={`${data.id}.right`}
            style={{ top: '95px', borderRadius: 0, width: '10px', height: '10px' }}
          />
        </div>

        <div className="cistern">
          <div id={data.id}>{data.label}</div>
        </div>
        <div className="cistern-bot">
          <div id={data.id}>{data.label}</div>
        </div>
        <div className="cistern-bot-box">
          <div id={data.id}>{data.label}</div>
        </div>



        {/* ---------------------  Насос 2 часть  ----------------------- */}


        <div className="cistern-rectangle-left">
          <div id={data.id}>{data.label}</div>
        </div>

        <div className="cistern-rectangle-center">
          <div id={data.id}>{data.label}</div>
        </div>

        <div className="cistern-rectangle-right">
          <div id={data.id}>{data.label}</div>
        </div>


      </div>
    </Tooltip>
  );
};

//  ---------------------  Регулятор  -----------------------

const CircleNode = ({ data }) => {
  return (
    <Tooltip title="Регулятор">
      <div
        style={{
          backgroundColor: "green",
          width: '100px',
          height: '100px',
          borderRadius: "100px",
        }}
      >
        <Handle
          type="target"
          position="left"
          id={`${data.id}.left`}
          style={{ borderRadius: "0", width: '10px', height: '10px' }}
        />
        <div id={data.id}>{data.label}</div>
        <Handle
          type="source"
          position="right"
          id={`${data.id}.right`}
          style={{ borderRadius: 0, width: '10px', height: '10px' }}
        />


        <div className="rect-node-circle">
          <div id={data.id}>{data.label}</div>
        </div>


        <div className="rect-node-circle-center">
          <div id={data.id}>{data.label}</div>
        </div>
      </div>
    </Tooltip>
  );
};


//  ---------------------  Независимая Задвижка  -----------------------


const IndGateValve = ({ data }) => {
  return (
    <Tooltip title="Задвижка">
      <div>
        <div className="IndGateValve-right">

          <div id={data.id} className="triangle-node-text">
            {data.label}
            <Handle
              type="target"
              position="top"
              id={`${data.id}.top`}
              style={{ top: "10px", borderRadius: 0, width: '10px', height: '10px' }}
            />
          </div>
        </div>


        <div className="IndGateValve-left">
          <div id={data.id} className="triangle-node-text">
            {data.label}
          </div>
          <Handle
            type="source"
            position="top"
            id={`${data.id}.top`}
            style={{ top: '50px', borderRadius: 0, width: '10px', height: '10px' }}
          />
        </div>
      </div>

    </Tooltip>
  );
}




//  ---------------------  Задвижка  -----------------------


const GateValve = ({ data }) => {
  return (
    <Tooltip title="Задвижка">
      <div>
        <div className="triangle-node-right">

          <div id={data.id} className="triangle-node-text">
            {data.label}
            <Handle
              type="target"
              position="top"
              id={`${data.id}.top`}
              style={{top: '5px', borderRadius: 0, width: '10px', height: '10px' }}
            />
          </div>
        </div>


        <div className="triangle-node-left">
          <div id={data.id} className="triangle-node-text">
            {data.label}
          </div>
          <Handle
            type="source"
            position="top"
            id={`${data.id}.top`}
            style={{ top: '45px', borderRadius: 0, width: '10px', height: '10px' }}
          />
        </div>



        <div className="rect-node-top">
          <div id={data.id}>{data.label}</div>
        </div>
        <div className="rect-node-center">
          <div id={data.id}>{data.label}</div>
        </div>
      </div>
    </Tooltip>
  );
};

//  ---------------------  Задвижка Правая -----------------------


const GateValveRight = ({ data }) => {
  return (
    <Tooltip title="Задвижка"  placement="right">
      <div className="GateValveRight">
        <div className="triangle-node-right">

          <div id={data.id} className="triangle-node-text">
            {data.label}
            <Handle
              type="target"
              position="top"
              id={`${data.id}.top`}
              style={{top: '5px', borderRadius: 0, width: '10px', height: '10px' }}
            />
          </div>
        </div>


        <div className="triangle-node-left">
          <div id={data.id} className="triangle-node-text">
            {data.label}
          </div>
          <Handle
            type="source"
            position="top"
            id={`${data.id}.top`}
            style={{ top: '45px', borderRadius: 0, width: '10px', height: '10px' }}
          />
        </div>



        <div className="rect-node-top">
          <div id={data.id}>{data.label}</div>
        </div>
        <div className="rect-node-center">
          <div id={data.id}>{data.label}</div>
        </div>
      </div>
    </Tooltip>
  );
};



//  ---------------------  Задвижка Низ -----------------------


const GateValveBot = ({ data }) => {
  return (
    <Tooltip title="Задвижка">
      <div className="GateValveBot">
        <div className="triangle-node-right">

          <div id={data.id} className="triangle-node-text">
            {data.label}
            <Handle
              type="source"
              position="top"
              id={`${data.id}.top`}
              style={{top: '5px', borderRadius: 0, width: '10px', height: '10px' }}
            />
          </div>
        </div>


        <div className="triangle-node-left">
          <div id={data.id} className="triangle-node-text">
            {data.label}
          </div>
          <Handle
            type="target"
            position="top"
            id={`${data.id}.top`}
            style={{ top: '45px', borderRadius: 0, width: '10px', height: '10px' }}
          />
        </div>



        <div className="rect-node-top">
          <div id={data.id}>{data.label}</div>
        </div>
        <div className="rect-node-center">
          <div id={data.id}>{data.label}</div>
        </div>
      </div>
    </Tooltip>
  );
};


//  ---------------------  Задвижка Левая -----------------------


const GateValveLeft = ({ data }) => {
  return (
    <Tooltip title="Задвижка" placement="left">
      <div className="GateValveLeft">
        <div className="triangle-node-right">

          <div id={data.id} className="triangle-node-text">
            {data.label}
            <Handle
              type="source"
              position="top"
              id={`${data.id}.top`}
              style={{top: '5px', borderRadius: 0, width: '10px', height: '10px' }}
            />
          </div>
        </div>


        <div className="triangle-node-left">
          <div id={data.id} className="triangle-node-text">
            {data.label}
          </div>
          <Handle
            type="target"
            position="top"
            id={`${data.id}.top`}
            style={{ top: '45px', borderRadius: 0, width: '10px', height: '10px' }}
          />
        </div>



        <div className="rect-node-top">
          <div id={data.id}>{data.label}</div>
        </div>
        <div className="rect-node-center">
          <div id={data.id}>{data.label}</div>
        </div>
      </div>
    </Tooltip>
  );
};



//  ---------------------  Флажок  -----------------------

const Flag = ({ data }) => {
  return (
    <Tooltip title="Флаг">
      <div>
        <div className="Flag">
          <div id={data.id} className="triangle-node-text">
            {data.label}
          </div>
        </div>

        <div className="flag-node-center">
          <div id={data.id}>{data.label}</div>
          <Handle
            type="source"
            position="left"
            id={`${data.id}.top`}
            style={{ top: '115px', left: '3px', borderRadius: 0, width: '10px', height: '10px' }}
          />
        </div>
        <div className="flag-node-top">
          <div id={data.id}>{data.label}</div>
          <Handle
            type="target"
            position="left"
            id={`${data.id}.top`}
            style={{ top: '105px', left: '3px', borderRadius: 0, width: '10px', height: '10px' }}
          />
        </div>
      </div>
    </Tooltip>
  );
};


//  ---------------------  Text  -----------------------

export const TextNode = ({ data }) => {
  return (
    <div style={{ background: "transparent", padding: "14px" }}>
      <div id={data.id}>{data.label}</div>
    </div>
  );
};

export const nodeTypes = {
  controlunit: ControlUnit,
  indgatevalve: IndGateValve,
  circle: CircleNode,
  pump: RectangleNode,
  gatevalve: GateValve,
  gatevalveright: GateValveRight,
  gatevalvebot: GateValveBot,
  gatevalveleft: GateValveLeft,
  flag: Flag,
  text: TextNode
};