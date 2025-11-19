export default function SalonesPage() {
  const salones = [
    {
      nombre: "Salon Crystal",
      ubicacion: "Chihuahua, Chih.",
      capacidad: "200 personas",
      imagen: "/salon1.jpg",
    },
    {
      nombre: "Eventos Aurora",
      ubicacion: "Chihuahua, Chih.",
      capacidad: "150 personas",
      imagen: "/salon2.jpg",
    },
    {
      nombre: "Villa Toscana",
      ubicacion: "Chihuahua, Chih.",
      capacidad: "300 personas",
      imagen: "/salon3.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-10 text-gray-900">
        Salones para tus eventos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {salones.map((salon, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img
              src={salon.imagen}
              alt={salon.nombre}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-medium text-gray-900">
                {salon.nombre}
              </h2>
              <p className="text-gray-500">{salon.ubicacion}</p>
              <p className="text-gray-600">{salon.capacidad}</p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
