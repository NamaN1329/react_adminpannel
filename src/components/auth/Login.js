import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
    console.log(user)
  };

  const LoginUser = async (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email,password}),
    });
    const data = await res.json();
    if (
      res.status === 400 ||
      res.status === 402 ||
      res.status === 404 ||
      !data
    ) {
      window.alert("Invalid Credentials");
    }
    else if(res.status==422){
      window.alert("Wrong Credentials");
    }
    else {
      console.log(data);
      window.alert("Login Successful");
      // setLoginUser(data.user);
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/logo.svg`}
                      alt="logo"
                    />
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form className="pt-3">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username"
                        autoComplete="off"
                        value={user.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Password"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="mt-3">
                      <button
                        onClick={LoginUser}
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        href="#"
                      >
                        SIGN IN
                      </button>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          Keep me signed in
                          <i className="input-helper"></i>
                        </label>
                      </div>
                      <a href="#" className="auth-link text-black">
                        Forgot password?
                      </a>
                    </div>
                    <div className="mb-2">
                      <button
                        type="button"
                        className="btn btn-block btn-facebook auth-form-btn"
                      >
                        <i className="ti-facebook mr-2"></i>Connect using
                        facebook
                      </button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Don't have an account?{" "}
                      <a href="/signup" className="text-primary">
                        Create
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- content-wrapper ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
    </>
  );
};
export default Login;
