import { useLoaderData } from "@remix-run/react";
import { formatearFecha } from "../../utils/helpers";

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getpost(postUrl);

  if (!post) {
    throw new Response("", {
      status: 404,
      statusText: "Post no encontrado",
    });
  }
  return post;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: `GuitarLA - 404`,
    };
  }
  return {
    title: `GuitarLA`,
  };
}

export async function getpost(url) {
  const respuesta = await fetch(`${process.env.API_URL}/posts/${url}`);
  const resultado = await respuesta.json();

  return resultado;
}

const Post = () => {
  const post = useLoaderData();

  const { titulo, contenido, imagen } = post;

  return (
    <article className="container mx-auto my-10 max-w-7xl">
      <div className="mx-6">
        <img src={imagen} alt={`Imagen blog ${titulo}`} />
        <div className="p-6">
          <h3 className="font-black text-5xl">{titulo}</h3>
          <p className="mt-8 text-3xl text-amber-500 font-bold">
            Sabado 5 de noviembre del 2022
          </p>
          <p className="my-8 whitespace-pre-wrap">{contenido}</p>
        </div>
      </div>
    </article>
  );
};

export default Post;
