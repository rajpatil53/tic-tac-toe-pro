import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const turnIndicator = (props) => {
    const currentTurn = props.turn===1 ?
    <Icon size={40} name="checkbox-blank-circle-outline" color="dodgerblue" /> : 
    <Icon size={40} name="close" color="orangered" />;

    return (
        <View style={styles.container}>
            <View style={styles.turn}>
                <Text style={styles.whiteText}>PLAY</Text>
                <Text>{currentTurn}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.reset} onPress={props.onReset}>
                    <Text style={styles.whiteText}>RESET</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
    },
    turn: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    buttons: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    reset: {
        borderWidth:1,
        borderColor: "#666",
        padding: 5,
        borderRadius: 50
    },
    whiteText: {
        color: '#eee'
    }
});

export default turnIndicator;