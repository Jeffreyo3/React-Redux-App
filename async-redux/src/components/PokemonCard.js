import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// import { addPokemon } from '../actions';

const PokemonCard = (props) => {
    // const handleAdd = () => {
    //     props.addPokemon(props.results);
    // }
    const [image, setImage] = React.useState('');

    React.useEffect( async () => {
        console.log(props.pokemon.url);
        // axios
        //     .get(`${props.pokemon.url}`)
        //     .then(results => {
        //         console.log(results);
        //     })
        //     .catch(err => console.log(err + ": useEffect err"));
    })

    return (
        <div className="pokemonCard">
            {/* <button className="add-button">
                {/* onClick={handleAdd}> */}
                    {/* Add
            </button> */}
            <div className="pokemonCardName">
            {props.pokemon.name}
            </div>
            {/* {props.pokemon.url} */}
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(null, {})(PokemonCard);