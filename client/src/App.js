// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Feedback from './components/Feedback';
import History from './components/History';

// ReactDOM.render(
//   <Router>
//     <div>
//       <Route exact path="/">
//         <Home />
//       </Route>
//       <Route path="/login">
//         <Login/>
//       </Route>
//     </div>
//   </Router>,
// );
function App() {
  return (
    <>
      {/* <Router>

        <Navbar/>
          <Route path="/Login">
            <Login/>
          </Route>
    </Router> */}
    <Navbar/>
    {/* <Feedback/> */}
    {/* <History/> */}
    {/* <SignUp/> */}
    {/* <Login/> */}
    <Upload/>
    </>
  );
}

export default App;
