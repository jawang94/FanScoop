import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Content } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { StyleSheet } from 'react-native';

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
            <Content style={styles.content}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    {text}
                </Text>
                <View>
                    <TouchableOpacity onPress={this.showFromPicker}>
                        <Text style={styles.text}>{from}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={isFromPickerVisible}
                        onConfirm={date =>
                            this.prop.handleFromPicked(date, this.hideToPicker)
                        }
                        onCancel={this.hideFromPicker}
                        mode="time"
                        titleIOS="Your pickup time"
                        textStyle={{ color: '#8b9dc3' }}
                    />
                </View>
                <Text style={styles.text}>To</Text>
                <View>
                    <TouchableOpacity onPress={this.showToPicker}>
                        <Text style={styles.text}>{to}</Text>
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between'
    },
    text: {
        textAlign: 'center',
        color: '#76d472'
    }
});

export default TimePicker;
