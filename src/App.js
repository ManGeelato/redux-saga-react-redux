import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {petIncrement, petDecrement, getUsers} from "./actions"
import { useEffect } from 'react';

function App() {
  const petCounter  = useSelector((state) => state.petCounter);
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <div className="App">
    //  <h1>Normal Pets</h1>
    //  <button onClick={() => dispatch(petIncrement(2))}>Add Pet</button>
    //  <button onClick={() => dispatch(petDecrement())}>Delete Pet</button>
    //  <h1>Pet Counter {petCounter}</h1>
    // </div>

    // REDUX SAGA
    <div className="App">
    <h1>React Saga</h1>
    {loading && <h2>Loading</h2>}
    {error && !loading && <h2>{error}</h2>}
    {users && users.map((user, i) => <h1 key={i}>{user.name}</h1> )}
   </div>
  );
}

export default App;
