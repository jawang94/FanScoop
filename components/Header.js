import React from 'react';
import { Button, Header, Body, Title, Icon, Right, Left } from 'native-base';
import { StyleSheet } from 'react-native';

const MyHeader = props => (
    <Header>
        {/* <Left>
            <Button transparent>
                <Icon name="ios-car" />
            </Button>
        </Left> */}
        <Body>
            <Title>{props.title}</Title>
        </Body>
        {/* <Right /> */}
    </Header>
);

const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#657179'
    }
});

export default MyHeader;
