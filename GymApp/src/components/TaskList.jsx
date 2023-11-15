import React from 'react'

import Check from './Check'

const TaskList = props => {
    const { list, setList } = props;
    const onChangeStatus = e => {
        const { name, checked } = e.target;
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };
    const tilde = list.map(item => (
        <Check key={item.id} data={item} onChange={onChangeStatus} />
    ));
    return (
        <div className="todo-list">
            { }
            {list.length ? tilde : "Sin actividad"}
            { }
            {list.length ? (
                <p>
                    <button className="button red" color='red' onClick={onClickRemoveItem}>
                        Eliminar actividad ejecutada
                    </button>
                </p>
            ) : null}
        </div>
    );
};

export default TaskList