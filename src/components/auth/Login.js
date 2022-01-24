import React, {useState} from "react";
import {useNavigate } from "react-router-dom";
const Login = ({setLoginUser}) => {
  const navigate  = useNavigate()
    const [user,setUser] = useState({
        email:"",
        password: ""
    })
    const handleChange = e =>{
    const {email,value} = e.target
    setUser({
    ...user,//spread operator 
    [email]:value
    })
    }

    const LoginUser = async (e) => {
      console.log(user);
      e.preventDefault();
      const res = await fetch('/signin', {
          method : "POST",
          headers : {
              "Content-Type":"application/json"
          },
          body : JSON.stringify({user})
      });
      console.log(res);
      const data = res.json();
      console.log(!data);
      if(res.status === 400 || res.status === 402 || res.status === 404 || !data){
          window.alert('Invalid Credentials');
      }
      else{
          window.alert('Login Successful')
          setLoginUser(data.user);
          navigate('/home');
      }
  }

  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />                   
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form className="pt-3">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username"
                        value={user.email} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        value={user.password} 
                        onChange={handleChange}
                        placeholder="Password"
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
                          <i class="input-helper"></i>
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
                        <i className="ti-facebook mr-2"></i>Connect using facebook
                      </button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Don't have an account?{" "}
                      <a href="register.html" className="text-primary">
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
