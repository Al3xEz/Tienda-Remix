import { useLoaderData } from "@remix-run/react";
import Guitarra from "~/components/guitarra";
import Post from "~/components/post";
import Curso from "~/components/curso";

//Obtener Guitarras-------------------
export async function getGuitarras() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const resultado = await respuesta.json();
  return resultado;
}

//Obtener Blogs---------------------
export async function getPosts() {
  const respuesta = await fetch(`${process.env.API_URL}/posts`);
  const resultado = await respuesta.json();
  return resultado;
}

//Obtener Curso---------------------
export async function getCurso() {
  const respuesta = await fetch(`${process.env.API_URL}/curso`);
  const resultado = await respuesta.json();
  return resultado[0];
}

//Loader----------------------------
export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);
  return {
    guitarras: guitarras,
    posts: posts,
    curso: curso,
  };
}

const Index = () => {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <div>
      {/* ----------------------Guitarras---------------------- */}
      <div className="container mx-auto">
        <h2 className="text-6xl font-black text-center text-amber-500 my-20">
          Nuesta Coleccion
        </h2>
        {guitarras?.length && (
          <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {guitarras.map(
              (guitarra, idx) =>
                idx < 6 && <Guitarra key={guitarra?._id} guitarra={guitarra} />
            )}
          </div>
        )}
      </div>
      {/* ----------------------Curso---------------------- */}
      <Curso curso={curso} />
      {/* ----------------------Blogs---------------------- */}
      <div className="container mx-auto mb-20">
        <h2 className="text-6xl font-black text-center text-amber-500 my-20">
          Blog
        </h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(
            (post, idx) => idx < 3 && <Post key={post?._id} post={post} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
