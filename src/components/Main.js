import React, {Component} from 'react';
import Profile from "./Profile";
import nba from 'nba';
import {DataViewContainer} from './DataViewContainer'
import {SearchBar} from './SearchBar'
import {DEFAULT_PLAYER_INFO} from '../constants';

export default class Main extends Component {
    state = {
        playerInfo:DEFAULT_PLAYER_INFO

    }
    componentDidMount(){

        this.loadPlayerInfo(this.state.playerInfo.playerName);
    }

    loadPlayerInfo =(playerName)=>{
        const player =nba.findPlayer(playerName);
        nba.stats.playerInfo({PlayerID: player.playerId})
            .then(({commonPlayerInfo,playerHeadlineStats})=>{
                const playerInfo = Object.assign({},commonPlayerInfo[0],playerHeadlineStats[0]);
                this.setState({playerInfo})
            })

    }



    render(){
        return(

            <div className="main">
                <SearchBar onSelect={this.loadPlayerInfo}/>
                <div className="player">

                <Profile playerInfo={this.state.playerInfo}/>
                <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>

        );

    }
}