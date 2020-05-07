import React from "react";
import './search-bar.css'
import {connect} from "react-redux";
import {onChangePrioritySearchBar, onChangeSearchPanelBar, onChangeStatusSearchBar, onVisibleForm} from "../../actions";


const SearchBar = ({onVisible, sortBar, onChangePriorityBar, onChangeStatusBar, onChangeSearchBar}) => {
    const {searchPanel, priorityPanelBar, statusBar} = sortBar
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
            <h1 className="navbar-brand" href="#">TODO-LIST</h1>

            <div className="navbar-collapse">
                <input value={searchPanel} onChange={event => onChangeSearchBar(event.target.value)}
                       className="form-control input-search" type="text" placeholder="Search"/>
                {/*<button className="btn  btn-search" type="submit">Search</button>*/}
            </div>

            <select onChange={event => onChangeStatusBar(event.target.value)} value={statusBar}
                    className='task-state form-control'>
                <option>All</option>
                <option>Done</option>
                <option>Open</option>
            </select>

            <select onChange={event => onChangePriorityBar(event.target.value)} value={priorityPanelBar}
                    className='task-priority form-control'>
                <option>All</option>
                <option>High</option>
                <option>Normal</option>
                <option>Low</option>
            </select>

            <button onClick={() => onVisible()} className='btn btn-search'>Create</button>
        </nav>
    )
};

const mapStateToProps = ({onVisible, sortBar, onChangePriorityBar, onChangeStatusBar, onChangeSearchBar}) => {
    return {
        onVisible, sortBar, onChangePriorityBar, onChangeStatusBar, onChangeSearchBar
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onVisible: () => dispatch(onVisibleForm()),
        onChangePriorityBar: (value) => dispatch(onChangePrioritySearchBar(value)),
        onChangeStatusBar: (value) => dispatch(onChangeStatusSearchBar(value)),
        onChangeSearchBar: (value) => dispatch(onChangeSearchPanelBar(value))
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

