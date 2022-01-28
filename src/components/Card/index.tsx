import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.css";
import { getPokemonDetails, PokemonListProps } from "../../services/pokemon";

interface CardProps {
  text: string | undefined;
  url: string | undefined;
  handleEvent?: () => void;
}

const Card: React.FC<CardProps> = ({ text, url }) => {
  const history = useHistory();
  const [pokemon, setPokemon] = useState<Array<PokemonListProps | undefined>>(
    []
  );

  const handlePokemonsDetails = async () => {
    if (url) {
      const data = await getPokemonDetails(url);
      if (data) {
        setPokemon(data);
      }
    }
  };

  const handleDetails = () => {
    handlePokemonsDetails();
    history.push({
      pathname: "/details",
      state: { detail: url },
    });
  };

  return (
    <>
      <div className="cardBody" onClick={handleDetails}>
        {text}
      </div>
    </>
  );
};

export default Card;
