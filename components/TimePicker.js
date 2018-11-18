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
        const { isFromPickerVisible, isToPickerVisible } = this.state;
        const { text, from, to } = this.props;
        return (
            <Content>
                <Text>{text}</Text>
                <View>
                    <TouchableOpacity onPress={this.showFromPicker}>
                        <Text>{from}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={isFromPickerVisible}
                        onConfirm={date =>
                            this.prop.handleFromPicked(date, this.hideToPicker)
                        }
                        onCancel={this.hideFromPicker}
                        mode="time"
                        titleIOS="Your pickup time"
                    />
                </View>
                <Text>To</Text>
                <View>
                    <TouchableOpacity onPress={this.showToPicker}>
                        <Text>{to}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={isToPickerVisible}
                        onConfirm={date =>
                            this.prop.handleToPicked(date, this.hideToPicker)
                        }
                        onCancel={this.hideToPicker}
                        mode="time"
                        titleIOS="Your pickup time"
                    />
                </View>
            </Content>
        );
    }
}

export default TimePicker;
