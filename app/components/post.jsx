import { Link } from "@remix-run/react";
import { formatearFecha } from "../utils/helpers";

const Post = ({ post }) => {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  return (
    <article>
      <img
        className="mx-auto"
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen blog ${titulo}`}
      />
      <div className="p-6">
        <h3 className="font-black text-5xl">{titulo}</h3>
        <p className="mt-8 text-3xl text-amber-500 font-bold">
          {formatearFecha(publishedAt)}
        </p>
        <p className="line-clamp-4 my-8">{contenido}</p>
        <Link
          className="block bg-black text-white text-center p-5 uppercase text-2xl font-bold hover:bg-amber-500 transition duration-300"
          to={`/post/${url}`}
        >
          Leer Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
