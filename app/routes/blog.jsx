import { useLoaderData } from "@remix-run/react";
import Post from "~/components/post";

export function meta() {
  return {
    title: "GuitarLA - Blogs",
  };
}

export async function loader() {
  const url = `${process.env.API_URL}/posts?populate=imagen`;
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return resultado.data;
}

const Blog = () => {
  const posts = useLoaderData();

  return (
    <main className="container mx-auto">
      <h2 className="text-6xl font-black text-center text-amber-500 my-20">
        Blog
      </h2>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </main>
  );
};

export default Blog;
