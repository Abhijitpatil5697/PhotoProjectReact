import { useState } from "react";
import axios from "../Axios/axios";
import { Link, useNavigate } from "react-router-dom";
import MD5 from "md5";
export default function LogIn() {
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const submitData = async (e) => {
    e.preventDefault();
    const response = await axios.get("/getUsers", {
      headers: { Authorization: `bearer ${localStorage.getItem("auth")}` },
      withCredentials: true,
    });

    if (response.length !== 0) {
      console.log(userId, pass);
      console.log(response);
      const found = response.data.some(
        (item) => item.UserEmail === userId && item.UserPassword === MD5(pass)
      );
      if (!found) {
        alert("Invalid Credentials!!");
      } else {
        alert("login Successfull!!");
        navigate("/");
      }
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
              <h2 style={{ fontWeight: "bold" }}>Sign In</h2>
            </div>
            <div class="form-group  mt-3 ">
              <h6 style={{ float: "left", fontSize: 15 }}>User Email:</h6>
              <input
                onChange={(e) => setUserId(e.target.value)}
                type="email"
                class="form-control  shadow "
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></input>
            </div>
            <div class="form-group mt-3">
              <h6 style={{ float: "left", fontSize: 15 }}>User Password:</h6>
              <input
                onChange={(e) => setPass(e.target.value)}
                type="password"
                class="form-control shadow"
                id="password1"
                placeholder="Password"
              ></input>
            </div>
            <button
              onClick={(e) => submitData(e)}
              {...(userId && pass ? { disabled: false } : { disabled: true })}
              type="submit"
              class="btn btn-warning mt-4 mb-3 shadow"
              style={{ fontWeight: "bold", width: 370 }}
            >
              Continue
            </button>
            <div>
              <p>
                Forgot password?
                <Link to="/email">Reset password</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
