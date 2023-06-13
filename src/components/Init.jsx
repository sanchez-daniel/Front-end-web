import { useAuth0 } from '@auth0/auth0-react'


function Init() {
    const {loginWithRedirect} = useAuth0();
  return (
    <div>
    <button onClick={()=> loginWithRedirect()} className='rounded-md border border-transparent px-3 py-2 text-base font-medium bg-gray-800 hover:border-gray-500 transition duration-250 text-white' >Login</button>
  </div>
  )
}

export default Init