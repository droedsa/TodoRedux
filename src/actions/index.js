const onDeleteTaskBar = (id) => {
    return {
        type: 'TASK_BAR_DELETE',
        payload: id
    }
};

const onDoneTaskBar = (id) => {
    return {
        type: 'TASK_BAR_DONE',
        payload: id
    }
};

const onVisibleForm = () => {
    return {
        type: 'FORM_VISIBLE',
        payload:true
    }
};

const onCloseForm = () => {
    return {
        type: 'FORM_CLOSE'
    }
};

const onChangeTextAreaForm = (text) => {
    return {
        type: 'FORM_CHANGE_TEXT',
        payload:text
    }
};

const onChangeTitleForm = (text) => {
    return {
        type: 'FORM_CHANGE_TITLE',
        payload:text
    }
};

const onChangePriorityForm = (text) => {
    return {
        type: 'FORM_PRIORITY_TITLE',
        payload:text
    }
};

const newStateTask = () => {
    return {
        type: 'TASK_CREATE_NEW',
    }
};

const onClickChangeBtn = (id)=>{
    console.log(id);
    return{
        type: 'TASK_CLICK_CHANGE_STATE',
        payload:id
    }
};

const onChangePrioritySearchBar = (value) =>{
  return{
      type:"SORT_CHANGE_PRIORY_SEARCH_BAR",
      payload:value
  }
};


const onChangeStatusSearchBar = (value) =>{
    return{
        type:"SORT_CHANGE_STATUS_SEARCH_BAR",
        payload:value
    }
};

const onChangeSearchPanelBar = (value) =>{
    return{
        type:"SORT_CHANGE_SEARCH_PANEL_BAR",
        payload:value
    }
};





export {
    onDeleteTaskBar,
    onDoneTaskBar,
    onVisibleForm,
    onCloseForm,
    onChangeTextAreaForm,
    onChangeTitleForm,
    onChangePriorityForm,
    newStateTask,
    onClickChangeBtn,
    onChangePrioritySearchBar,
    onChangeStatusSearchBar,
    onChangeSearchPanelBar

}