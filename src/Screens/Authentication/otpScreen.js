import React from "react";
import { NavLink } from "react-router-dom";

function OtpScreen() {
  return (
    <div class=" mt-5 d-flex  justify-content-center">
      <div class="row shadow rounded">
        <form class=" rounded shadow  form-inline" style={{ width: 400 }}>
          <div class="mt-5">
            <p class="text-center" style={{ fontSize: 20, fontWeight: "bold" }}>
              Enter 4 Digit OTP
            </p>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <div id="occasions" class="col-1 ">
              <input style={{ width: 50, height: 40 }}></input>
            </div>
            <div class="col-1 ms-5">
              <input style={{ width: 50, height: 40 }}></input>
            </div>
            <div class="col-1 ms-5">
              <input style={{ width: 50, height: 40 }}></input>
            </div>
            <div class="col-1 ms-5">
              <input style={{ width: 50, height: 40 }}></input>
            </div>
          </div>

          <div class="d-flex justify-content-center mt-4">
            <button
              class="btn btn-warning"
              style={{ fontWeight: "bold", width: 370 }}
            >
              Continue
            </button>
          </div>
          <div class="d-flex justify-content-center mb-5 mt-2">Resend OTP</div>
        </form>
      </div>
    </div>
  );
}

export default OtpScreen;
