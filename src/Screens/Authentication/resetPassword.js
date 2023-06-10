import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
function ResetPassword() {
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");

  const [validPass, setValidPass] = useState(false);
  const [validRePass, setValidRePass] = useState(false);

  const [match, setMatch] = useState(false);
  const passRef = useRef();
  const rePassRef = useRef();
  const changePass = (e) => {
    setPass(e.target.value);
    if (PWD_REGEX.test(e.target.value)) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }
  };
  const changeRepass = (e) => {
    setRePass(e.target.value);
    if (PWD_REGEX.test(e.target.value)) {
      setValidRePass(true);
    } else {
      setValidRePass(false);
    }
  };
  useEffect(() => {
    if (document.activeElement == rePassRef.current) {
      if (pass === rePass) {
        setMatch(true);
      } else {
        setMatch(false);
      }
    }
  }, [pass][rePass]);
  const submitData = (e) => {
    e.preventDefault();
    if (pass === rePass) {
      //axios
    }
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
              <h2 style={{ fontWeight: "bold" }}>Reset Password</h2>
            </div>
            <div class="form-group  mt-3 ">
              <h6 style={{ float: "left", fontSize: 15 }}>Enter Password:</h6>
              <input
                onChange={(e) => changePass(e)}
                ref={passRef}
                type="password"
                class="form-control   "
                id="password"
                aria-describedby="emailHelp"
                placeholder="Enter password"
              ></input>
            </div>
            <div class="form-group mt-3">
              <h6 style={{ float: "left", fontSize: 15 }}>
                Re-enter Password:
              </h6>
              <input
                onChange={(e) => changeRepass(e)}
                ref={rePassRef}
                type="password"
                class="form-control "
                id="password1"
                placeholder="Password"
              ></input>
            </div>
            <button
              onClick={(e) => submitData(e)}
              {...(match ? { disabled: false } : { disabled: true })}
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

export default ResetPassword;
