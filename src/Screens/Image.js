import React, { useEffect, useState } from "react";
import Occasions from "../img/Occasions.jpg";
import Videography from "../img/videos.jpg";
import OnRent from "../img/onRent.jpg";
import ImageEditing from "../img/imageEditing.jpg";

const arr = [Occasions, Videography, OnRent, ImageEditing];

function Image() {
  const [view, setView] = useState(arr[0]);
  const viewImage = (e, img) => {
    setView(img);
  };

  //   useEffect(()=>{

  //   },[])

  return (
    <div>
      <div className="d-flex justify-content-center p-3">
        <img
          className="d-flex justify-content-center"
          style={{ width: 500, height: 300 }}
          src={view}
        ></img>
      </div>
      <div style={{ display: "flex" }}>
        {arr.map((val) => {
          return (
            <div key={val}>
              <img
                style={{ height: 50, width: 100 }}
                src={val}
                onClick={(e) => viewImage(e, val)}
              ></img>
            </div>
            // <div className=" row p-3 m-4 ">
            //   <div className="col-3">
            //     <img style={{ height: 50, width: 100 }} src={val}></img>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default Image;
