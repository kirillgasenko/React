export const removeTextTask = id => ({
    type: 'REMOVE_TASK', 
    payload: {id}
})
export const addTextTask = (title, car) => ({
    type: 'ADD_TASK', 
    payload: {title, car}
})
export const editTextTask = data => ({
    type: 'EDIT_TASK', 
    payload: {data}
})