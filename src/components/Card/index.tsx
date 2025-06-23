import "./style.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import { getPokemonDetails } from "../../services/pokemon";

interface CardProps {
  text?: string;
  url?: string;
  current?: string;
}

const Card: React.FC<CardProps> = ({ text, url, current }) => {
  const navigate = useNavigate();

  const handleDetails = async () => {
    if (url) {
      await getPokemonDetails(url);
      navigate("/details", { state: { detail: url, current: current } });
    }
  };

  return (
    <div className="cardBody" onClick={handleDetails}>
      {text}
    </div>
  );
};

export default Card;
