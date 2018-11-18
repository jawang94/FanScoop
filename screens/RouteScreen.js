import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import MyHeader from '../components/Header';

class RouteScreen extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        // isMatchDone: true
    };

    render() {
        return (
            <Container>
                <MyHeader title="Welcome Jason" />
                <Content style={styles.Content} />
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
