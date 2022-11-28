import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {petFavoriteIncrement, petFavoriteDecrement} from "./actions"

function App() {
  const petFavorite  = useSelector((state) => state.petFavorite);
  const dispatch = useDispatch();

  return (
    <div className="App">
     <h1>React Redux Favorite Pets</h1>
     <button onClick={() => dispatch(petFavoriteIncrement(1))}>Add Pet</button>
     <button onClick={() => dispatch(petFavoriteDecrement())}>Delete Pet</button>
     <h1>Pet Favorite {petFavorite}</h1>
    </div>
  );
}

export default App;
