import React from 'react';
import { Spinner, Content } from 'native-base';

const MySpinner = () => (
    <Content style={styles.spinnerStyle}>
        <Spinner color="white" />
    </Content>
);

const styles = {
    spinnerStyle: { flex: 1 }
};

export default MySpinner;
