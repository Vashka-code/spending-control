// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { RootReduxState } from '../../store/store';
// import { Button } from '@mui/material';
// import { Expense, removeExpenseAction } from '../../store/reducers/expenses';

// const ListOfExprenses = () => {
//   const exprenses = useSelector((state: RootReduxState) => state.expans.expenses);

//   const dispatch = useDispatch();

//   const removeExprenses = (exprense: Expense) => {
//     dispatch(removeExpenseAction(exprense.id));
//   }
  
//   return (
//     <div> 
//       {!exprenses ? <span>На данный момент нет трат</span> : 
//       exprenses.map(item => {
//         return <div>
//           {item.type}
//           {item.description}
//           {item.amount}

//           <Button onClick={() => {
//             removeExprenses(item);
//           }}></Button>
//         </div>
//       })}
//     </div>
//   )
// }

// export default ListOfExprenses