import Init from "../components/Init"
import Profile from "../components/Profile"
import OutInit from "../components/OutInit"
import { useAuth0 } from "@auth0/auth0-react";




function Login() {
  const {isAuthenticated} = useAuth0();

  

  return (
    <div className="flex justify-center text-3xl leading-tight">
      <div className="flex flex-col items-center">
        <h1>Welcome</h1>
        <Profile/>
        <div className="flex gap-20 justify-between">
          {
            isAuthenticated ? <OutInit/> : <Init />
          }
        </div>

      </div>
    </div>
  );
}

export default Login