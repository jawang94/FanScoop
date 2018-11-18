import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Button, Text, Switch } from 'native-base';

import { Font } from 'expo';
// import { MonoText } from '../components/StyledText';
import MyHeader from '../components/Header';
import MySegment from '../components/Segment';
import Dropdown from '../components/Dropdown';
import TimePicker from '../components/TimePicker';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        ride: true,
        events: [
            {
                label: 'Kings vs. Sixers 11/19',
                value: 0
            },
            {
                label: 'Kings vs. Warriors 11/19',
                value: 1
            },
            {
                label: 'Kings vs. Rockets 11/19',
                value: 2
            },
            {
                label: 'Kings vs. Lakers 11/19',
                value: 3
            },
            {
                label: 'Kings vs. Celtics 11/19',
                value: 4
            }
        ],
        rendezvous: [
            {
                label: 'Gate A',
                value: 0
            },
            {
                label: 'Gate B',
                value: 1
            },
            {
                label: 'Gate C',
                value: 2
            },
            {
                label: 'Gate D',
                value: 3
            },
            {
                label: 'Gate E',
                value: 4
            }
        ],
        seats: [
            {
                label: '1',
                value: 0
            },
            {
                label: '2',
                value: 1
            },
            {
                label: '3',
                value: 2
            },
            {
                label: '4',
                value: 3
            },
            {
                label: '5',
                value: 4
            }
        ]
    };

    // change to OpenSans font
    componentDidMount() {
        Font.loadAsync({
            'open-sans-bold': require('../assets/fonts/SpaceMono-Regular.ttf')
        });
    }

    onPress = () => {
        this.setState({ ride: !this.state.ride });
    };

    render() {
        return (
            <Container>
                <MyHeader title="Welcome Jason" />
                <Content style={styles.Content}>
                    <Text style={styles.TextContainer}>CARPOOL ROLE</Text>
                    <MySegment ride={this.state.ride} onPress={this.onPress} />
                    <Content value style={styles.SwitchContainer}>
                        <Text value style={styles.SwitchText}>
                            If I don't match as a Rider, try to match me as a
                            Driver
                        </Text>
                        <Switch value style={styles.Switch} />
                    </Content>
                    <Form style={styles.Form}>
                        <Dropdown
                            style={styles.Event}
                            text="CHOOSE YOUR EVENT:"
                            placeholder="Kings vs Lakers"
                            data={this.state.events}
                        />
                        <Dropdown
                            style={styles.Seat}
                            text="SEATS AVAILABLE:"
                            placeholder="Seats Available:"
                            data={this.state.seats}
                        />
                        <TimePicker text="YOUR PICKUP TIME" />
                        <Dropdown
                            style={styles.Rendezvous}
                            text="CHOOSE YOUR EVENT:"
                            placeholder="Rendezvous location:"
                            data={this.state.rendezvous}
                        />
                        <Button primary style={styles.ButtonContainer}>
                            <Text> Schedule </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    Content: {
        flex: 1,
        backgroundColor: '#383c92',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10
    },
    TextContainer: {
        flex: 1,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
    },
    SwitchContainer: {
        alignContent: 'flex-end',
        height: 70
    },
    SwitchText: {
        flex: 1,
        color: 'white',
        textAlign: 'center',
        alignContent: 'space-between'
    },
    Switch: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 1
    },
    Form: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    ButtonContainer: {
        marginTop: 30,
        marginLeft: 110
    }
});

export default HomeScreen;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     developmentModeText: {
//         marginBottom: 20,
//         color: 'rgba(0,0,0,0.4)',
//         fontSize: 14,
//         lineHeight: 19,
//         textAlign: 'center'
//     },
//     contentContainer: {
//         paddingTop: 30
//     },
//     welcomeContainer: {
//         alignItems: 'center',
//         marginTop: 10,
//         marginBottom: 20
//     },
//     welcomeImage: {
//         width: 100,
//         height: 80,
//         resizeMode: 'contain',
//         marginTop: 3,
//         marginLeft: -10
//     },
//     getStartedContainer: {
//         alignItems: 'center',
//         marginHorizontal: 50
//     },
//     homeScreenFilename: {
//         marginVertical: 7
//     },
//     codeHighlightText: {
//         color: 'rgba(96,100,109, 0.8)'
//     },
//     codeHighlightContainer: {
//         backgroundColor: 'rgba(0,0,0,0.05)',
//         borderRadius: 3,
//         paddingHorizontal: 4
//     },
//     getStartedText: {
//         fontSize: 17,
//         color: 'rgba(96,100,109, 1)',
//         lineHeight: 24,
//         textAlign: 'center'
//     },
//     tabBarInfoContainer: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         ...Platform.select({
//             ios: {
//                 shadowColor: 'black',
//                 shadowOffset: { height: -3 },
//                 shadowOpacity: 0.1,
//                 shadowRadius: 3
//             },
//             android: {
//                 elevation: 20
//             }
//         }),
//         alignItems: 'center',
//         backgroundColor: '#fbfbfb',
//         paddingVertical: 20
//     },
//     tabBarInfoText: {
//         fontSize: 17,
//         color: 'rgba(96,100,109, 1)',
//         textAlign: 'center'
//     },
//     navigationFilename: {
//         marginTop: 5
//     },
//     helpContainer: {
//         marginTop: 15,
//         alignItems: 'center'
//     },
//     helpLink: {
//         paddingVertical: 15
//     },
//     helpLinkText: {
//         fontSize: 14,
//         color: '#2e78b7'
//     }
// });
