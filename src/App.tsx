import classes from "./App.module.css";
import Main from "./sections/Main/Main";
import Navbar from "./sections/Navbar/Navbar";

function App() {

  return (
    <div className={classes.container} >
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
