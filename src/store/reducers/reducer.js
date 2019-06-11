import { CHANGE_TURN, GAME_RESET } from '../actions/actionTypes';

initialState = {
    currentTurn: 1,
    gameState: [
        [
            [[0,0,0],[0,0,0],[0,0,0]],
            [[0,0,0],[0,0,0],[0,0,0]],
            [[0,0,0],[0,0,0],[0,0,0]]
        ],
        [
            [[0,0,0],[0,0,0],[0,0,0]],
            [[0,0,0],[0,0,0],[0,0,0]],
            [[0,0,0],[0,0,0],[0,0,0]]
        ],
        [
            [[0,0,0],[0,0,0],[0,0,0]],
            [[0,0,0],[0,0,0],[0,0,0]],
            [[0,0,0],[0,0,0],[0,0,0]]
        ]
    ],
    disabled: [
        [false,false,false],
        [false,false,false],
        [false,false,false]
    ],
    winner: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_TURN:
            const row = action.row;
            const col = action.column;
            const gRow = action.gridRow;
            const gCol = action.gridCol;
            //check if game over 
            // if(state.winner!==null){
            //     return state;
            // }

            //check if tile is empty
            if  (!(Array.isArray(state.gameState[gRow][gCol])) || 
                state.gameState[gRow][gCol][row][col]!==0 || 
                state.disabled[gRow][gCol] ||
                state.winner!==null){
                
                console.log("return");
                console.log(action.column);
                console.log(state.gameState[gRow][gCol][row][col]);
                return state;
            }

            //next turn
            let nextTurn = state.currentTurn === 1 ? -1 : 1;
            let nextGameState = state.gameState.slice();
            nextGameState[gRow][gCol][row][col] = state.currentTurn;

            // check winner
            let winner=null;

            //update current grid
            let rowSum = nextGameState[gRow][gCol][row][0]+nextGameState[gRow][gCol][row][1]+nextGameState[gRow][gCol][row][2];
            let colSum = nextGameState[gRow][gCol][0][col]+nextGameState[gRow][gCol][1][col]+nextGameState[gRow][gCol][2][col];
            let diagSum1 = nextGameState[gRow][gCol][0][0]+nextGameState[gRow][gCol][1][1]+nextGameState[gRow][gCol][2][2];
            let diagSum2 = nextGameState[gRow][gCol][0][2]+nextGameState[gRow][gCol][1][1]+nextGameState[gRow][gCol][2][0];
            if(rowSum===3 || rowSum===-3){
                nextGameState[gRow][gCol] = rowSum/3;
            }
            else if(colSum===3 || colSum===-3){
                nextGameState[gRow][gCol] = colSum/3;
            }
            else if(diagSum1===3 || diagSum1===-3){
                nextGameState[gRow][gCol] = diagSum1/3;
            }
            else if(diagSum2===3 || diagSum2===-3){
                nextGameState[gRow][gCol] = diagSum2/3;
            }
            else if(isFull(nextGameState[gRow][gCol])){
                nextGameState[gRow][gCol] = 0;
            } 

            //check winner in whole game

            rowSum = colSum = diagSum1 = diagSum2 = 0;
            if(nextGameState[gRow][gCol]===1 || nextGameState[gRow][gCol]===-1){

                //check column for winner
                if (!Array.isArray(nextGameState[(gRow+1)%3][gCol]) && 
                    !Array.isArray(nextGameState[(gRow+2)%3][gCol])){
                    colSum = nextGameState[gRow][gCol]+
                            nextGameState[(gRow+1)%3][gCol]+
                            nextGameState[(gRow+2)%3][gCol];

                    if(colSum===3 || colSum===-3){
                        winner = colSum/3;
                    }
                }

                //check row for winner
                if (!Array.isArray(nextGameState[gRow][(gCol+1)%3]) && 
                    !Array.isArray(nextGameState[gRow][(gCol+2)%3])){
                        rowSum = nextGameState[gRow][gCol]+
                                nextGameState[gRow][(gCol+1)%3]+
                                nextGameState[gRow][(gCol+2)%3];

                        if(rowSum===3 || rowSum===-3){
                            winner = rowSum/3;
                        }
                }                

                //check diagonals for winner
                if (!Array.isArray(nextGameState[0][0]) && 
                    !Array.isArray(nextGameState[2][2]) && 
                    !Array.isArray(nextGameState[1][1])){
                        diagSum1 = nextGameState[0][0]+nextGameState[1][1]+nextGameState[2][2];

                        if(diagSum1===3 || diagSum1===-3){
                            winner = diagSum1/3;
                        }
                }

                if (!Array.isArray(nextGameState[0][2]) && 
                    !Array.isArray(nextGameState[1][1]) && 
                    !Array.isArray(nextGameState[2][0])){
                        diagSum2 = nextGameState[0][2]+nextGameState[1][1]+nextGameState[2][0];

                        if(diagSum2===3 || diagSum2===-3){
                            winner = diagSum2/3;
                        }        
                }

            }

            //check for draw
            if(winner===null){
                let flag = 0;
                for(let i=0;i<3;i++){
                    for(let j=0;j<3;j++){
                        if(Array.isArray(nextGameState[i][j])){
                            flag = 1;
                            break;
                        }
                    }
                }
                if(flag===0){
                    winner = 0;
                }
            }
            
            //activate proper grid
            let disabled = state.disabled.slice();
            if(Array.isArray(nextGameState[row][col])){
                for(let i=0;i<3;i++){
                    for(let j=0;j<3;j++){
                        if(i===row && j===col){
                            disabled[i][j]=false;
                        }
                        else{
                            disabled[i][j]=true;
                        }
                    }
                }
            }
            else{
                for(let i=0;i<3;i++){
                    for(let j=0;j<3;j++){
                        if(Array.isArray(nextGameState[i][j])){
                            disabled[i][j]=false;
                        }
                        else{
                            disabled[i][j]=true;
                        }
                    }
                }
                // disabled = [
                //     [false,false,false],
                //     [false,false,false],
                //     [false,false,false]
                // ];
            }
            

            return {
                ...state,
                currentTurn: nextTurn,
                gameState: nextGameState,
                winner: winner,
                disabled: disabled
            }

        case GAME_RESET:
            return {
                ...state,
                currentTurn: 1,
                gameState: [
                    [
                        [[0,0,0],[0,0,0],[0,0,0]],
                        [[0,0,0],[0,0,0],[0,0,0]],
                        [[0,0,0],[0,0,0],[0,0,0]]
                    ],
                    [
                        [[0,0,0],[0,0,0],[0,0,0]],
                        [[0,0,0],[0,0,0],[0,0,0]],
                        [[0,0,0],[0,0,0],[0,0,0]]
                    ],
                    [
                        [[0,0,0],[0,0,0],[0,0,0]],
                        [[0,0,0],[0,0,0],[0,0,0]],
                        [[0,0,0],[0,0,0],[0,0,0]]
                    ]
                ],
                disabled: [
                    [false,false,false],
                    [false,false,false],
                    [false,false,false]
                ],
                winner: null
            }

        default:
            return state;
    }
};

const isFull = gameState => {
    let zeroes = 0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(gameState[i][j]===0){
                zeroes++;
            }
        }
        if(zeroes>0){
            return false;
        }
    }
    return true;
}

// initialState = {
//     currentTurn: 1,
//     gameState:[
//         [0,0,0],
//         [0,0,0],
//         [0,0,0]
//     ],
//     winner: null
// }

// const rootReducer = (state = initialState, action) => {
//     switch(action.type){
//         case CHANGE_TURN:
//             const row = action.row;
//             const col = action.column;
//             //check if tile is empty
//             if(state.gameState[row][col]!==0 || state.winner!==null){
//                 return state;
//             }

//             //next turn
//             let nextTurn = state.currentTurn === 1 ? -1 : 1;
//             let nextGameState = state.gameState.slice();
//             nextGameState[row][col] = state.currentTurn;

//             // check winner
//             let winner=null;
//             const rowSum = nextGameState[row][0]+nextGameState[row][1]+nextGameState[row][2];
//             const colSum = nextGameState[0][col]+nextGameState[1][col]+nextGameState[2][col];
//             const diagSum1 = nextGameState[0][0]+nextGameState[1][1]+nextGameState[2][2];
//             const diagSum2 = nextGameState[0][2]+nextGameState[1][1]+nextGameState[2][0];
//             if(rowSum===3 || rowSum===-3){
//                 winner = rowSum/3;
//             }
//             else if(colSum===3 || colSum===-3){
//                 winner = colSum/3;
//             }
//             else if(diagSum1===3 || diagSum1===-3){
//                 winner = diagSum1/3;
//             }
//             else if(diagSum2===3 || diagSum2===-3){
//                 winner = diagSum2/3;
//             }

//             return {
//                 ...state,
//                 currentTurn: nextTurn,
//                 gameState: nextGameState,
//                 winner: winner
//             }

//         case GAME_RESET:
//             return {
//                 ...state,
//                 currentTurn: 1,
//                 gameState: [
//                     [0,0,0],
//                     [0,0,0],
//                     [0,0,0]
//                 ],
//                 winner: null
//             }

//         default:
//             return state;
//     }
// };

export default rootReducer;