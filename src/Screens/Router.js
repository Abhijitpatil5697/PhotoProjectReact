import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Occasion from "../Screens/Occasions/occasions";
import VideoGraphy from "../Screens/VideoGraphy/videoGraphy";
import OnRent from "../Screens/OnRent/onRent";
import ImageEditing from "../Screens/ImageEditing/imageEditing";
import MainScreen from "./mainScreen";

export function Router() {
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" Component={MainScreen}></Route>
        <Route path="/occasions" Component={Occasion}></Route>
        <Route path="/videoGraphy" Component={VideoGraphy}></Route>
        <Route path="/onRent" Component={OnRent}></Route>
        <Route path="/imageEditing" Component={ImageEditing}></Route>
      </Routes>
    </div>
  );
}
