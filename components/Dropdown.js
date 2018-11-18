import React from 'react';
import { Item, Picker, Icon } from 'native-base';

const Dropdown = props => (
    <Item picker>
        <Picker
            mode="dropdown"
            iosIcon={<Icon name="ios-arrow-down" />}
            style={{ width: undefined }}
            placeholder={props.placeholder}
            placeholderStyle={{ color: '#bfc6ea' }}
            placeholderIconColor="#007aff"
            // selectedValue={this.state.selected2}
            // onValueChange={this.onValueChange2.bind(this)}
        >
            <Picker.Item label="Kings vs. Thunder 11/19" value="key0" />
            <Picker.Item label="Kings vs. Jazz 11/21" value="key1" />
            <Picker.Item label="Kings vs. Warriors 11/24" value="key2" />
            <Picker.Item label="Kings vs. Sixers 11/26" value="key3" />
            <Picker.Item label="Kings vs. Celtics 11/29" value="key4" />
        </Picker>
    </Item>
);

export default Dropdown;
