import "./styles.scss";

const Cover = () => {
  return (
    <div className="cover animate__animated animate__fadeIn">
      <div className="cover-left-text animate__animated animate__fadeInLeft">
        Alimento
        <br />
        para
        <br />
        Mascotas
      </div>
      <div className="cover-image"></div>
      <div className="cover-right-text animate__animated animate__fadeInRight">
        Perros
        <br />
        Gatos
        <br />
        Cachorros
      </div>
    </div>
  );
};

export default Cover;
