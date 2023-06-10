import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MD5 from "md5";
import axios from "../Axios/axios";
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const MAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PHONE_NUMBER_REGEX =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export default function SignUp() {
  const navigate = useNavigate();

  const mailRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const passRef = useRef();

  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);

  const [pass, setPass] = useState("");
  const [validPass, setValidPass] = useState(false);

  useEffect(() => {
    mailRef.current.focus();
  }, [mail]);
  const changeEmail = (e) => {
    setMail(e.target.value);
    if (MAIL_REGEX.test(e.target.value)) {
      setValidMail(true);
    } else {
      setValidMail(false);
    }
  };

  const changePhone = (e) => {
    setPhone(e.target.value);
    if (PHONE_NUMBER_REGEX.test(e.target.value)) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  };

  const changePWD = (e) => {
    setPass(e.target.value);
    if (PWD_REGEX.test(e.target.value)) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "/signUp",
      JSON.stringify({
        UserPassword: MD5(pass),
        UserName: name,
        UserPhone: phone,
        UserEmail: mail,
        CreatedBy: name,
        UpdatedBy: name,
        CreatedDate: `${new Date().toISOString()}`,
        UpdatedBy: name,
        UpdatedDate: `${new Date().toISOString()}`,
      }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    if (response.data.auth && response.status === 201) {
      localStorage.setItem("auth", response.data.auth);
      navigate("/logIn");
    } else {
      alert(response.data.result);
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
              <h2 style={{ fontWeight: "bold" }}>Create Account</h2>
            </div>
            <div class="form-group  mt-3 ">
              <h6 style={{ float: "left", fontSize: 15 }}>User Email:</h6>
              <input
                ref={mailRef}
                value={mail}
                onChange={(e) => changeEmail(e)}
                required
                autoComplete="off"
                type="email"
                class="form-control   "
                id="email"
                placeholder="test@gmail.com"
              ></input>
              {document.activeElement === mailRef.current ? (
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
            <div class="form-group mt-3 ">
              <h6
                style={{
                  float: "left",
                  fontSize: 15,
                }}
              >
                User Name:
              </h6>
              <input
                ref={nameRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                class="form-control  "
                id="name"
                aria-describedby="emailHelp"
                placeholder="John Holder"
              ></input>
            </div>
            <div class="form-group mt-3">
              <h6 style={{ float: "left", fontSize: 15 }}>User Phone:</h6>
              <input
                ref={phoneRef}
                value={phone}
                onChange={(e) => changePhone(e)}
                required
                type="phone"
                class="form-control "
                id="phone"
                aria-describedby="emailHelp"
                placeholder="+91 9023456756"
              ></input>
              {document.activeElement === phoneRef.current ? (
                <div>
                  {validPhone ? (
                    ""
                  ) : (
                    <p
                      class=" rounded shadow p-1"
                      style={{ float: "right", fontSize: 13, color: "red" }}
                    >
                      enter correct phone number
                    </p>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            <div class="form-group mt-3">
              <h6 style={{ float: "left", fontSize: 15 }}>User Password:</h6>
              <input
                ref={passRef}
                value={pass}
                onChange={(e) => changePWD(e)}
                required
                type="password"
                class="form-control "
                id="password1"
                placeholder="As@190"
              ></input>
              {document.activeElement === passRef.current ? (
                <div>
                  {validPass ? (
                    ""
                  ) : (
                    <p
                      class=" rounded shadow p-1"
                      style={{ float: "right", fontSize: 13, color: "red" }}
                    >
                      8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters, a number and
                      a special character.
                      <br />
                      Allowed special characters:{" "}
                      <span aria-label="exclamation mark">!</span>{" "}
                      <span aria-label="at symbol">@</span>{" "}
                      <span aria-label="hashtag">#</span>{" "}
                      <span aria-label="dollar sign">$</span>{" "}
                      <span aria-label="percent">%</span>
                    </p>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            <button
              {...(validMail && validPass && validPhone
                ? { disabled: false }
                : { disabled: true })}
              type="submit"
              class="btn btn-warning mt-4 mb-3 shadow"
              style={{ fontWeight: "bold", width: 370 }}
              onClick={(e) => handleSubmit(e)}
            >
              Continue
            </button>
            <div>
              Already have account?{" "}
              <NavLink to="/logIn" class="link-primary">
                Sign in
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
