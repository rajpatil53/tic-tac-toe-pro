import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const tile = (props) => {
    return (
        <LinearGradient 
            colors={props.disabled ? ['#acb2b6','#ddd'] : ['#D3CCE3','#E9E4F0']} 
            start={{x:0,y:0}} 
            end={{x:0,y:1}} 
            style={styles.container}>
                <TouchableOpacity 
                    onPress={props.onClick} 
                    {...props} 
                    style={props.disabled ? [styles.disabledTile, props.style] : [styles.tile, props.style]}>
                    <Text>{props.text}</Text>
                </TouchableOpacity>
        </LinearGradient>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tile: {
        flex: 1,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#999",
        alignItems: "center",
        justifyContent:"center"
    },
    disabledTile: {
        flex: 1,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#999",
        alignItems: "center",
        justifyContent:"center"
    }
});

export default tile;