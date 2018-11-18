import React, { Component } from 'react';
import { Item, Picker, Icon, Content, Text } from 'native-base';

class Dropdown extends Component {
    state = { selected: 0 };

    onValueChange = value => {
        this.setState({
            selected: value
        });
    };

    render() {
        return (
            <Content style={{ marginBottom: 10 }}>
                <Text
                    style={{
                        flex: 1,
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}
                >
                    {this.props.text}
                </Text>
                <Item picker>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="ios-arrow-down" />}
                        style={{ flex: 2, width: undefined }}
                        placeholder={this.props.placeholder}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange}
                        textStyle={{ color: '#76d472' }}
                    >
                        {this.props.data.map(data => (
                            <Picker.Item
                                label={data.label}
                                value={data.value}
                                key={data.label}
                            />
                        ))}
                    </Picker>
                </Item>
            </Content>
        );
    }
}

export default Dropdown;
