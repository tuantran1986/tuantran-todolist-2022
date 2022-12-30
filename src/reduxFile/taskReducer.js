import * as type from './constants';

var MAKE_ID_REDUX_HOOK_1 = 4;

const findIndex = (id, taskList) => {
    let result = -1;
    taskList.map((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
}

const taskInitialState = {
    taskList: [],
    displayForm: true,
    taskEditting: {
        id: null,
        name: '',
        status: true
    },
    keySearch: '',
    sortType: 'ten_tangdan'
}

export const taskReducer = (state = taskInitialState, action) => {
    switch (action.type) {
        case type.TOGGLE_DISPLAY_FORM:
            if (state.taskEditting.id) {
                // EDIT
                state = {
                    ...state, displayForm: true, taskEditting: {
                        id: null,
                        name: '',
                        status: true
                    }
                };
            } else {
                // state.taskEditting.id) === null - ADD
                state = { ...state, displayForm: !state.displayForm };
            }

            return state;
        case type.CLOSE_FORM:
            state = { ...state, displayForm: false };
            return state;
        case type.GENERATE_DATA:
            let newState1 = {
                ...state, taskList: [
                    { id: 1, name: 'hoc HTML', status: true },
                    { id: 2, name: 'hoc CSS', status: false },
                    { id: 3, name: 'hoc JS', status: true }
                ]
            };
            MAKE_ID_REDUX_HOOK_1 = 4;

            localStorage.setItem('todo_redux_hook_1', JSON.stringify(newState1));
            localStorage.setItem('MAKE_ID_REDUX_HOOK_1', JSON.stringify(MAKE_ID_REDUX_HOOK_1));
            state = { ...newState1 };
            return state;
        case type.LOAD_DATA:
            let dataLoad = JSON.parse(localStorage.getItem('todo_redux_hook_1'));
            MAKE_ID_REDUX_HOOK_1 = JSON.parse(localStorage.getItem('MAKE_ID_REDUX_HOOK_1'));

            if (dataLoad) {
                // CYDB - khi load data - chỉ load : TASKLIST ; những phần còn lại của INITIALSTATE không đổi
                state = {
                    ...dataLoad, displayForm: true,
                    taskEditting: {
                        id: null,
                        name: '',
                        status: true
                    },
                    keySearch: '',
                    sortType: 'ten_tangdan'
                };
            } else {
                // nếu không có DATA thì STATE - với TASKLIST = mảng rỗng
                state = {
                    taskList: [],
                    displayForm: true,
                    taskEditting: {
                        id: null,
                        name: '',
                        status: true
                    },
                    keySearch: '',
                    sortType: 'ten_tangdan'
                }
            }

            return state;

        case type.ADD_OR_EDIT_TASK:

            // ID === NULL : ADD
            if (action.id === null) {
                MAKE_ID_REDUX_HOOK_1 = JSON.parse(localStorage.getItem('MAKE_ID_REDUX_HOOK_1'));
                let newTask = {
                    id: MAKE_ID_REDUX_HOOK_1,
                    name: action.name,
                    status: action.status
                };
                let newTaskList = [...state.taskList, newTask];
                let newState2 = {
                    ...state, taskList: newTaskList
                };
                MAKE_ID_REDUX_HOOK_1++;

                localStorage.setItem('todo_redux_hook_1', JSON.stringify(newState2));
                localStorage.setItem('MAKE_ID_REDUX_HOOK_1', JSON.stringify(MAKE_ID_REDUX_HOOK_1));
                state = { ...newState2 };
                return state;
            } else {
                // ID !== NULL : EDIT
                let indexUpdate = findIndex(action.id, state.taskList);
                if (indexUpdate !== -1) {
                    let newTaskList = [...state.taskList];
                    newTaskList[indexUpdate].name = action.name;
                    newTaskList[indexUpdate].status = action.status;
                    let newState = {
                        ...state, taskList: newTaskList, taskEditting: {
                            id: null,
                            name: '',
                            status: true
                        }
                    };

                    localStorage.setItem('todo_redux_hook_1', JSON.stringify(newState));
                    state = { ...newState };
                }
                return state;
            }

        case type.CHANGE_STATUS_TASK:
            let indexChange = findIndex(action.id, state.taskList);
            if (indexChange !== -1) {
                let newTaskList = [...state.taskList];
                newTaskList[indexChange].status = !newTaskList[indexChange].status;
                let newState = {
                    ...state, taskList: newTaskList
                };

                localStorage.setItem('todo_redux_hook_1', JSON.stringify(newState));
                state = { ...newState };
            }
            return state;

        case type.DELETE_TASK:
            let indexDelete = findIndex(action.id, state.taskList);

            if (indexDelete !== -1) {
                let newTaskList = [...state.taskList];
                newTaskList.splice(indexDelete, 1);
                let newState = {
                    ...state, taskList: newTaskList
                };

                localStorage.setItem('todo_redux_hook_1', JSON.stringify(newState));
                state = { ...newState };
            }
            return state;

        case type.UPDATE_TASK:
            let indexUpdate = findIndex(action.id, state.taskList);

            if (indexUpdate !== -1) {
                let newTaskEditting = {
                    id: state.taskList[indexUpdate].id,
                    name: state.taskList[indexUpdate].name,
                    status: state.taskList[indexUpdate].status,
                }
                let newState = {
                    ...state, taskEditting: newTaskEditting, displayForm: true
                };

                localStorage.setItem('todo_redux_hook_1', JSON.stringify(newState));
                state = { ...newState };
            }
            return state;

        case type.CLEAR_TASK_EDITTING:

            let newState2 = {
                ...state, taskEditting: {
                    id: null,
                    name: '',
                    status: true
                }, displayForm: false
            };
            localStorage.setItem('todo_redux_hook_1', JSON.stringify(newState2));
            state = { ...newState2 };
            return state;

        case type.SEND_SEARCH_KEY_TO_STORE:

            let newState3 = {
                ...state, keySearch: action.keySearch
            };
            localStorage.setItem('todo_redux_hook_1', JSON.stringify(newState3));
            state = { ...newState3 };
            return state;

        case type.SEND_SORT_TYPE_TO_STORE:

            let newState4 = {
                ...state, sortType: action.sortType
            };
            localStorage.setItem('todo_redux_hook_1', JSON.stringify(newState4));
            state = { ...newState4 };
            return state;

        default:
            return state;
    }
}

