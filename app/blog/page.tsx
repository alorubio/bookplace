export default function BlogPage() {
  const posts = [
    {
      titulo: "Tendencias en decoración para 2025",
      imagen: "/blog1.jpg",
    },
    {
      titulo: "5 tips para organizar un baby shower perfecto",
      imagen: "/blog2.jpg",
    },
    {
      titulo: "Cómo elegir el mejor salón para tu fiesta",
      imagen: "/blog3.jpg",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-10 text-gray-900">Blog</h1>

      <div className="space-y-10">
        {posts.map((post, index) => (
          <div key={index} className="flex gap-6 items-center">
            <img
              src={post.imagen}
              alt={post.titulo}
              className="w-40 h-28 object-cover rounded-xl"
            />
            <h2 className="text-2xl font-medium text-gray-900">{post.titulo}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
