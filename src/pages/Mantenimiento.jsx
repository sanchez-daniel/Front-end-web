import { Link } from "react-router-dom";
import { SideBar } from "../components/Navbar";
import { Table } from "../components/Table";

export function Mantenimiento() {
  return (
    <>
      <SideBar />
      <div className="my-3">
        <button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Ingresar
        </button>
        <button className=" my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Eliminar
        </button>
        <button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          actualizar
        </button>
      </div>

      <Table />
    </>
  );
}
