import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

// import ThreeByThree from './src/components/ThreeByThree/ThreeByThree';
import NineByNine from './src/components/NineByNine/NineByNine';
import TurnIndicator from './src/components/TurnIndicator/TurnIndicator';
import WinnerIndicator from './src/components/WinnerIndicator/WinnerIndicator';

import { changeTurn, gameReset} from './src/store/actions/index';

class App extends Component {

  tilePressedHandler = (gr,gc,i,j) => {
    this.props.tilePressed(gr,gc,i,j);
  }

  gameResetHandler = () => {
    this.props.resetGame();
  }

  render() {
    let winnerText;
    if(this.props.winner!==null){
      winnerText = <WinnerIndicator winner={this.props.winner}/>
    }
    else{
      winnerText = null;
    }

    return (
      <LinearGradient colors={['#1D2671','#C33764']} style={styles.container}>
        <View style={styles.topContainer}>
          <TurnIndicator turn={this.props.turn} onReset={this.gameResetHandler}/>
        </View>
        <View style={styles.gridContainer}>
          <NineByNine 
            tilePressed={this.tilePressedHandler} 
            game={this.props.game}
            disabled={this.props.disabled} />
          {/* <ThreeByThree onTilePressed={this.tilePressedHandler} gameState={this.props.game}/> */}
        </View>
        <View style={styles.winnerContainer}>
          {winnerText}
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
  },
  gridContainer: {
    flex:4,
  },
  winnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {
    turn: state.reducer.currentTurn,
    game: state.reducer.gameState,
    winner: state.reducer.winner,
    disabled: state.reducer.disabled
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tilePressed: (gr,gc,i,j) => dispatch(changeTurn(gr,gc,i,j)),
    resetGame: () => dispatch(gameReset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App;
