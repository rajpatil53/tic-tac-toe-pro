import React from 'react';
import { View, StyleSheet } from 'react-native';

import ThreeByThree from '../ThreeByThree/ThreeByThree';

const nineByNine = props => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <ThreeByThree 
                    gridRow={0}
                    gridCol={0} 
                    onTilePressed={props.tilePressed} 
                    gameState={props.game[0][0]}
                    disabled={props.disabled[0][0]} />
                <ThreeByThree 
                    gridRow={0}
                    gridCol={1} 
                    onTilePressed={props.tilePressed} 
                    gameState={props.game[0][1]}
                    disabled={props.disabled[0][1]} />
                <ThreeByThree 
                    gridRow={0}
                    gridCol={2} 
                    onTilePressed={props.tilePressed} 
                    gameState={props.game[0][2]}
                    disabled={props.disabled[0][2]} />
            </View>
            <View style={styles.row}>
                <ThreeByThree 
                    gridRow={1}
                    gridCol={0} 
                    onTilePressed={props.tilePressed} 
                    gameState={props.game[1][0]}
                    disabled={props.disabled[1][0]} />
                <ThreeByThree 
                    gridRow={1}
                    gridCol={1} 
                    onTilePressed={props.tilePressed} 
                    gameState={props.game[1][1]}
                    disabled={props.disabled[1][1]} />
                <ThreeByThree 
                    gridRow={1}
                    gridCol={2} 
                    onTilePressed={props.tilePressed} 
                    gameState={props.game[1][2]}
                    disabled={props.disabled[1][2]} />
            </View>
            <View style={styles.row}>
                <ThreeByThree 
                    gridRow={2}
                    gridCol={0} 
                    onTilePressed={props.tilePressed} 
                    gameState={props.game[2][0]}
                    disabled={props.disabled[2][0]} />
                <ThreeByThree 
                    gridRow={2}
                    gridCol={1} 
                    onTilePressed={props.tilePressed} 
                    gameState={props.game[2][1]}
                    disabled={props.disabled[2][1]} />
                <ThreeByThree 
                    gridRow={2}
                    gridCol={2} 
                    onTilePressed={props.tilePressed} 
                    gameState={props.game[2][2]}
                    disabled={props.disabled[2][2]} />
            </View>
        </View>
        
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        width: 300
    },
    row: {
        height: 125,
        flexDirection: "row",
        borderBottomWidth:1,
        borderBottomColor:"#999",
        borderTopWidth:1,
        borderTopColor:"#999"
    }
});

export default nineByNine;