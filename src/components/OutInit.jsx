import { useAuth0 } from "@auth0/auth0-react";

function OutInit() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { logout } = useAuth0();

  return (
    <button onClick={() => logout()} className="rounded-md border border-transparent px-3 py-2 text-base font-medium bg-gray-800 hover:border-gray-500 transition duration-250 text-white">
        Logout
    </button>
  )
}

export default OutInit