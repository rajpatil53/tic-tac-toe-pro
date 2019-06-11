import React from 'react';
import { View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Tile from '../Tile/Tile';

const grid = (props) => {
    tiles=[[],[],[]]
    if(Array.isArray(props.gameState)){
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(props.gameState[i][j]===-1){
                    tiles[i].push(
                        <Icon size={25} name="close" color="orangered" />
                    )
                }
                else if(props.gameState[i][j]===1){
                    tiles[i].push(
                        <Icon size={22} name="checkbox-blank-circle-outline" color="dodgerblue" />
                    )
                }
                else{
                    tiles[i].push(' ')
                }
            }
        }
    }
    else{
        let res;
        if(props.gameState===0){
            res="D";
        }
        else{
            res = props.gameState===1 ? 
            <Icon size={22} name="checkbox-blank-circle-outline" color="dodgerblue" /> : 
            <Icon size={25} name="close" color="orangered" />;
        }
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(i==1 && j==1){
                    tiles[i].push(res);
                }
                else{
                    tiles[i].push('-');
                }
            }
        }
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Tile 
                    style={styles.leftBorder} 
                    onClick={() => props.onTilePressed(props.gridRow, props.gridCol, 0, 0)} 
                    text={tiles[0][0]}
                    disabled={props.disabled} />
                <Tile 
                    onClick={() => props.onTilePressed(props.gridRow, props.gridCol, 0, 1)} 
                    text={tiles[0][1]}
                    disabled={props.disabled} />
                <Tile 
                    style={styles.rightBorder} 
                    onClick={() => props.onTilePressed(props.gridRow, props.gridCol, 0, 2)} 
                    text={tiles[0][2]}
                    disabled={props.disabled} />
            </View>
            <View style={styles.row}>
                <Tile 
                    style={styles.leftBorder} 
                    onClick={() => props.onTilePressed(props.gridRow, props.gridCol, 1, 0)} 
                    text={tiles[1][0]}
                    disabled={props.disabled} />
                <Tile 
                    onClick={() => props.onTilePressed(props.gridRow, props.gridCol, 1, 1)} 
                    text={tiles[1][1]}
                    disabled={props.disabled} />
                <Tile 
                    style={styles.rightBorder} 
                    onClick={() => props.onTilePressed(props.gridRow, props.gridCol, 1, 2)} 
                    text={tiles[1][2]}
                    disabled={props.disabled} />
            </View>
            <View style={styles.row}>
                <Tile 
                    style={styles.leftBorder} 
                    onClick={() => props.onTilePressed(props.gridRow, props.gridCol, 2, 0)} 
                    text={tiles[2][0]}
                    disabled={props.disabled} />
                <Tile 
                    onClick={() => props.onTilePressed(props.gridRow, props.gridCol, 2, 1)} 
                    text={tiles[2][1]}
                    disabled={props.disabled} />
                <Tile 
                    style={styles.rightBorder} 
                    onClick={() => props.onTilePressed(props.gridRow, props.gridCol, 2, 2)} 
                    text={tiles[2][2]}
                    disabled={props.disabled} />
            </View>
        </View>
    )
}

// const grid = (props) => {
//     tiles=[[],[],[]]
//     for(let i=0;i<3;i++){
//         for(let j=0;j<3;j++){
//             if(props.gameState[i][j]===-1){
//                 tiles[i].push('X')
//             }
//             else if(props.gameState[i][j]===1){
//                 tiles[i].push('O')
//             }
//             else{
//                 tiles[i].push(' ')
//             }
//         }
//     }

//     return (
//         <View>
//             <View style={styles.row}>
//                 <Tile onClick={() => props.onTilePressed(0,0)} text={tiles[0][0]}/>
//                 <Tile onClick={() => props.onTilePressed(0,1)} text={tiles[0][1]}/>
//                 <Tile onClick={() => props.onTilePressed(0,2)} text={tiles[0][2]}/>
//             </View>
//             <View style={styles.row}>
//                 <Tile onClick={() => props.onTilePressed(1,0)} text={tiles[1][0]}/>
//                 <Tile onClick={() => props.onTilePressed(1,1)} text={tiles[1][1]}/>
//                 <Tile onClick={() => props.onTilePressed(1,2)} text={tiles[1][2]}/>
//             </View>
//             <View style={styles.row}>
//                 <Tile onClick={() => props.onTilePressed(2,0)} text={tiles[2][0]}/>
//                 <Tile onClick={() => props.onTilePressed(2,1)} text={tiles[2][1]}/>
//                 <Tile onClick={() => props.onTilePressed(2,2)} text={tiles[2][2]}/>
//             </View>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        width:"100%",
        height:"33.33%",
        flexDirection: "row",
    },
    rightBorder:{
        borderRightWidth:2,
    },
    leftBorder:{
        borderLeftWidth:2
    }
});

export default grid;