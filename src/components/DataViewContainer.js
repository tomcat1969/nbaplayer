import React from "react";
import {ShotChart} from './ShotChart'
import {
    Radio,Switch
} from 'antd';
import {CountSlider} from './CountSlider';
import _ from "lodash";
const RadioGroup = Radio.Group;

export  class DataViewContainer extends React.Component {
    state = {
        minCount:2,
        chartType:'hexbin',
        displayTooltip:true,
    }
    onChange=(minCount)=>{
        this.setState({minCount});
    }
    onChartTypeChange =(e)=>{
        const chartType = e.target.value;
        this.setState({chartType});
    }
    onDisplayTooltipChange=(displayTooltip)=>{
        this.setState({displayTooltip});
    }
    onCountSliderChange = (minCount)=>{
        this.setState({minCount});

    }
    render(){
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    displayTooltip={true}
                    chartType={this.state.chartType}
                />

                {this.state.chartType==='hexbin' ?

                    (<CountSlider onChange={_.debounce(this.onCountSliderChange,500)}/>):null}
                <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                    <Radio value="hexbin">Hexbin</Radio>
                    <Radio value="scatter">Scatter</Radio>

                </RadioGroup>
                <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked onChange={this.onDisplayTooltipChange} />
            </div>
        );
    }
}