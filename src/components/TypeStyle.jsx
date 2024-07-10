import styled from "styled-components";

const PokemonType = ({ type }) => {
    const TypePokemon = TypeStyle[type] || styled.p``;
    return <TypePokemon>{type}</TypePokemon>;
};

const TypeStyle = {
    normal: styled.p`
        background-color: beige;
        color: black;
        text-align: center;
        border-radius: 20px;
        padding :0 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1)
        margin-right: 10px;
        margin-bottom: 10px;`,

    fire:styled.p`
        background-color: orange;
        color: white;
        padding :0 20px;
        text-align: center;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1)
        margin-right: 10px;
        margin-bottom: 10px;`,
    
    grass:styled.p`
        background-color: green;
        color: white;
        text-align: center;
        padding :0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1)
        margin-right: 10px;
        margin-bottom: 10px; `,
    
    water: styled.p`
        background-color: blue;
        color: white;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    ice: styled.p`
        background-color: lightblue;
        color: black;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    electric: styled.p`
        background-color: gold;
        color: black;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    fighting: styled.p`
        background-color: darkred;
        color: white;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    flying: styled.p`
        background-color: skyblue;
        color: black;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    bug: styled.p`
        background-color: yellowgreen;
        color: white;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    ghost: styled.p`
        background-color: purple;
        color: white;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    rock: styled.p`
        background-color: sienna;
        color: white;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    ground: styled.p`
        background-color: burlywood;
        color: black;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    steel: styled.p`
        background-color: silver;
        color: black;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    dark: styled.p`
        background-color: darkgray;
        color: white;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    psychic: styled.p`
        background-color: palevioletred;
        color: white;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    fairy: styled.p`
        background-color: pink;
        color: black;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    dragon: styled.p`
        background-color: teal;
        color: white;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    poison: styled.p`
        background-color: darkviolet;
        color: white;
        text-align: center;
        padding: 0 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
        margin-bottom: 10px; 
    `,
    }



export default PokemonType;