const initialState = {
    todos: [
        {
          id: 1,
          title: "Car",
          desc: "Subaru"
        },
        {
          id: 2,
          title: "Car",
          desc: "Audi"
        },
        {
          id: 3,
          title: "Car",
          desc: "Mercedes"
        },
        {
          id: 4,
          title: "Car",
          desc: "BMW"
        }
    ]
}
function Reducer(state = initialState, action){
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
              id: state.todos.length + 1,
              title: action.payload.title,
              desc: action.payload.car
          }
        ]
      } 
    case 'EDIT_TASK':
      return {
        ...state,
        todos: state.todos.map(item => item.id === action.payload.data.id? action.payload.data : item)      
      }
    case 'REMOVE_TASK':
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload.id)
    }
    default:
    return state;
  }

}

export default Reducer; 