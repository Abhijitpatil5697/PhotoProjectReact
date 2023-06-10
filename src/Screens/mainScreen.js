import Occasions from "../img/Occasions.jpg";
import Videography from "../img/videos.jpg";
import OnRent from "../img/onRent.jpg";
import ImageEditing from "../img/imageEditing.jpg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import Wedding from "../img/wedding.jpg";
import RingCeremony from "../img/ringCeremony.jpg";
import TouristPhotography from "../img/TouristPhotography.jpg";
import ModelingPhotography from "../img/ModelingPhotography.jpg";
export default function MainScreen() {
  const [flag, setFlag] = useState(0);
  const navigate = useNavigate();
  const occasions = () => {
    setFlag(1);
    navigate("/occasions");
  };
  return (
    <div>
      <div>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-dark p-3">
            <div class="collapse navbar-collapse">
              <div class="bg-dark ms-2">
                <Button
                  style={{ color: "white", fontWeight: "bold" }}
                  onClick={() => {
                    setFlag(0);
                    navigate("/");
                  }}
                >
                  Home
                </Button>
              </div>
            </div>

            <div class="me-2">
              <Button
                onClick={() => {
                  navigate("/logIn");
                }}
                class="btn btn-success"
                style={{ color: "white", fontWeight: "bold" }}
              >
                log in
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  navigate("/signUp");
                }}
                class="btn btn-success"
                style={{ color: "white", fontWeight: "bold" }}
              >
                sign Up
              </Button>
            </div>
          </nav>
        </div>
        <div class="pt-3">
          <text
            class="shadow mb-3 p-3"
            style={{ fontSize: 40, fontWeight: "bold" }}
          >
            Now Camera will reach each location in Country
          </text>
        </div>
        <div>
          <div class=" p-3 m-4  d-flex justify-content-center">
            <div class="row">
              <div id="occasions" class="col-3" onClick={() => occasions()}>
                <img
                  src={Occasions}
                  class="img-fluid rounded shadow mb-2 bg-image hover-overlay"
                ></img>
                <div class="p-3 bg-dark rounded shadow mb-3">
                  <text style={{ color: "white", fontWeight: "bold" }}>
                    Photography
                  </text>
                </div>
              </div>
              <div
                class="col-3"
                onClick={() => {
                  setFlag(2);
                  navigate("/videoGraphy");
                }}
              >
                <img
                  src={Videography}
                  // onMouseOver={}
                  class="img-fluid rounded shadow mb-2"
                ></img>
                <div class="p-3 bg-dark rounded shadow mb-3">
                  <text style={{ color: "white", fontWeight: "bold" }}>
                    Videography
                  </text>
                </div>
              </div>
              <div class="col-3">
                <img src={OnRent} class="img-fluid rounded shadow mb-2"></img>
                <div class="p-3 bg-dark rounded shadow mb-3">
                  <text style={{ color: "white", fontWeight: "bold" }}>
                    On Rent
                  </text>
                </div>
              </div>
              <div class="col-3">
                <img
                  src={ImageEditing}
                  class="img-fluid rounded shadow mb-2"
                ></img>
                <div class="p-3 bg-dark rounded shadow mb-3">
                  <text style={{ color: "white", fontWeight: "bold" }}>
                    Image Editing
                  </text>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-1">
            <div class=" p-3 m-4 d-flex justify-content-center">
              <div class="row">
                <div id="occasions" class="col-3">
                  <img
                    src={Wedding}
                    class="img-fluid rounded shadow mb-2 bg-image hover-overlay"
                  ></img>
                  <div class="p-3 bg-dark rounded shadow mb-3">
                    <text style={{ color: "white", fontWeight: "bold" }}>
                      Wedding
                    </text>
                  </div>
                </div>
                <div class="col-3">
                  <img
                    src={RingCeremony}
                    class="img-fluid rounded shadow mb-2"
                  ></img>
                  <div class="p-3 bg-dark rounded shadow mb-3">
                    <text style={{ color: "white", fontWeight: "bold" }}>
                      Ring Ceremony
                    </text>
                  </div>
                </div>
                <div class="col-3">
                  <img
                    src={ModelingPhotography}
                    class="img-fluid rounded shadow mb-2"
                  ></img>
                  <div class="p-3 bg-dark rounded shadow mb-3">
                    <text style={{ color: "white", fontWeight: "bold" }}>
                      Modeling
                    </text>
                  </div>
                </div>
                <div class="col-3">
                  <img
                    src={TouristPhotography}
                    class="img-fluid rounded shadow mb-2"
                  ></img>
                  <div class="p-3 bg-dark rounded shadow mb-3">
                    <text style={{ color: "white", fontWeight: "bold" }}>
                      Other
                    </text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
