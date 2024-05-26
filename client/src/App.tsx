import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './App.css';
// import AddNewExpenses from './components/AddNewExpenses/AddNewExpenses';
// import ListOfExprenses from './components/ListOfExprenses/ListOfExprenses';

function App() {
  const classes = useStyles();


  return (
    <div className={classes.app}>
      {/* <AddNewExpenses />
      <ListOfExprenses /> */}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    padding: '10vh 20vh',
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.default
  },
}));

export default App;
