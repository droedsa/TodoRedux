const initialState = {
    newId: 4,
    cart: [
        {
            id: 1,
            title: 'Hello',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            priority: 'High',
            done: 'Open'
        },
        {
            id: 2,
            title: 'Hello',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            priority: 'Low',
            done: 'Open'
        },
        {
            id: 3,
            title: 'TEST',
            text: 'Some ld on the card title and make up the bulk of the card\'s content.',
            priority: 'Normal',
            done: 'Open'
        }
    ],
    visibleForm: false,
    form: {
        id: null,
        priority: 'High',
        title: '',
        text: '',
        new: false
    },
    sortBar: {
        searchPanel: '',
        priorityPanelBar: 'All',
        statusBar: 'All',
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TASK_BAR_DELETE': {
            const itemId = action.payload;
            return {
                ...state,
                cart: [
                    ...state.cart.filter(item => item.id !== itemId)
                ]
            }
        }
        case 'TASK_BAR_DONE': {
            const itemId = action.payload;
            const item = state.cart.find(({id}) => id === itemId);
            const itemIndex = state.cart.findIndex(({id}) => id === itemId);
            const newItem = {
                ...item,
                done: item.done === 'Open'? 'Done' : 'Open'
            };
            if (newItem.done === 'Done') {
                return {
                    ...state,
                    cart: [
                        ...state.cart.slice(0, itemIndex),
                        ...state.cart.slice(itemIndex + 1),
                        newItem
                    ]
                }
            } else {
                return {
                    ...state,
                    cart: [
                        newItem,
                        ...state.cart.slice(0, itemIndex),
                        ...state.cart.slice(itemIndex + 1)
                    ]
                }
            }
        }

        case 'TASK_CLICK_CHANGE_STATE': {
            const itemId = action.payload;
            const item = state.cart.find(({id}) => id === itemId);
            return {
                ...state,
                form: {
                    ...item,
                    title: item.title,
                    text: item.text,
                    priority: item.priority,
                    new: false
                },
                visibleForm: true
            }
        }

        case 'TASK_CREATE_NEW':
            debugger;
            if (state.form.new) {
                const newItem = {
                    id: state.newId,
                    title: state.form.title,
                    text: state.form.text,
                    priority: state.form.priority,
                    done: 'Open'
                };
                return {
                    ...state,
                    cart: [newItem, ...state.cart],
                    form: initialState.form,
                    visibleForm: false,
                    newId: state.newId + 1,

                };
            }
            const itemId = state.form.id;
            const item = state.cart.find(({id}) => id === itemId);
            const itemIndex = state.cart.findIndex(({id}) => id === itemId);

            const newItem = {
                ...item,
                title: state.form.title,
                text: state.form.text,
                priority: state.form.priority,
            };
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, itemIndex),
                    newItem,
                    ...state.cart.slice(itemIndex + 1)
                ],
                form: initialState.form,
                visibleForm: false
            };


        case 'FORM_VISIBLE':
            return {
                ...state,
                visibleForm: true,
                form: {
                    ...state.form,
                    new: true,
                }
            };

        case 'FORM_CLOSE':
            return {
                ...state,
                visibleForm: false,
                form: {
                    priority: 'High',
                    title: '',
                    text: '',
                    new: false,
                    id: null
                }
            };

        case 'FORM_CHANGE_TEXT': {
            return {
                ...state,
                form: {
                    ...state.form,
                    text: action.payload,
                }
            }
        }

        case 'FORM_CHANGE_TITLE':
            return {
                ...state,
                form: {
                    ...state.form,
                    title: action.payload,
                }
            };

        case 'FORM_PRIORITY_TITLE':
            return {
                ...state,
                form: {
                    ...state.form,
                    priority: action.payload
                }
            };

        case 'SORT_CHANGE_PRIORY_SEARCH_BAR':
            return {
                ...state,
                sortBar: {
                    ...state.sortBar,
                    priorityPanelBar:action.payload
                }
            };

        case 'SORT_CHANGE_STATUS_SEARCH_BAR':
            return {
                ...state,
                sortBar: {
                    ...state.sortBar,
                    statusBar :action.payload
                }
            };

        case 'SORT_CHANGE_SEARCH_PANEL_BAR':
            return {
                ...state,
                sortBar: {
                    ...state.sortBar,
                    searchPanel: action.payload
                }
            };
        default:
            return state
    }
};

export default reducer;