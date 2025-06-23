import "./style.css";

import React, { useEffect, useState } from "react";
import { Button, Card, Title } from "../../components";
import {
  PokemonListProps,
  getAllPokemons,
  nextPage,
  previousPage,
} from "../../services/pokemon";

import { useNavigate } from "react-router-dom";

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Array<PokemonListProps | undefined>>(
    []
  );
  const [next, setNext] = useState("");
  const [previus, setPrevius] = useState("");
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const handlePokemons = async () => {
      const data = await getAllPokemons();
      if (data) {
        setPokemons(data.results);
        setNext(data.next);
        setPrevius(data.previous);
      }
    };
    handlePokemons();
  }, []);

  const history = useNavigate();

  const handleClick = () => {
    history("/");
  };

  const handleNext = async () => {
    const data = await nextPage(next);
    if (data) {
      setCurrent(next);
      setPokemons(data.results);
      setNext(data.next);
      setPrevius(data.previous);
    }
  };

  const handlePrevius = async () => {
    const data = await previousPage(previus);
    if (data) {
      setCurrent(previus);
      setPokemons(data.results);
      setNext(data.next);
      setPrevius(data.previous);
    }
  };

  return (
    <div className="bodyPokedex">
      <div style={{ margin: "auto" }}>
        <Title
          text="Pokedex"
          customSyles={{
            color: "yellow",
            fontSize: 70,
            marginTop: 30,
            marginBottom: 30,
            fontFamily: "Syne Mono, monospace",
          }}
        />
      </div>
      <div>
        <div className="pokedexNames">
          {pokemons.map((pokemon, index) => (
            <Card
              text={pokemon?.name}
              url={pokemon?.url}
              key={index}
              current={current}
            />
          ))}
        </div>
      </div>
      <div className="pokedexButtons">
        {previus ? (
          <>
            <Button text="Página Anterior" handleEvent={handlePrevius} />
            <Button text="Próxima Página" handleEvent={handleNext} />
          </>
        ) : (
          <>
            <Button text="HOME" handleEvent={handleClick} />
            <Button text="Próxima Página" handleEvent={handleNext} />
          </>
        )}
      </div>
    </div>
  );
};

export default Pokedex;
