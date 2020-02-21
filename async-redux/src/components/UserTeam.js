import React from 'react';
import { connect } from 'react-redux';

import PokemonTeamCard from './PokemonTeamCard';

const UserTeam = props => {
    return (
        <div className="userTeamDiv">
            <h2>TEAM</h2>

            {props.userTeam.length === 0 ?
                <div>
                    <p>Your team is empty... <br /> Catch a pokemon!</p>
                </div> :
                <div className="userTeamList">
                    {props.userTeam.map(pokemon => {
                        return <PokemonTeamCard key={pokemon.team_id} pokemon={pokemon} />
                    })}
                </div>}


        </div>
    );
};

const mapStateToProps = state => {
    return {
        userTeam: state.userTeam
    };
};

export default connect(mapStateToProps, {})(UserTeam);