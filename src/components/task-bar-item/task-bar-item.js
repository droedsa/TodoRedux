import React from "react";
import './task-bar-item.css'

const TaskBarItem = ({done, title, text, priority, onDeleteTask, onDoneTask, onClickChange}) => {
    //style
    const doneStyle = done !== 'Open' ? 'border-secondary text-black done' : 'bg-primary text-white';
    let cartColor = '';
    if (priority === 'High')
        cartColor= 'bg-danger text-white';
    if (priority === 'Normal')
        cartColor= 'bg-warning text-white';
    if (priority === 'Low')
        cartColor= 'bg-info text-white';

    return (
        <div className={`card cart-w ${doneStyle} `}>
            <div className={`card-header ${cartColor}`}>{priority}</div>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{text}</p>
                <button className='btn btn-primary disabled' onClick={onDeleteTask}>Delete</button>
                <button className='btn btn-primary disabled' onClick={onClickChange}>Change</button>
                <button className='btn btn-primary disabled' onClick={onDoneTask}>Done</button>
            </div>
        </div>

    )
};

export default TaskBarItem;

