import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const { login } = useAuth();

  const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
  
      const email = e.target.email.value;
      const password = e.target.password.value;
      login(email, password).then((result) => {
        console.log(result.user);

        if(result.user){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login successful",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/");
        }
      }).catch(error=>{
        console.log(error)
      });
    };


    return (
      
       
        
           <div className="h-[75vh] flex justify-center mb-10 items-center bg-red-500">
            <div className="w-full">
            <h3 className="text-center text-white text-2xl font-bold">Login Here</h3>
             <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 w-1/4 mx-auto">
                <button type="submit" className="btn bg-white text-red-500 hover:bg-blue-500 hover:text-white border-0">Login</button>
              </div>
            </form>
            </div>
           </div>
          
      
    
    );
};

export default Login;