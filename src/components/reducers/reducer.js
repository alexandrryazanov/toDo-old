import { initialTasks } from './../../initialStates';

//--струтура store
// state - объект 
//1ый элемент tasks - массив объектов(задач)
//2й элемент filter 0-All 1-completed, 2-uncompleted

export function reducer(state={tasks:initialTasks, filter:0}, action) {
    let newState = JSON.parse(JSON.stringify(state));; //--глубокое копирование объекта
    switch(action.type) {      
        case 'ADD_TASK':
            let newTask={text:action.value,completed:false,createdDate:new Date()}
            newState.tasks = newState.tasks.concat([newTask]); 
            return newState;
        case 'DELETE_TASK':
            newState.tasks.splice(action.value,1);
            return newState;
        case 'CHANGE_TASK_TEXT':
            newState.tasks[action.index].text = action.value;
            newState.tasks[action.index].createdDate = new Date();
            return newState;
        case 'CHANGE_COMPLETED':
            newState.tasks[action.value].completed = !newState.tasks[action.value].completed;
            return newState;
        case 'FILTER':
            newState.filter = action.value;
            return newState;
        default:
            return state;
    } 
}
