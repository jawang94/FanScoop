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
    CardItem,
    Icon
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
                user_id: '2',
                user_name: 'Alex Chiang',
                description: 'Hi I am a sacramento kings fan',
                rendezvous: 'Outside the Stadium',
                seat_available: 4,
                lon: -121.3069,
                to_time: '17:00',
                from_time: '15:00',
                lat: 38.687
            },
            riders: [
                {
                    user_id: '67890',
                    user_name: 'Lebron James',
                    lon: -121.3083,
                    to_time: '17:00',
                    from_time: '15:00',
                    lat: 38.6914
                },
                {
                    user_id: '6',
                    user_name: 'Bogdan Bogdanovic',
                    lon: -121.314,
                    to_time: '17:00',
                    from_time: '15:00',
                    lat: 38.6695
                },
                {
                    user_id: '8',
                    user_name: 'Harry Giles',
                    lon: -121.3124,
                    to_time: '17:00',
                    from_time: '15:00',
                    lat: 38.7063
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
                        <ListItem
                            itemDivider
                            style={{ backgroundColor: 'none' }}
                        >
                            <Text style={styles.Title2}>Your Driver:</Text>
                        </ListItem>
                        <Card style={{ backgroundColor: 'none' }}>
                            <CardItem style={{ backgroundColor: 'none' }}>
                                <Left style={{ backgroundColor: 'none' }}>
                                    <Thumbnail
                                        square
                                        source={{
                                            uri:
                                                'https://placeimg.com/240/240/people'
                                        }}
                                        style={{
                                            borderRadius: 10,
                                            borderWidth: 1,
                                            borderColor: 'white',
                                            marginLeft: 20,
                                            height: 100,
                                            width: 100
                                        }}
                                    />
                                </Left>
                                <Body style={{ backgroundColor: 'none' }}>
                                    <Text style={styles.BodyText}>
                                        {this.state.response.driver.user_name}
                                    </Text>
                                    <Text style={styles.BodyText}>
                                        {this.state.response.driver.from_time}{' '}
                                        to {this.state.response.driver.to_time}
                                    </Text>
                                    <Text style={styles.BodyText}>
                                        Toyota Carolla
                                    </Text>
                                    <Text style={styles.BodyText}>
                                        PWI12897
                                    </Text>
                                    <Button style={{ width: 160 }}>
                                        <Text>
                                            <Icon
                                                name="ios-call"
                                                style={{
                                                    fontSize: 25,
                                                    color: '#fff'
                                                }}
                                            />
                                            Call
                                        </Text>
                                        <Text>
                                            <Icon
                                                name="ios-text"
                                                style={{
                                                    fontSize: 25,
                                                    color: '#fff'
                                                }}
                                            />
                                            Text
                                        </Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>
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
                <Content
                    style={{ height: 100, marginTop: -50, paddingBottom: 20 }}
                >
                    <MyMap />
                </Content>
            </Container>
        );
    }
}

const styles = {
    Container: {
        flex: 1
    },
    Content: {
        flex: 1,
        backgroundColor: '#54327E',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: -100,
        alignContent: 'flex-start'
    },
    Title: {
        flex: 1,
        marginLeft: 15,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    Title2: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -10
    },
    BodyText: {
        color: 'white',
        fontWeight: 'bold'
    }
};

export default RouteScreen;
