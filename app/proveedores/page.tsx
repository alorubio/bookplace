export default function ProveedoresPage() {
  const proveedores = [
    {
      nombre: "Mesa de Dulces SweetArt",
      categoria: "Dulces y Postres",
      imagen: "/dulces1.jpg",
    },
    {
      nombre: "Globos & Deco",
      categoria: "Decoración",
      imagen: "/decor1.jpg",
    },
    {
      nombre: "DJ Premium",
      categoria: "Música y Audio",
      imagen: "/dj1.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-10 text-gray-900">Proveedores</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {proveedores.map((prov, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img
              src={prov.imagen}
              alt={prov.nombre}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-medium text-gray-900">
                {prov.nombre}
              </h2>
              <p className="text-gray-600">{prov.categoria}</p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                Ver proveedor
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
