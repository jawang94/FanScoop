import React from 'react';
import { Button, Text, Segment } from 'native-base';

const MySegment = () => (
    <Segment>
        <Button first active>
            <Text>Ride</Text>
        </Button>
        <Button last>
            <Text>Drive</Text>
        </Button>
    </Segment>
);

export default MySegment;
