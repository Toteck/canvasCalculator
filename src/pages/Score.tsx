import { useLocation, useNavigate } from "react-router-dom";

const Score = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Usar o hook para pegar o estado
  const { score } = location.state || { score: 0 }; // Verificar se o estado existe, caso contrário usar 0

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">Pontuação: {score}</h1>
      <button
        className="bg-yellow-500 text-white rounded-md p-2"
        onClick={() => navigate("/")}
      >
        Voltar para calculadora
      </button>
    </div>
  );
};

export default Score;
