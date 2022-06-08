import React, { useState, useEffect, useCallback } from 'react';
import { ExportCSV } from './ExportCSV ';
import "./css/buttons_styles.css"
import ReactFlow, {
    removeElements,
    updateEdge,
    addEdge,
    Background,
    Controls,
    ReactFlowProvider,
    useZoomPanHelper
} from 'react-flow-renderer';
import localforage from 'localforage';
import { nodeTypes } from './Nodes';
// const socket = new WebSocket('ws://localhost:5000/')
localforage.config({
    name: 'react-flow-docs',
    storeName: 'flows',
});






const ReactFlowRenderer = () => {




    const [elements, setElements] = useState([]);



    // ------------------- Экспорт в Excel ------------------

    const fileName = 'Scada'

    const [name, setName] = useState("");
    const [activeNode, setActiveNode] = useState();
    const [newName, setNewName] = useState("");
    const [instance, setInstance] = useState();
    const { transform } = useZoomPanHelper();


    const flowKey = 'example-flow';

    useEffect(() => {
        if (activeNode) setNewName(activeNode.data.label);
    }, [activeNode]);


    // --------------- Сохранение в локальном хранилище ---------------

    const onSave = useCallback(() => {

        if (instance) {
            const flow = instance.toObject();
            localforage.setItem(flowKey, flow);
            console.log("Объекты сохранены")
        }

    }, [instance]);



    // --------------- Загрузка ---------------

    const onRestore = useCallback(() => {
        const restoreFlow = async () => {
            const flow = await localforage.getItem(flowKey);


            if (flow) {
                const [x = 0, y = 0] = flow.position;
                setElements(flow.elements || []);
                transform({ x, y, zoom: flow.zoom || 0 });
            }

        };
        restoreFlow();
    }, [setElements, transform]

    );

    // --------------- Загрузка через локальный диск ---------------

    const loadJson = useCallback((uploadedFile) => {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            try {
                setElements(JSON.parse(fileReader.result));
                // setErrorData(null)
            } catch (e) {
                alert("Не файл JSON!");

            }
        }
        if (typeof uploadedFile !== undefined)
            fileReader.readAsText(uploadedFile);

          },
    );



    // --------------- Сохранение через локальный диск ---------------


    const exportToJson = () => {
        let filename = "Scada-systems.json";
        let contentType = "application/json;charset=utf-8;";
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            const blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(instance.getElements())))], { type: contentType });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            const a = document.createElement('a');
            a.download = filename;
            a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(instance.getElements()));
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }


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
            type: "pump",
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




    // --------------- Сохранение через сервер ---------------


    // //save pos
    // const saveChangesHandler = () => {
    //     console.log("state", instance.getElements());
    //     //отправка json

    //     localStorage.setItem('state', JSON.stringify(instance.getElements()));
    //     var pos = JSON.stringify(instance.getElements());
    //     socket.send(pos);
    // };

    // socket.onopen = () => {
    //     console.log('подключено');
    // }

    // socket.onmessage = (event) => {
    //     console.log('есть сообщение')
    //     const dataSave = JSON.parse(JSON.stringify(event.data));
    //     console.log(dataSave)
    // }



    return (
        <div
            style={{
                height: "75vh",
                width: "75vw",
                border: "1px solid black",
                marginLeft: "14.7em"
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
                connectionLineStyle={{ stroke: "red", type: 'step', strokeWidth: 2 }}
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

                <button >
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


                <button type='button' onClick={onRestore}>
                    Загрузить
                </button>



                <button type='button' onClick={onSave}>
                    Сохранить состояние
                </button>


                <button type='button' onClick={exportToJson}>
                    Сохранить
                </button>


            </div>

            <input type="file"
                onChange={(e) => loadJson(e.target.files[0])} />


        </div>
    );
};

export default () => (
    <ReactFlowProvider>
        <ReactFlowRenderer />
    </ReactFlowProvider>
);
