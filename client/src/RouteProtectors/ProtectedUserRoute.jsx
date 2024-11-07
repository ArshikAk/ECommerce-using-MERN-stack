import { useAuth } from "./AuthContext"
import { Navigate , Outlet } from "react-router-dom"

const ProtectedUserRoute = () => {

  const {user} = useAuth() || null

  if(user && user.role == "user")
  {
    return <Outlet/>
  }
  else{
    return <Navigate to="/login"/>
  }
  
  
}

export default ProtectedUserRoute
