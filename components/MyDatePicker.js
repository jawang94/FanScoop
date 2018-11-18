import React, { Component } from 'react';
import { Content, Text, DatePicker } from 'native-base';

class MyDatePicker extends Component {
    state = { chosenDate: new Date() };

    setDate = newDate => {
        this.setState({ chosenDate: newDate });
    };

    render() {
        return (
            <Content style={{ marginTop: 10 }}>
                <Text>{this.props.text}</Text>
                <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale="en"
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType="fade"
                    androidMode="default"
                    placeHolderText="Select date"
                    textStyle={{ color: 'white' }}
                    placeHolderTextStyle={{ color: '#d3d3d3' }}
                    onDateChange={this.setDate}
                />
                <Text>
                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                </Text>
            </Content>
        );
    }
}

export default MyDatePicker;
