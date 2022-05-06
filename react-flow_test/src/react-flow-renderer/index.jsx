import React, { useState, useEffect } from 'react';
import { ExportCSV } from './ExportCSV ';
import "./css/buttons_styles.css"
import ReactFlow, {
    removeElements,
    updateEdge,
    addEdge,
    Background,
    Controls
} from 'react-flow-renderer';
import { nodeTypes } from './Nodes';
import styleConnect from './style-connect';
const socket = new WebSocket('ws://localhost:5000/')

const ReactFlowRenderer = () => {
    const [elements, setElements] = useState([styleConnect]);

    // ------------------- Экспорт в Excel ------------------

    const fileName = 'Scada'
    const [name, setName] = useState("");
    const [activeNode, setActiveNode] = useState();
    const [newName, setNewName] = useState("");
    const [instance, setInstance] = useState();

    useEffect(() => {
        if (activeNode) setNewName(activeNode.data.label);
    }, [activeNode]);


        // --------------- Удаление ---------------


        const elementRemoveHandler = (elementTobeRemoved) => {
            setElements((prev) => removeElements(elementTobeRemoved, prev));
        };
    


    const connectHandler = (params) => {
        setElements((els) =>
            addEdge({ ...params, type: 'step', style: { stroke: 'red' } }, els))
    };


    // ----------------------- Добавление элементов --------------------------

    const addRectangleHandler = () => {
        const newNode = {
            id: `${Date.now()}`,
            data: { label: `${name}` },
            type: "rectangle",
            position: {
                x: 0,
                y: 0
            }
        };
        newNode.data = { ...newNode.data, id: `${newNode.id}` };

        setElements((prev) => {
            return [...prev, newNode];
        });
        setName("");
    };

    const addCircleHandler = () => {
        const newNode = {
            id: `${Date.now()}`,
            data: { label: `${name}` },
            type: "circle",
            position: {
                x: 0,
                y: 0
            }
        };
        newNode.data = { ...newNode.data, id: `${newNode.id}` };

        setElements((prev) => {
            return [...prev, newNode];
        });
        setName("");
    };

    const addFlagHandler = () => {
        const newNode = {
            id: `${Date.now()}`,
            data: { label: `${name}` },
            type: "flag",
            position: {
                x: 0,
                y: 0
            }
        };
        newNode.data = { ...newNode.data, id: `${newNode.id}` };

        setElements((prev) => {
            return [...prev, newNode];
        });
        setName("");
    };


    const addControlUnit = () => {
        const newNode = {
            id: `${Date.now()}`,
            data: { label: `${name}` },
            type: "controlunit",
            position: {
                x: 0,
                y: 0
            }
        };
        newNode.data = { ...newNode.data, id: `${newNode.id}` };

        setElements((prev) => {
            return [...prev, newNode];
        });
        setName("");
    };


    // ------------------- Добавление независимой задвижки ----------------

    const addIndGateValveHandler = () => {
        const newNode = {
            id: `${Date.now()}`,
            data: { label: `${name}` },
            type: "indgatevalve",
            position: {
                x: -10,
                y: 30
            }
        };
        newNode.data = { ...newNode.data, id: `${newNode.id}` };

        setElements((prev) => {
            return [...prev, newNode];
        });
        setName("");
    };


    // ------------------- Добавление задвижки ----------------

    const addGateValveHandler = () => {
        const newNode = {
            id: `${Date.now()}`,
            data: { label: `${name}` },
            type: "gatevalve",
            position: {
                x: -10,
                y: 30
            }
        };
        newNode.data = { ...newNode.data, id: `${newNode.id}` };

        setElements((prev) => {
            return [...prev, newNode];
        });
        setName("");
    };


    const addGateValveHandlerRight = () => {
        const newNode = {
            id: `${Date.now()}`,
            data: { label: `${name}` },
            type: "gatevalveright",
            position: {
                x: -10,
                y: 30
            }
        };
        newNode.data = { ...newNode.data, id: `${newNode.id}` };

        setElements((prev) => {
            return [...prev, newNode];
        });
        setName("");
    };


    const addGateValveHandlerBot = () => {
        const newNode = {
            id: `${Date.now()}`,
            data: { label: `${name}` },
            type: "gatevalvebot",
            position: {
                x: -10,
                y: 30
            }
        };
        newNode.data = { ...newNode.data, id: `${newNode.id}` };

        setElements((prev) => {
            return [...prev, newNode];
        });
        setName("");
    };


    const addGateValveHandlerLeft = () => {
        const newNode = {
            id: `${Date.now()}`,
            data: { label: `${name}` },
            type: "gatevalveleft",
            position: {
                x: -10,
                y: 30
            }
        };
        newNode.data = { ...newNode.data, id: `${newNode.id}` };

        setElements((prev) => {
            return [...prev, newNode];
        });
        setName("");
    };


    // -----------------------------------

    const addTextHandler = () => {
        const newNode = {
            id: `${Date.now()}`,
            data: { label: `${name}` },
            type: "text",
            position: {
                x: 0,
                y: 0
            }
        };
        newNode.data = { ...newNode.data, id: `${newNode.id}` };

        setElements((prev) => {
            return [...prev, newNode];
        });
        setName("");
    };


    // --------------- Убрать, грубо говоря, линии с задвижки ---------------


    const edgeUpdateHandler = (oldEdge, newConnection) =>
        setElements((els) => updateEdge(oldEdge, newConnection, els));



    // --------------- Приближении при двойном нажатии на мышь ---------------

    const clickHandler = (e) => {
        var htmlString = e.target.outerHTML.toString();
        var index = htmlString.indexOf(` id="`);
        index += 15;
        const currentId = htmlString.substr(index, 13);

        elements.forEach((_current) => {
            if (_current.id === currentId) {
                setActiveNode(_current);
            }
        });
        // setNewName(activeNode.data.label)
    };


    // --------------- Обновление текста ---------------

    const updateNodeHandler = () => {
        if (!activeNode) return;
        setElements(
            elements.map((_current) => {
                if (_current.id === activeNode.id) {
                    return {
                        ..._current,
                        data: { label: newName, id: _current.data.id }
                    };
                }

                return _current;
            })
        );
    };


    const onLoad = (reactFlowInstance) => {
        setInstance(reactFlowInstance);
        reactFlowInstance.fitView();
    };

    //save pos
    const saveChangesHandler = () => {
        console.log("state", instance.getElements());
        //отправка json
        localStorage.setItem('state', JSON.stringify(instance.getElements()));
        var pos = JSON.stringify(instance.getElements());
        socket.send(pos);
    };

    socket.onopen = () => {
        console.log('подключено');
    }

    socket.onmessage = (event) => {
        console.log('есть сообщение', event.data)
    }



    return (
        <div
            style={{
                height: "75vh",
                width: "75vw",
                border: "1px solid black",
                marginLeft: "12.5vw"
            }}
        >
            <ReactFlow
                elements={elements}
                onElementsRemove={elementRemoveHandler}
                onConnect={connectHandler}
                deleteKeyCode={8 || 46}
                onEdgeUpdate={edgeUpdateHandler}
                nodeTypes={nodeTypes}
                snapToGrid={true}
                snapGrid={[16, 16]}
                connectionLineStyle={{ stroke: "red", strokeWidth: 2 }}
                // При двойном нажатии  на мышку приближает 
                onDoubleClick={clickHandler}
                onLoad={onLoad}
            >
                <Background variant="dots" gap={15} size={2} color="#c8c8c8" />
                <Controls />
            </ReactFlow>

            <div className='Buttons'>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Введите текст"
                />

                <button type="button" onClick={addTextHandler}>
                    Текст
                </button>

                <button>
                    <ExportCSV csvData={elements} fileName={fileName} />
                </button>

            </div>

            <div className='Buttons'>


                <button type="button" onClick={addIndGateValveHandler} className="IndZadv">
                    <img src="https://cdn.discordapp.com/attachments/565406946354528268/955394073412395008/5da0c98245011949.png" alt='Задвижка'></img>
                </button>

                <button type="button" onClick={addGateValveHandler} className="Zadv">
                    <img src="https://media.discordapp.net/attachments/565406946354528268/955138797417414656/9fe81764ae11e11a.png" alt='Задвижка'></img>
                </button>

                <button type="button" onClick={addGateValveHandlerRight} className="Zadv-Right">
                    <img src="https://media.discordapp.net/attachments/565406946354528268/955147487713325096/e985402b7a23f9ac.png" alt='Задвижка'></img>
                </button>

                <button type="button" onClick={addGateValveHandlerBot} className="Zadv-Bot">
                    <img src="https://media.discordapp.net/attachments/565406946354528268/955151784907784202/a0416a67cfa4061c.png" alt='Задвижка'></img>
                </button>

                <button type="button" onClick={addGateValveHandlerLeft} className="Zadv-Left">
                    <img src="https://media.discordapp.net/attachments/565406946354528268/955153077592281190/5bf4af1de854e78a.png" alt='Задвижка'></img>
                </button>

                <button type="button" onClick={addRectangleHandler} className="Cistern">
                    <img src='https://media.discordapp.net/attachments/565406946354528268/955140552184180757/4f9d807774b88b0e.png' alt='Цистерна'></img>
                </button>


                <button type="button" onClick={addCircleHandler} className="Regul">
                    <img src="https://media.discordapp.net/attachments/565406946354528268/955138925733769337/20c16b7fc40cbf81.png" alt='Регулятор'></img>
                </button>

                <button type="button" onClick={addFlagHandler} className="Flaaag">
                    <img src="https://media.discordapp.net/attachments/565406946354528268/955138926069309460/c07fc1d24613f6c7.png" alt='Флаг'></img>
                </button>

                <button type="button" onClick={addControlUnit} className="Untitled">
                    <img src="https://media.discordapp.net/attachments/565406946354528268/955141072663748659/44f946ecc1121201.png" alt='Untitled'></img>
                </button>
            </div>

            <div className='Buttons'>
                <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    type="text"
                />

                <button type="button" onClick={updateNodeHandler}>
                    Обновить
                </button>
            </div>

            <div className='Buttons'>



                <button type="button" onClick={saveChangesHandler}>
                    Сохранить
                </button>

            </div>

        </div>
    );
};

export default ReactFlowRenderer;