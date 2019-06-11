import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const winnerIndicator = (props) => {

    let winnerText;
    if(props.winner===0){
        winnerText = "Draw";
    }
    else{
        winnerText = props.winner===1 ? 
        <Icon size={50} name="checkbox-blank-circle-outline" color="dodgerblue" /> : 
        <Icon size={50} name="close" color="orangered" />;
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.whiteText}>WINNER</Text>
            <Text>{winnerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    whiteText: {
        color: '#eee'
    }
});

export default winnerIndicator;