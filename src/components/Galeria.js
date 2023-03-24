import React from "react";

import "../assets/CSS/style.css";
import { useContext } from "react";
import Context from "../Context";
import Heart from "./Heart";

export default function Home() {

  const { fotos, setFotos } = useContext(Context);

  const setFavorito = (id) => {
      const fotoIndex = fotos.findIndex((f)  => f.id === id);
      fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
      setFotos([...fotos]);
  };

  return (
    <div className="galeria grid-columns-4 p-2">
      {fotos.map((foto, i) => (
    <div
        onClick={() => setFavorito(foto.id)}
        className="foto"
        style={{ backgroundImage: `url(${foto.src})`}}
        key={i}    
    >
      <Heart filled={foto.favorito}/>
      <p>{foto.desc}</p>
    </div>
)) }
    </div>
  );
}
