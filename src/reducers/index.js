import * as actions from "../actions/index";

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
    ],
    data: [],
    error: []
}

function Reducer(state = initialState, action){
  switch (action.type) {
    case actions.ADD_TASK:
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
    case actions.UPDATE_TASK:
      return {
        ...state,
        todos: state.todos.map(item => item.id === action.payload.data.id ? action.payload.data : item)      
      }
    case actions.REMOVE_TASK:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload.id)
    }
    case actions.SUCCEEDED_DATA:
      return {
        ...state,
        data: action.payload
    }
    case actions.FAILED_DATA:
      return {
          ...state,
          error: action.error
      }
    default:
    return state;
  }

}

export default Reducer; 