const Alerta = ({ alert }) => {
  return (
    <div
      className={`${
        alert.error ? "text-red-700 bg-red-100" : "text-green-700 bg-green-100"
      } p-4 mb-4 text-3xl font-bold rounded-lg text-center`}
    >
      {alert.msg}
    </div>
  );
};

export default Alerta;
