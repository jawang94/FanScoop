import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Content } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

class TimePicker extends Component {
    state = {
        isFromPickerVisible: false,
        isToPickerVisible: false
    };

    showFromPicker = () => this.setState({ isFromPickerVisible: true });

    hideFromPicker = () => this.setState({ isFromPickerVisible: false });

    showToPicker = () => this.setState({ isToPickerVisible: true });

    hideToPicker = () => this.setState({ isToPickerVisible: false });

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
                        onConfirm={() => this.prop.handleFromPicked()}
                        onCancel={this.hideFromPicker}
                        mode="times"
                        titleIOS="Your pickup time"
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={this.showToPicker}>
                        <Text>{to}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={isToPickerVisible}
                        onConfirm={this.handleToPicked}
                        onCancel={this.hideToPicker}
                        mode="times"
                        titleIOS="Your pickup time"
                    />
                </View>
            </Content>
        );
    }
}

export default TimePicker;
