import * as actionTypes from './actionTypes';

export const changeTurn = (gr, gc, i, j) => {
    return {
        type: actionTypes.CHANGE_TURN,
        row: i,
        column: j,
        gridRow: gr,
        gridCol: gc
    }
}