import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { shuffle } from "./shufflecards";


export default function GamePlay({setScore, setBestScore, score, bestScore}){
    const[cards, setCards] = useState([]);
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=15").then((res) => {
            const picAndNames = res.data.results.map((pokemon) => {
                pokemon.pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.split("/")[6]}.svg`;
                delete pokemon.url;
                return pokemon;
            });
            setCards(picAndNames);
        });
    }, []);
    console.log(cards);
    const shuffledCards = shuffle([...cards]);
    const handleOnClick = (isClicked, setStatus)=>{
        if (isClicked){
            setScore(0);
            setStatus(false);
        }
        else{
            setScore((prevScore)=>prevScore+1);
            setStatus(true);
        }
        bestScore<=score && setBestScore(()=>score+1);
    }
    return(
        <div className='cardholder'>
      <div className='eachcard'>
        {shuffledCards.map((card) => {
          return (
            <Card
              key={card.name}
              img={card.pic}
              name={card.name}
              handleOnClick={handleOnClick}
            />
          );
        })}
      </div>
    </div>
    )
}