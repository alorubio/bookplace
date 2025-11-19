export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* HERO */}
      <section className="w-full py-24 px-6 bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Encuentra el lugar perfecto para tu evento</h1>
        <p className="text-lg opacity-90 mb-6">
          Salones, proveedores y todo lo que necesitas para tu celebración
        </p>

        <div className="max-w-xl mx-auto mt-6">
          <input
            type="text"
            placeholder="Buscar salones, proveedores..."
            className="w-full px-4 py-3 rounded-xl text-gray-900"
          />
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Categorías</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Salones",
            "Decoración",
            "Música",
            "Banquetes",
            "Iluminación",
            "Fotografía",
            "Invitaciones",
            "Pasteles"
          ].map((cat) => (
            <div
              key={cat}
              className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md text-center text-lg font-semibold"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* SALONES DESTACADOS */}
      <section className="px-6 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Salones Destacados</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Salón Elegante {i}</h3>
                <p className="text-gray-600 mb-3">
                  Hermoso salón para eventos sociales, con capacidad para 300 personas.
                </p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-600">
        <p>© {new Date().getFullYear()} BookPlace — Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

