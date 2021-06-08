import { combineReducers } from "redux";
import { createStore } from "redux";

import { EmployeeReducer } from "./EmpoyeeReducer";
import { UserLoginReducer } from "./UserLoginReducer";

const rootReducer = combineReducers({
  UserLogin: UserLoginReducer,
  // depart : DepartRducer,
  //vechil: VechuileReucer
});

const store = createStore(rootReducer);
export { store };
