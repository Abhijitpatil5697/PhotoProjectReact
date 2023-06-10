import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Screens/Authentication/sighUp";
import LogIn from "./Screens/Authentication/logIn";

// import { Router } from "./Screens/Router";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainScreen from "./Screens/mainScreen";
import { BrowserRouter } from "react-router-dom";
import Email from "./Screens/Authentication/email";
import ResetPassword from "./Screens/Authentication/resetPassword";
import OtpScreen from "./Screens/Authentication/otpScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <MainScreen></MainScreen> */}
        <Routes>
          <Route path="/" Component={MainScreen} exact></Route>
          <Route path="/signUp" Component={SignUp} exact></Route>
          <Route path="/logIn" Component={LogIn} exact></Route>
          <Route path="/email" Component={Email} exact></Route>
          <Route path="/resetPassword" Component={ResetPassword} exact></Route>
          <Route path="/otp" Component={OtpScreen} exact></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
