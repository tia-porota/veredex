import results from "./mockup/cards.json";
import typesJSON from "./mockup/types.json";

import "./index.css";

import { useContext, useState } from "react";
import useSound from "use-sound";
import { FilterContext } from "./context/filterContext";

export function Card({ ind = 1 }) {
  
  const cardId = ind;
  ind--
  const name = results[ind].name;
  const [showImg, setShowImg] = useState(true);
  const [playCry] = useSound(results[ind].cry);
  let hidden = false;
  
  
    function handleShowImg() {
      playCry(results[ind].cry);
    }

  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cardId}.png`;
  let types = results[ind].types;

  const typeNames =
    types.length > 1
      ? [types[0].type.name, types[1].type.name]
      : [types[0].type.name, types[0].type.name];
  //console.log(types[0].type.name)
  
  types =
    types.length > 1
      ? [
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/${types[0].type.url
            .split("/")
            .at(-2)}.png`,
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/${types[1].type.url
            .split("/")
            .at(-2)}.png`,
        ]
      : [
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/${types[0].type.url
            .split("/")
            .at(-2)}.png`,
        ];

  //console.log((types[0].type.url).split("/").at(-2))
  //types = types.length>1 ? `${types[0].type.name} ${types[1].type.name}`: `${types[0].type.name}`

  return (
    <article
      onClick={handleShowImg}
      className={`${hidden ? "hidden" : ""} bg-${
        typeNames[0]
      }-front sm:max-w-56 rounded overflow-hidden shadow-lg flex flex-col items-center hover:scale-105 transition duration-100 hover:ease-in `}
    >
      <strong className="py-1">
        #{" "}
        {cardId.toString().padStart(3, "0") +
          " " +
          name[0].toUpperCase() +
          name.slice(1)}
      </strong>
      <div className="w-full ">
      <img
        alt={name}
        src={imgSrc}
        className={`${showImg ? "flex" : "hidden"}  bg-${
          typeNames[0]
        }-background w-full relative h-full border-y-2  border-blue-100 hover:bg-gradient-to-br hover:from-${
          typeNames[0]
        }-front hover:to-${typeNames[1]}-background`}
      />
      <span className="shine"></span>
      </div>


      <div className="px-6 py-2 w-full justify-around flex">
        <img className=" w-1/2 object-contain pr-1" src={types[0]} />

        {types[1] != null ? (
          <img
            className="w-1/2 pl-1 object-contain"
            src={types[1]}
            alt={types[1]}
          />
        ) : (
          ""
        )}
      </div>
    </article>
  );
}
