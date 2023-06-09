import { SideBar } from "../components/Navbar";

export function Inicio() {
  return (
    <>
      <SideBar />
      <body className="w-full h-screen ">
        <main className="flex flex-row   items-center justify-center h-full">
          <img className="w-2/4 h-auto" src="../../img/19362653.jpg" alt="Ingeniero de istemas" />
          <div className="border-l-2 border-yellow-600 h-2/4"></div>
          <div className="flex flex-col items-center text-gray-700 text-2xl font-bold mb-2">
            <h1>Portal de mantenimiento</h1>
            <img className="w-96 h-auto" src="../../img/Logo-pagina-web.png" alt="logo unac" />
          </div>
        </main>
      </body>
    </>
  );
}
