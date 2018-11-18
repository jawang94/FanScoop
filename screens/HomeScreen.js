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
        from: '5:00 PM',
        to: '7:00 PM',
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

    handleFromPicked = (date, fn) => {
        this.setState({ from: date.toString() });
        fn();
    };

    handleToPicked = (date, fn) => {
        this.setState({ to: date.toString() });
        // this.hideToPicker();
        fn();
    };

    render() {
        const { from, to } = this.state;
        return (
            <Container>
                <MyHeader title="Welcome Jason" />
                <Content style={styles.Content}>
                    <Text>CARPOOL ROLE</Text>
                    <MySegment ride={this.state.ride} onPress={this.onPress} />
                    <Content style={styles.SwitchContainer}>
                        <Text style={styles.SwitchText}>
                            If I don't match as a Rider try to match me as a
                            Driver
                        </Text>
                        <Switch value style={styles.Switch} />
                    </Content>
                    <Form style={styles.Form}>
                        <Dropdown
                            style={styles.Event}
                            text="CHOOSE YOUR EVENT:"
                            placeholder="Choose your event:"
                            data={this.state.events}
                        />
                        <Dropdown
                            style={styles.Seat}
                            text="SEATS AVAILABLE:"
                            placeholder="Seats Available:"
                            data={this.state.seats}
                        />
                        <TimePicker
                            text="YOUR PICKUP TIME"
                            from={from}
                            to={to}
                        />
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

    // _maybeRenderDevelopmentModeWarning() {
    //     if (__DEV__) {
    //         const learnMoreButton = (
    //             <Text
    //                 onPress={this._handleLearnMorePress}
    //                 style={styles.helpLinkText}
    //             >
    //                 Learn more
    //             </Text>
    //         );

    //         return (
    //             <Text style={styles.developmentModeText}>
    //                 Development mode is enabled, your app will be slower but you
    //                 can use useful development tools. {learnMoreButton}
    //             </Text>
    //         );
    //     }
    //     return (
    //         <Text style={styles.developmentModeText}>
    //             You are not in development mode, your app will run at full
    //             speed.
    //         </Text>
    //     );
    // }

    // _handleLearnMorePress = () => {
    //     WebBrowser.openBrowserAsync(
    //         'https://docs.expo.io/versions/latest/guides/development-mode'
    //     );
    // };

    // _handleHelpPress = () => {
    //     WebBrowser.openBrowserAsync(
    //         'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    //     );
    // };
}

export default HomeScreen;

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
        alignContent: 'space-between'
    },
    Switch: {
        flex: 1,
        marginLeft: 250
    },
    Form: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        marginTop: 20,
        height: 300,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    Event: {
        marginTop: 20
    },
    Seat: {
        marginTop: 20
    },
    Date: {
        marginTop: 30,
        color: 'white'
    },
    Rendezvous: {
        marginTop: 30
    },
    ButtonContainer: {
        marginTop: 30,
        marginLeft: 110
    }
});
