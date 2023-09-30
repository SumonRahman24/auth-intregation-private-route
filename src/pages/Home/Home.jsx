import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      home
    </div>
  );
};

export default Home;
