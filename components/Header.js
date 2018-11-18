import React from 'react';
import { Button, Header, Body, Title, Icon, Right, Left } from 'native-base';
import { StyleSheet } from 'react-native';

const MyHeader = props => (
    <Header style={styles.Header}>
        {/* <Left>
            <Button transparent>
                <Icon name="ios-car" />
            </Button>
        </Left> */}
        <Body>
            <Title style={styles.Title}>{props.title}</Title>
        </Body>
        {/* <Right /> */}
    </Header>
);

const styles = StyleSheet.create({
    Header: {
        // backgroundColor: '#dfe3ee'
    },
    Title: {
        fontSize: 25,
        color: '#54327E'
    }
});

export default MyHeader;
