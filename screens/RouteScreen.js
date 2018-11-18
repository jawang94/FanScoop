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
    Button,
    Card,
    CardItem
} from 'native-base';
import MyHeader from '../components/Header';
import MyMap from '../components/MyMap';

class RouteScreen extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        ride: true,
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
                    user_id: '67891',
                    lat: '30',
                    lon: '40',
                    from_time: '15:00',
                    to_time: '17:00',
                    rendezvous: 'gate 1',
                    seat_available: '3'
                },
                {
                    user_name: 'second rider',
                    user_id: '67892',
                    lat: '30',
                    lon: '40',
                    from_time: '15:00',
                    to_time: '17:00',
                    rendezvous: 'gate 1',
                    seat_available: '3'
                },
                {
                    user_name: 'third rider',
                    user_id: '67893',
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
                {this.state.ride ? (
                    <Content style={styles.Content}>
                        <H1 style={styles.Title}>Route</H1>
                        <ListItem itemDivider>
                            <Text>Your Driver</Text>
                        </ListItem>
                        <Card>
                            <CardItem>
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
                                    <Text>
                                        {this.state.response.driver.user_name}
                                    </Text>
                                    <Text>
                                        {this.state.response.driver.from_time}{' '}
                                        to {this.state.response.driver.to_time}
                                    </Text>
                                    <Text>Toyota Carolla</Text>
                                    <Text>PWI12897</Text>
                                    <Button>
                                        <Text>Contact</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>
                        <MyMap />
                    </Content>
                ) : (
                    <Content style={styles.Content}>
                        <H1 style={styles.Title}>Your Route</H1>
                        <List style={styles.List}>
                            <ListItem
                                itemDivider
                                style={{ backgroundColor: 'none' }}
                            >
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        textDecorationLine: 'underline'
                                    }}
                                >
                                    Check out your squad:
                                </Text>
                            </ListItem>
                            {this.state.response.riders.map(rider => (
                                <ListItem thumbnail key={rider.user_id}>
                                    <Left>
                                        <Thumbnail
                                            square
                                            source={{
                                                uri:
                                                    'https://placeimg.com/240/240/people'
                                            }}
                                            style={{
                                                borderRadius: 10,
                                                borderWidth: 1,
                                                borderColor: 'white'
                                            }}
                                        />
                                    </Left>
                                    <Body>
                                        <Text style={styles.BodyText}>
                                            {rider.user_name}
                                        </Text>
                                        <Text style={styles.BodyText}>
                                            {rider.from_time} to {rider.to_time}
                                        </Text>
                                        <Text style={styles.BodyText}>
                                            1.2mi away
                                        </Text>
                                    </Body>
                                    <Right>
                                        <Button transparent>
                                            <Text style={styles.BodyText}>
                                                View
                                            </Text>
                                        </Button>
                                    </Right>
                                </ListItem>
                            ))}
                        </List>
                    </Content>
                )}
            </Container>
        );
    }
}

const styles = {
    Content: {
        flex: 1,
        backgroundColor: '#54327E',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        alignContent: 'flex-start'
    },
    Title: {
        flex: 1,
        marginLeft: 15,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    BodyText: {
        color: 'white',
        fontWeight: 'bold'
    }
};

export default RouteScreen;
