import React from "react";
import { Title, Button } from "./../../components";
import "./style.css";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/pokedex");
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
