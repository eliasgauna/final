import React, { useState } from "react";

import AgregarTarea from './AgregarTarea'
import TaskList from './TaskList'


const Contenedor = () => {
    const [list, setList] = useState([]);
    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };
    return (
        <div>
            { }
            <AgregarTarea handleAddItem={handleAddItem}/>
            { }
            <TaskList list={list} setList={setList}/>
        </div>
    ); 
};

export default Contenedor 
