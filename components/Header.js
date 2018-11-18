import React from 'react';
import { Button, Header, Body, Title, Icon, Right, Left } from 'native-base';

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

export default MyHeader;
