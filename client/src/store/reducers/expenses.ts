// import fakeData from '../../data/exprenses.json';

// export interface ExpensesReduxState {
//   expenses: Expense[]
// }

// // TODO: change type
// export interface Expense {
//   id: number,
//   date: number | Date,
//   description?: string,
//   type: string,
//   amount: number
// }


// const defaultState = {
//   expenses: fakeData.expenses,
// }

// const ADD_EXPENSE = 'ADD_EXPENSE';
// const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

// export const expansesReducer = (state: ExpensesReduxState = defaultState, action: any) => {
//   switch (action.type) {
//     case ADD_EXPENSE:
//       state.expenses.push(action.payload);
//       return {...state}
//     case REMOVE_EXPENSE:
//       state.expenses = state.expenses.filter(item => item.id !== action.payload);

//       return {...state}
//     default:
//       return state;
//   }
// }


export const addExpenseAction = (payload: Expense) => ({type: ADD_EXPENSE, payload})
export const removeExpenseAction = (payload: number) => ({type: REMOVE_EXPENSE, payload})
