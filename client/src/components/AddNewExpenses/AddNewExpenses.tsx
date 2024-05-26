// import { Button, Grid, MenuItem } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import fakeData from '../../data/exprenses.json';
// import { useDispatch } from 'react-redux';
// import { ChangeEvent, FormEvent, useState } from 'react';
// import { addExpenseAction } from '../../store/reducers/expenses';

// function AddNewExpenses() {
//   const [formData, setFormData] = useState({ amount: 0, type: 'Food', desctiption: '' });

//   const dispatch = useDispatch();

//   const handleFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   function addNew(event: FormEvent) {
//     event.preventDefault();
//     dispatch(addExpenseAction({
//       ...formData, id: Date.now(),
//       date: Date.now(),
//     }));
//     clearState();
//   }

//   const clearState = () => {
//     setFormData({ amount: 0, type: 'Food', desctiption: '' });
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         addNew(e);
//       }}>
//       <Grid container alignItems="center" spacing={2}>
//         <Grid xs={4} item>
//           <TextField
//             name="amount"
//             fullWidth
//             variant="outlined"
//             type="number"
//             focused
//             label="How much *"
//             value={formData.amount}
//             onChange={handleFormChange}
//           />
//         </Grid>
//         <Grid xs={4} item>
//           <TextField
//             fullWidth
//             select
//             name="type"
//             label="Select Type *"
//             value={formData.type}
//             onChange={handleFormChange}>
//             {fakeData.listOfTypes.map((option) => (
//               <MenuItem key={option} value={option}>
//                 {option}
//               </MenuItem>
//             ))}
//           </TextField>
//         </Grid>
//         <Grid xs={4} item>
//           <TextField
//             name="desctiption"
//             fullWidth
//             variant="outlined"
//             focused
//             label="Description (Optional)"
//             value={formData.desctiption}
//             onChange={handleFormChange}
//           />
//         </Grid>
//         <Grid xs={12} item>
//           <Button type="submit" fullWidth variant="contained">
//             Submit
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// }

// export default AddNewExpenses;
