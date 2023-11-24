import React, { useState, useEffect } from "react";

import AgregarTarea from './AgregarTarea'
import TaskList from './TaskList'


const Contenedor = () => {
    const [list, setList] = useState([]);

    //Carga de datos al montar el componente
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem("tasks")) || [];
        console.log("Datos cargados desde localStorage:", storedList);
        setList(storedList);
    }, []);

    //Guardamos los datos en el localStorage cuando la lista cambia.
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(list));
        console.log("Guardando datos en localStorage:", list);
    }, [list]);



    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };
    return (
        <div>
            { }
            <AgregarTarea handleAddItem={handleAddItem} />
            { }
            <TaskList list={list} setList={setList} />
        </div>
    );
};

export default Contenedor 
