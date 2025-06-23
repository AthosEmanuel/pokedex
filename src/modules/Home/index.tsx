import "./style.css";

import { Button, Title } from "./../../components";

import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const history = useNavigate();

  const handleClick = () => {
    history("/pokedex");
  };

  return (
    <div className="bodyHome">
      <Title
        text="Home"
        customSyles={{
          fontSize: 40,
          marginTop: 30,
        }}
      />
      <div className="buttonsCenter">
        <Button
          text="Acessar Pokedex"
          customStyles={{
            height: 50,
            width: 200,
            borderRadius: 13,
            borderColor: "rgba(0,0,0,0.1)",
          }}
          handleEvent={handleClick}
        />
      </div>
    </div>
  );
};

export default Home;
