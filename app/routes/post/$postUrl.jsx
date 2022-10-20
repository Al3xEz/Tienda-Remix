import { useLoaderData } from "@remix-run/react";
import { formatearFecha } from "../../utils/helpers";

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getpost(postUrl);

  if (post.data.length === 0) {
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
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
  };
}

export async function getpost(url) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const resultado = await respuesta.json();

  return resultado;
}

const Post = () => {
  const post = useLoaderData();

  const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes;

  return (
    <article className="container mx-auto my-10 max-w-7xl">
      <div className="mx-6">
        <img src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} />
        <div className="p-6">
          <h3 className="font-black text-5xl">{titulo}</h3>
          <p className="mt-8 text-3xl text-amber-500 font-bold">
            {formatearFecha(publishedAt)}
          </p>
          <p className="my-8 whitespace-pre-wrap">{contenido}</p>
        </div>
      </div>
    </article>
  );
};

export default Post;
