import { Outlet, Link } from "react-router-dom";
function Login(){
    return(
        <div>
        <button onClick={<Link to="/home"></Link>}><h1>Login</h1></button></div>
    )
}
export default Login;
