export default function Botao ({ onClick, type, texto }) {
  return (
    <div className="flex justify-end mr-12 py-1">
        <button
          type={type}
          className="padrao-button"
          onClick={onClick}
        >
          {texto}
        </button>
    </div>
  );
};


