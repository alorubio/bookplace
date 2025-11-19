export default function PaquetesPage() {
  const paquetes = [
    {
      nombre: "Paquete Infantil",
      precio: "$3,500",
      incluye: ["Decoración básica", "Mesa de dulces", "Piñata"],
    },
    {
      nombre: "Paquete Baby Shower",
      precio: "$4,800",
      incluye: ["Decoración temática", "Mesa de postres", "Back de fotos"],
    },
    {
      nombre: "Paquete Premium",
      precio: "$7,900",
      incluye: ["Salón + Decoración", "Música + Iluminación", "Postres"],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-10 text-gray-900">
        Paquetes para tu evento
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {paquetes.map((paq, index) => (
          <div
            key={index}
            className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-2xl font-medium text-gray-900">{paq.nombre}</h2>
            <p className="text-3xl font-bold mt-3">{paq.precio}</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {paq.incluye.map((i, idx) => (
                <li key={idx}>• {i}</li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
