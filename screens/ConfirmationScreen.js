import React, { Component } from 'react';
import { Text, Content, Button } from 'native-base';
import MySpinner from '../components/Spinner';

class ConfirmationScreen extends Component {
    state = {
        isMatchDone: true
    };

    render() {
        const { navigate } = this.props.navigation;
        return this.state.isMatchDone ? (
            <Content>
                <Text>Your team has be formed! Click go to check it out!</Text>
                <Button
                    primary
                    style={styles.ButtonContainer}
                    onPress={() => navigate('Home')}
                >
                    <Text>Go</Text>
                </Button>
            </Content>
        ) : (
            <Content>
                <Text>
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

const styles = {
    spinnerStyle: { flex: 1 },
    ButtonContainer: {
        marginTop: 15,
        marginLeft: 110
    }
};

export default ConfirmationScreen;
