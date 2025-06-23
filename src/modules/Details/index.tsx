import "./style.css";

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../../components";
import { getPokemonDetails } from "../../services/pokemon";

const Details: React.FC = () => {
  const history = useNavigate();
  const location = useLocation();
  const [pokemon, setPokemon] = useState<any>([]);

  const handleBack = () => {
    history("/");
  };

  useEffect(() => {
    const handlePokemons = async () => {
      if (location.state) {
        const data = await getPokemonDetails(location.state.detail);
        if (data) {
          setPokemon(data);
        }
      }
    };
    handlePokemons();
  }, [location]);

  return (
    <div className="detailsBody">
      <div className="detailsCard">
        {pokemon ? (
          <>
            <h2 className="pokemonName">{pokemon.name}</h2>

            {pokemon.abilities && (
              <div className="pokemonAbilities">
                <strong>Habilidades:</strong>
                <ul>
                  {pokemon.abilities.map((item: any, index: number) => (
                    <li key={index}>{item.ability.name}</li>
                  ))}
                </ul>
              </div>
            )}

            <img
              className="pokemonImage"
              src={pokemon.sprites?.front_default || ""}
              alt={pokemon.name}
            />
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </div>

      <Button
        text="Home"
        handleEvent={handleBack}
        customStyles={{
          marginTop: 20,
          marginBottom: 20,
        }}
      />
    </div>
  );
};

export default Details;
