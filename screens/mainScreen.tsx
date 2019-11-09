import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';

class MainScreen extends Component {

    // @ts-ignore
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Main</Text>
                // @ts-ignore
                <Button onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MainScreen;