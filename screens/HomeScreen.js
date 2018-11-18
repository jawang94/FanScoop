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
                <Content>
                    <Text>Carpool Role</Text>
                    <MySegment />
                    <Form>
                        <Dropdown placeholder="Choose your event:" />
                        <Dropdown placeholder="Seats Available" />
                        <MyDatePicker />
                        {/* <Dropdown placeholder="Availability" /> */}
                        <Dropdown placeholder="Rendezvous Location" />
                        <Button primary>
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
