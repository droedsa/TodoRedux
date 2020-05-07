import React from "react";
import './form.css'
import {connect} from "react-redux";
import {newStateTask, onChangePriorityForm, onChangeTextAreaForm, onChangeTitleForm, onCloseForm} from "../../actions";

const Form = ({onClosedForm, form, onChangeTextA, onChangeTitle, onChangePriority,onSaveNewTarget}) => {
    const {title, text, priority} = form;

    return <div className='form-z'>
        <div className='card bg-dark  text-white form'>
            <div className="card-header">
                <select className='form-control' value={priority}
                        onChange={event => onChangePriority(event.target.value)}>
                    <option value="High">High</option>
                    <option value="Normal">Normal</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div className="card-body d-flex flex-column">
                <input className='form-control' value={title}
                       onChange={(e) => onChangeTitle(e.target.value)} type="text"/>
                <textarea value={text} onChange={(event => onChangeTextA(event.target.value))}
                          className='form-control'/>
                <button className='btn btn-success' onClick={onSaveNewTarget}> Save</button>
                <button onClick={onClosedForm} className='btn badge-danger'>Cancel</button>
            </div>
        </div>
    </div>
};


const mapStateToProps = ({onClosedForm, form, onChangeTextA, onChangeTitle, onChangePriority,onSaveNewTarget}) => {
    return {
        onClosedForm, form, onChangeTextA, onChangeTitle,onChangePriority,onSaveNewTarget
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClosedForm: () => dispatch(onCloseForm()),
        onChangeTextA: (text) => dispatch(onChangeTextAreaForm(text)),
        onChangeTitle: (text) => dispatch(onChangeTitleForm(text)),
        onChangePriority: (value) => dispatch(onChangePriorityForm(value)),
        onSaveNewTarget:()=> dispatch(newStateTask())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Form);