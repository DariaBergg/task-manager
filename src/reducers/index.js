
import { CREATE_TASK, DELETE_TASK, EDIT_TASK } from "../actions/types";

const initialState = [
    // {
    //     id: 1,
    //     title: "Learn ReactJS",
    //     description: "Let's learn React js today!",
    //     status: "In Progress"
    // }, 
    // {
    //     id: 2,
    //     title: "Learn Redux",
    //     description: "Let's learn Redux today!",
    //     status: "Completed"
    // },
    // {
    //     id: 3,
    //     title: "Learn JS",
    //     description: "My next step is to learn JS",
    //     status: "Unstarted"
    // }
]

const tasks = (state = {tasks: initialState}, action) => {
    /**********************************************************
     *                  if else version
     **********************************************************/
    // if(action.type === EDIT_TASK) {
    //     const {payload} = action;
    //     return {
    //         tasks: state.tasks.map(task => {
    //             if(task.id === payload.id) {
    //                 return Object.assign({}, task, payload.params)
    //             }
    //             return task;
    //         })
    //     }
    // }

    /**********************************************************
     *                  switch version
     **********************************************************/
    const {payload} = action;
    switch(action.type) {
        case EDIT_TASK : {
            return {
            tasks: state.tasks.map(task => {
                if (task.id === payload.id) {
                    return Object.assign({}, task, payload.params)
                }
                    return task;
                    })
        }
    }
    case CREATE_TASK : {
        return {
            tasks: state.tasks.concat(action.payload)
        }
    }
    case DELETE_TASK : {
        return {
            tasks: state.tasks.filter(task => task.id !== action.id)
        }
    }

  default: return state;
}
};

export default tasks;