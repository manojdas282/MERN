import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const isTokenAlive = Boolean(sessionStorage.getItem("token"));
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isTokenAlive) {
      navigate("/sign-in");
    }
  }, [isLoggedIn, isTokenAlive]);
  return <h1>protected route</h1>;
}
