import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Content } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

class TimePicker extends Component {
    state = {
        isFromPickerVisible: false,
        isToPickerVisible: false,
        from: '',
        to: ''
    };

    showFromPicker = () => this.setState({ isFromPickerVisible: true });

    hideFromPicker = () => this.setState({ isFromPickerVisible: false });

    handleFromPicked = date => {
        // console.log('A date has been picked: ', date);
        this.setState({ from: date.toString() });
        this.hideFromPicker();
    };

    showToPicker = () => this.setState({ isToPickerVisible: true });

    hideToPicker = () => this.setState({ isToPickerVisible: false });

    handleToPicked = date => {
        // console.log('A date has been picked: ', date);
        this.setState({ to: date.toString() });
        this.hideToPicker();
    };

    render() {
        const { from, to, isFromPickerVisible, isToPickerVisible } = this.state;
        const { text } = this.props;
        return (
            <Content>
                <View>
                    <TouchableOpacity onPress={this.showFromPicker}>
                        <Text>{text}</Text>
                        <Text>{from}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={isFromPickerVisible}
                        onConfirm={this.handleFromPicked}
                        onCancel={this.hideFromPicker}
                        mode="times"
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={this.showToPicker}>
                        <Text>{text}</Text>
                        <Text>{to}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={isToPickerVisible}
                        onConfirm={this.handleToPicked}
                        onCancel={this.hideDateTimePicker}
                        mode="times"
                    />
                </View>
            </Content>
        );
    }
}

export default TimePicker;
