const Curso = ({ curso }) => {
  const { contenido, imagen, titulo } = curso;
  return (
    <section className="curso py-44 my-24 bg-no-repeat bg-cover bg-center">
      <style jsx="true">{`
        .curso {
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.65),
              rgb(0 0 0 / 0.7)
            ),
            url(${imagen.data.attributes.url});
        }
      `}</style>
      <div className="container mx-auto md:grid md:grid-cols-2">
        <div className="col-start-2 my-16">
          <h2 className="text-6xl font-black text-center text-amber-500 mb-12">
            {titulo}
          </h2>
          <p className="text-center text-4xl text-white">{contenido}</p>
        </div>
      </div>
    </section>
  );
};

export default Curso;
