import * as type from './constants';

export const toggleDisplayFormAction = () => {
    return {
        type: type.TOGGLE_DISPLAY_FORM
    }
};
export const closeFormAction = () => {
    return {
        type: type.CLOSE_FORM
    }
};

export const generateDataAction = () => {
    return {
        type: type.GENERATE_DATA
    }
};

export const loadDataAction = () => {
    return {
        type: type.LOAD_DATA
    }
};

export const addOrEditTaskAction = (id, name, status) => {
    return {
        type: type.ADD_OR_EDIT_TASK,
        id: id,
        name: name,
        status: status
    }
};

export const changeStatusTaskAction = (id) => {
    return {
        type: type.CHANGE_STATUS_TASK,
        id: id,
    }
};

export const deleteTaskAction = (id) => {
    return {
        type: type.DELETE_TASK,
        id: id,
    }
};

export const updateTaskAction = (id) => {
    return {
        type: type.UPDATE_TASK,
        id: id,
    }
};

export const clearTaskEdittingAction = () => {
    return {
        type: type.CLEAR_TASK_EDITTING,
    }
};

export const sendKeySearchToStoreAction = (keySearch) => {
    return {
        type: type.SEND_SEARCH_KEY_TO_STORE,
        keySearch: keySearch
    }
};

export const sendSortTypeToStoreAction = (sortType) => {
    return {
        type: type.SEND_SORT_TYPE_TO_STORE,
        sortType: sortType
    }
};

