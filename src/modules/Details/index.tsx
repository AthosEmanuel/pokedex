import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "../../components";
import { getPokemonDetails, PokemonDetailsProps } from "../../services/pokemon";
import "./style.css";

const Details: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [pokemon, setPokemon] = useState<any>([]);
  const handleBack = () => {
    history.push("/pokedex");
  };

  useEffect(() => {
    const handlePokemons = async () => {
      if (location.state) {
        const data = await getPokemonDetails(location.state);

        if (data) {
          setPokemon(data);
        }
      }
    };
    handlePokemons();
  }, [location]);

    console.log(pokemon);
  return (
    <>
      <div className="detailsBody">
        <div className="detailsCard">
          <label>Name: {pokemon.name}</label>
          <label>Peso: {pokemon.weight}</label>
        
        </div>

        <Button
          text="Voltar"
          handleEvent={handleBack}
          customStyles={{
            height: 30,
            width: 150,
            borderRadius: 13,
            borderColor: "rgba(0,0,0,0.1)",
            marginTop: 10,
          }}
        />
      </div>
    </>
  );
};

export default Details;
