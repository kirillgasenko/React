import * as actions from "./index";

export const addTask = (title, car) => ({
    type: actions.ADD_TASK, 
    payload: {title, car}
});
export const editTask = data => ({
    type: actions.UPDATE_TASK, 
    payload: {data}
});
export const removeTask = id => ({
    type: actions.REMOVE_TASK, 
    payload: {id}
});

export const suceededData = (dataFromServer) => ({
    type: actions.SUCCEEDED_DATA,
    payload: dataFromServer
})

export const loadData = () => ({
    type: actions.LOAD_DATA
})

export const failedData = (error) => ({
    type: actions.FAILED_DATA,
    error: error
})
export const showLoader = () => ({
    type: actions.SHOW_LOADER
})
  
export const hideLoader = () => ({
    type: actions.HIDE_LOADER  
})
