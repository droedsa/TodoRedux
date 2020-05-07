import React from "react";
import './task-bar.css'
import TaskBarItem from "../task-bar-item/task-bar-item";
import {connect} from "react-redux";
import {onClickChangeBtn, onDeleteTaskBar, onDoneTaskBar} from "../../actions";
import Form from "../form/form";

const TaskBar = ({
                     cart, onDeleteTask, onDoneTask, visibleForm, onClickChange,
                     sortBar: {priorityPanelBar, statusBar, searchPanel}
                 }) => {

    const taskBarItem = <div className='container cart'>
        {


            cart.map(({id, title, text, priority, done}) => {
                debugger;
                if (((priorityPanelBar === priority || priorityPanelBar === 'All')
                    && (done === statusBar || statusBar === 'All'))
                    && (title.includes(searchPanel) || searchPanel === '')) {
                    return <div key={id}>
                        <TaskBarItem id={id}
                                     title={title}
                                     text={text}
                                     priority={priority}
                                     done={done}
                                     onDeleteTask={() => onDeleteTask(id)}
                                     onDoneTask={() => onDoneTask(id)}
                                     onClickChange={() => onClickChange(id)}/>
                    </div>
                } else return null
            })
        }
    </div>

    const formVisible = visibleForm ? <Form/> : null;

    return (
        <>
            {formVisible}
            {taskBarItem}
        </>
    )

};

const mapStateToProps = ({cart, visibleForm, sortBar}) => {
    return {
        cart, visibleForm, sortBar
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTask: (id) => dispatch(onDeleteTaskBar(id)),
        onDoneTask: (id) => dispatch(onDoneTaskBar(id)),
        onClickChange: (id) => dispatch(onClickChangeBtn(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskBar);