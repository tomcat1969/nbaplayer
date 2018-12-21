import React from 'react';
import {Col, InputNumber, Row, Slider} from 'antd'


export class CountSlider extends React.Component {
    state = {
        value:2,
    }
    onCountSliderChange = (value)=>{
        const cleanValue = Number(value) ? value : this.state.value;
        this.setState({'value':cleanValue})
        this.props.onChange(cleanValue);
    }
    render(){
        return(
            <Row>
                <Col span={12} offset={4}>
                    <Slider
                        min={2}
                        max={20}
                        onChange={this.onCountSliderChange}
                        value={this.state.value}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={2}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={this.state.value}
                        onChange={this.onCountSliderChange}
                    />
                </Col>
            </Row>
        );
    }
}