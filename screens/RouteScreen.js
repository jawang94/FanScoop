import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    H1,
    List,
    ListItem,
    Left,
    Thumbnail,
    Body,
    Right,
    Button
} from 'native-base';
import MyHeader from '../components/Header';

class RouteScreen extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        response: {
            driver: {
                user_name: 'ryan efendy',
                user_id: '67890',
                lat: '30',
                lon: '40',
                from_time: '15:00',
                to_time: '17:00',
                rendezvous: 'gate 1',
                seat_available: '3'
            },
            riders: [
                {
                    user_name: 'first rider',
                    user_id: '67890',
                    lat: '30',
                    lon: '40',
                    from_time: '15:00',
                    to_time: '17:00',
                    rendezvous: 'gate 1',
                    seat_available: '3'
                },
                {
                    user_name: 'second rider',
                    user_id: '67890',
                    lat: '30',
                    lon: '40',
                    from_time: '15:00',
                    to_time: '17:00',
                    rendezvous: 'gate 1',
                    seat_available: '3'
                },
                {
                    user_name: 'third rider',
                    user_id: '67890',
                    lat: '30',
                    lon: '40',
                    from_time: '15:00',
                    to_time: '17:00',
                    rendezvous: 'gate 1',
                    seat_available: '3'
                }
            ]
        }
    };

    render() {
        return (
            <Container>
                <MyHeader title="Welcome Jason" />
                <Content>
                    <H1>Your Route</H1>
                    <List>
                        {this.state.response.riders.map(rider => (
                            <ListItem thumbnail key={rider.user_id}>
                                <Left>
                                    <Thumbnail
                                        square
                                        source={{
                                            uri:
                                                'https://placeimg.com/240/240/people'
                                        }}
                                    />
                                </Left>
                                <Body>
                                    <Text>{rider.user_name}</Text>
                                    <Text>
                                        {rider.from_time} to {rider.to_time}
                                    </Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = {
    Content: {
        flex: 1,
        backgroundColor: '#383c92',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10
    }
};

export default RouteScreen;
