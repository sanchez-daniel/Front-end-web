export function Table(){
    return<>
        <div className="p-5 h-screen bg-gray-100">
        <h1 className="text-xl mb-2">Mantenimiento</h1>
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Nombre</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Color</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Estado</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Modelo</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Marca</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Linea</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Categoria Id</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
}