import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Axios/axios";
const MAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Email() {
  const [email, setEmail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();
  const getMail = (e) => {
    setEmail(e.target.value);
    if (MAIL_REGEX.test(e.target.value)) {
      setValidMail(true);
    } else {
      setValidMail(false);
    }
  };
  const submitData = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "/forgotPassword",
      JSON.stringify({ UserEmail: email }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    console.log(response);
    if (response.data.auth && response.status === 201) {
      localStorage.setItem("auth", response.data.auth);
      navigate("/resetPassword");
    } else {
      alert(response.data.result);
    }
    navigate("/otp");
  };
  return (
    <div>
      <div class="p-5">
        <div class="rounded d-flex justify-content-center">
          <form
            class=" rounded shadow pt-3 ps-3 pe-3 pb-2 form-inline"
            style={{ width: 400 }}
          >
            <div>
              <h2 style={{ fontWeight: "bold" }}>Email</h2>
            </div>
            <div class="form-group  mt-3 ">
              <h6 style={{ float: "left", fontSize: 15 }}>Enter Mail :</h6>
              <input
                onChange={(e) => getMail(e)}
                ref={emailRef}
                type="email"
                required
                autoComplete="off"
                class="form-control "
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></input>
              <div>
                {document.activeElement === emailRef.current ? (
                  <div>
                    {validMail ? (
                      ""
                    ) : (
                      <p
                        class=" rounded shadow p-1"
                        style={{ float: "right", fontSize: 13, color: "red" }}
                      >
                        enter correct email id
                      </p>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <button
              onClick={(e) => submitData(e)}
              {...(validMail ? { disabled: false } : { disabled: true })}
              type="submit"
              class="btn btn-warning mt-4 mb-3 shadow"
              style={{ fontWeight: "bold", width: 370 }}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Email;
