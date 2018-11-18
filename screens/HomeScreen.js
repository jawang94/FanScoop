import React, { Component } from 'react';
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Picker,
    Left,
    Title,
    Body,
    Right,
    Button,
    Icon,
    Segment,
    Text
} from 'native-base';
import { StyleSheet } from 'react-native';
import { Font } from 'expo';
// import { MonoText } from '../components/StyledText';
import MyHeader from '../components/Header';
import MySegment from '../components/Segment';
import Dropdown from '../components/Dropdown';
import MyDatePicker from '../components/MyDatePicker';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };

    // change to OpenSans font
    componentDidMount() {
        Font.loadAsync({
            'open-sans-bold': require('../assets/fonts/SpaceMono-Regular.ttf')
        });
    }

    render() {
        return (
            <Container>
                <MyHeader title="Welcome Jason" />
                <Content style={styles.Content}>
                    <Text style={styles.TextContainer}>Carpool Role</Text>
                    <MySegment />
                    <Form style={styles.Form}>
                        <Dropdown
                            style={styles.Event}
                            placeholder="Choose your event:"
                        />
                        <Dropdown
                            style={styles.Seat}
                            placeholder="Seats Available"
                        />
                        <MyDatePicker style={styles.Date} />
                        {/* <Dropdown placeholder="Availability" /> */}
                        <Dropdown
                            style={styles.Rendezvous}
                            placeholder="Rendezvous Location"
                        />
                        <Content style={styles.ButtonContainer}>
                            <Button primary>
                                <Text> Schedule </Text>
                            </Button>
                        </Content>
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
        marginTop: 30
    }
});

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
