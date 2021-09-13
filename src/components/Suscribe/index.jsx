import "./styles.scss";

const Suscribe = () => {
  return (
    <div className="suscribe">
      <div className="suscribe-title">¡Suscribete!</div>
      <div className="suscribe-field">
        <input
          type="text"
          placeholder="Escribe tu correo"
          autoComplete="off"
        ></input>
        <button>Suscribirse</button>
      </div>
      <div className="suscribe-message">
        Déjanos tu e-mail y recibe las mejores ofertas
      </div>
    </div>
  );
};

export default Suscribe;
