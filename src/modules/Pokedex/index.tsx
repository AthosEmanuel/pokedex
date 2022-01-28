import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Title, Card } from "../../components";
import "./style.css";
import {
  getAllPokemons,
  getImage,
  nextPage,
  PokemonListProps,
  previousPage,
} from "../../services/pokemon";

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Array<PokemonListProps | undefined>>(
    []
  );
  const [next, setNext] = useState("");
  const [previus, setPrevius] = useState("");

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

  

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const handleNext = async () => {
    const data = await nextPage(next);
    if (data) {
      setPokemons(data.results);
      setNext(data.next);
      setPrevius(data.previous);
    }
  };

  const handlePrevius = async () => {
    const data = await previousPage(previus);
    if (data) {
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
            fontSize: 40,
            marginTop: 30,
            marginBottom: 30,
          }}
        />
      </div>
      <div className="pokedexCenter">
        <div className="pokedexNames">
          {pokemons.map((pokemon, index) => (
            <Card text={pokemon?.name} url={pokemon?.url} />
          ))}
        </div>
      </div>
      <div className="buttonsCenter">
        <div className="pokedexButtons">
          {previus ? (
            <>
              <Button
                text="Página Anterior "
                customStyles={{
                  height: 30,
                  width: 150,
                  borderRadius: 13,
                  borderColor: "rgba(0,0,0,0.1)",
                  marginTop: 0,
                  marginRight: 20,
                }}
                handleEvent={handlePrevius}
              />
              <Button
                text="Próxima Página"
                customStyles={{
                  height: 30,
                  width: 150,
                  borderRadius: 13,
                  borderColor: "rgba(0,0,0,0.1)",
                  marginTop: 0,
                }}
                handleEvent={handleNext}
              />
            </>
          ) : (
            <Button
              text="Próxima Página"
              customStyles={{
                height: 30,
                width: 150,
                borderRadius: 13,
                borderColor: "rgba(0,0,0,0.1)",
                marginTop: 0,
              }}
              handleEvent={handleNext}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
