import React, { Component } from 'react';
import { Button, Text, Segment, Icon } from 'native-base';

const MySegment = ({ ride, onPress }) => (
    <Segment>
        <Button first active={ride} onPress={onPress}>
            <Icon name="ios-car" />
            <Text>Ride</Text>
        </Button>
        <Button last active={!ride} onPress={onPress}>
            <Text>Drive</Text>
            <Icon name="ios-car" />
        </Button>
    </Segment>
);

export default MySegment;
