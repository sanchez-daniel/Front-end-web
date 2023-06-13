import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Outlet, Link } from "react-router-dom";
export function Form() {
  return (
    <>
      <div className="w-full h-screen ">
        <div>
          <img
            src="../assets/img/LOGO_UNAC_BLANCO.png"
            alt="Mi imagen"
            className="w-32 h-auto "
          />
        </div>
        <div className="flex flex-col items-center justify-center h-full ">
          <form className="bg-white shadow-2xl rounded px-16 pt-6 pb-8 mb-4 flex flex-col items-center justify-center">
            <h1 className="flex flex-row items-center block text-gray-700 text-2xl font-bold mb-2">
              Bienvenido
            </h1>
            <div>
              <label className="flex flex-row items-center block text-gray-700 text-2xl font-bold mb-2">
                <FaUserCircle /> Usuario
              </label>
              <input
                className="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                minLength="4"
                required
                autoSave="off"
                autoComplete="off"
                placeholder="Usuario"
              />
            </div>
            <div>
              <label className="flex flex-row items-center block text-gray-700 text-2xl font-bold mb-2">
                <RiLockPasswordLine /> Contraseña
              </label>
              <input
                className="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                minLength="8"
                required
                autoSave="off"
                autoComplete="off"
                placeholder="***************"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <Link to={`/Home`}>Home</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
