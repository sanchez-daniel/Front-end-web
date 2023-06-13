import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex justify-center border border-white m-8 p-16 rounded-2xl">
        <div className="flex flex-col items-center">
          <Link to="Home">
            <button className="rounded-md border border-transparent px-3 py-2 text-base font-medium bg-gray-800 hover:border-gray-500 transition duration-250 text-white">View Home</button>
          </Link>
          <img src={user.picture} alt={user.name} className="rounded-full w-40 pt-12" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    )
  );
}

export default Profile;