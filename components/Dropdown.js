import React, { Component } from 'react';
import { Item, Picker, Icon, Content, Text } from 'native-base';

class Dropdown extends Component {
    state = { selected: 'key1' };

    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <Content style={{ marginBottom: 10 }}>
                <Text style={{ flex: 1, color: 'white', fontWeight: 'bold' }}>
                    {this.props.text}
                </Text>
                <Item picker>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="ios-arrow-down" />}
                        style={{ flex: 2, width: undefined }}
                        placeholder={this.props.placeholder}
                        placeholderStyle={{ color: 'white' }}
                        placeholderIconColor="#007aff"
                        // selectedValue={this.state.selected2}
                        // onValueChange={this.onValueChange2.bind(this)}
                    >
                        {this.props.data.map(data => (
                            <Picker.Item
                                label={data.label}
                                value={data.value}
                            />
                        ))}
                    </Picker>
                </Item>
            </Content>
        );
    }
}

export default Dropdown;
