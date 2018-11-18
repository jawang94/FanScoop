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
            <Content>
                <Text>{this.props.text}</Text>
                <Item picker>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="ios-arrow-down" />}
                        style={{ width: undefined }}
                        placeholder={this.props.placeholder}
                        placeholderStyle={{ color: '#bfc6ea' }}
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
