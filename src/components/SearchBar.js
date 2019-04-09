import React from 'react';
import {AutoComplete,Icon,Input} from 'antd'
import nba from 'nba';
import {PROFILE_PIC_URL_PREFIX} from '../constants'

const Option = AutoComplete.Option;
export class SearchBar extends React.Component {
    state={
        dataSource:[]

    }

    onSelect =(value)=>{
        console.log('onSelect :' + value);
        this.props.onSelect(value);
    }

    onSearch =(value)=>{
        console.log('onSearch: ' + value);

        const dataSource = nba.searchPlayers(value).map(({playerId,fullName})=>
            <Option key={playerId} value={fullName}>
                <img
                    className="player-option-image"
                    src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                    alt="Profile"
                />
                <span className="player-option-label"> {`${fullName}`}</span>
            </Option>
        );
        this.setState({dataSource});
    }
    render(){
        return(
            <AutoComplete
                className="search-bar"
                size="large"
                dataSource={this.state.dataSource}
                onSelect={this.onSelect}
                onSearch={this.onSearch}
                placeholder="Search NBA Player"
                optionLabelProp="value"
            >
            <Input suffix={<Icon type="search"  />}/>
            </AutoComplete>
        );

    }

}