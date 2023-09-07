import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

function Signin() {
  return (
    <div className="glass-container">
      <p className="helloagain">Hello Again !</p>
      <p className="welcombck"> Welcome Back You’ve been missed</p>
      <form>
        <input type="text" placeholder="Enter username" />
        <input type="password" placeholder="Password" />
      </form>
      <p className="forgot">Forgot Password ?</p>
      <button className="signinbtn">
        {" "}
        <Link className="link" to="/">Sign in</Link>
      </button>

      <p className="or">
        {" "}
        <img src="./Line 1.svg" alt="" /> or <img src="./Line 1.svg" alt="" />
      </p>
      <div className="logoimages">
        <button className="btn-v"><img src="./Vector (2).svg " alt="" /></button>
        <button className="btn-v"><img src="./Vector (1).svg " alt="" /></button>
        <button className="btn-v"><img src="./logos_facebook.svg" alt="" /></button>
        
      </div>
      <p className="not-a-member">
        Not a Member ? <span>Register Now</span>
      </p>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="glass-container">
      <img className="imglaptop" src="./h42r_6u8u_220303.jpg" alt="" />
      <p className="discover"> Discover Your Dream Job Here</p>
      <p className="only">
        {" "}
        Only We Know How To Choose The Ideal Person For The Job
      </p>
      <div className="btncont">
        <button className="btn"><Link className="link" to="/signin">Register</Link></button>
        <button className="btn">
          {" "}
          <Link className="link" to="/signin">
            signin
          </Link>{" "}
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <section className="body">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </section>
  );
}

export default App;
