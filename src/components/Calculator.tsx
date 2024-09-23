import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Calculator = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [purple, setPurple] = useState(0);
  const [gray, setGray] = useState(0);
  const navigate = useNavigate();

  const calculateScore = () => {
    let score = 0;

    // Lógica para medalhas vermelhas (1 medalha = 4 pontos)
    if (red === 1) {
      score += 4;
    } else if (red === 2) {
      score += 8;
    } else if (red >= 3) {
      score += 13 + (red - 3) * 8;
    }

    // Lógica para medalhas verdes (1 medalha = 3 pontos)
    if (green === 1) {
      score += 3;
    } else if (green === 2) {
      score += 7;
    } else if (green === 3) {
      score += 11;
    } else if (green >= 4) {
      score += 16 + (green - 4) * 7;
    }

    // Lógica para medalhas azuis (1 medalha = 1 ponto)
    if (blue === 1) {
      score += 1;
    } else if (blue === 2) {
      score += 4;
    } else if (blue >= 3) {
      score += 11 + (blue - 3) * 4;
    }

    // Lógica para medalhas roxas (1 medalha = 1 ponto)
    if (purple === 1) {
      score += 1;
    } else if (purple === 2) {
      score += 3;
    } else if (purple >= 3) {
      score += 9 + (purple - 3) * 3;
    }

    // Lógica para medalhas cinzas (1 medalha = 2 pontos)
    score += gray * 2;

    // Navegar para a tela de pontuação com o valor calculado
    navigate("/score", { state: { score } });
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <input
        type="number"
        value={red}
        onChange={(e) => setRed(Math.max(0, parseInt(e.target.value) || 0))}
        className="w-full p-2 rounded-lg border-2 border-red-500"
        placeholder="Medalhas Vermelhas"
      />
      <input
        type="number"
        value={green}
        onChange={(e) => setGreen(Math.max(0, parseInt(e.target.value) || 0))}
        className="w-full p-2 rounded-lg border-2 border-green-500"
        placeholder="Medalhas Verdes"
      />
      <input
        type="number"
        value={blue}
        onChange={(e) => setBlue(Math.max(0, parseInt(e.target.value) || 0))}
        className="w-full p-2 rounded-lg border-2 border-blue-500"
        placeholder="Medalhas Azuis"
      />
      <input
        type="number"
        value={purple}
        onChange={(e) => setPurple(Math.max(0, parseInt(e.target.value) || 0))}
        className="w-full p-2 rounded-lg border-2 border-purple-500"
        placeholder="Medalhas Roxas"
      />
      <input
        type="number"
        value={gray}
        onChange={(e) => setGray(Math.max(0, parseInt(e.target.value) || 0))}
        className="w-full p-2 rounded-lg border-2 border-gray-500"
        placeholder="Medalhas Cinzas"
      />
      <button
        className="bg-indigo-500 text-white rounded-md p-2 w-full"
        onClick={calculateScore}
      >
        Calcular pontuação
      </button>
    </div>
  );
};

export default Calculator;
