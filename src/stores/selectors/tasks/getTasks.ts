import { RootState } from "../../rootReducer";

export default (state: RootState) => 
    state.taskList.tasks.filter(t => 
        t.id.toString().indexOf(state.taskList.searchById || "") >= 0 
        &&
        t.order.organisation.name.indexOf(state.taskList.searchByOrgName || "") >= 0
    ) 