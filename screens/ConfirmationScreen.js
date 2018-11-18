import React, { Component } from 'react';
import { Text, Content, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import MySpinner from '../components/Spinner';

class ConfirmationScreen extends Component {
    state = {
        isMatchDone: true
    };

    render() {
        const { navigate } = this.props.navigation;
        return this.state.isMatchDone ? (
            <Content style={styles.Content}>
                <Text style={styles.Text}>
                    Your team has be formed! Click go to check it out!
                </Text>
                <Button
                    primary
                    style={styles.ButtonContainer}
                    onPress={() => navigate('Route')}
                >
                    <Text>Go</Text>
                </Button>
            </Content>
        ) : (
            <Content style={styles.Content}>
                <Text style={styles.Text}>
                    We are putting together your team! Check back at 3 PM on
                    Tuesday 11/18
                </Text>
                <MySpinner />
                <Button
                    primary
                    style={styles.ButtonContainer}
                    onPress={() => navigate('Home')}
                >
                    <Text>Go Back</Text>
                </Button>
            </Content>
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
    Text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 200,
        marginBottom: 20,
        color: 'white'
    },
    spinnerStyle: {
        flex: 1
    },
    ButtonContainer: {
        marginTop: 15,
        marginLeft: 115
    }
});

export default ConfirmationScreen;
