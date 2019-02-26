import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { setPresidents } from '../../actions';
import { fetchPresidents } from '../../thunks/fetchPresidents';
import { CardContainer } from '../../components/CardContainer/CardContainer';

export class App extends Component {

  componentDidMount = () => {
    const url = 'http://localhost:3001/api/v1/presidents'
    this.props.fetchPresidents(url)
  }

  render() {
    const { hasErrored, isLoading, presidents } = this.props;

    return (
      <div className="App">
        <h1>Presidents + Assholes</h1>
        {hasErrored && <h1>Sorry, there was an error fetching the presidents.</h1>}
        {isLoading && <h1>Loading...</h1>}
        <CardContainer presidents={presidents} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
  presidents: state.presidents
})

export const mapDispatchToProps = (dispatch) => ({
  fetchPresidents: (url) => dispatch(fetchPresidents(url)),
  setPresidents: (presidents) => dispatch(setPresidents(presidents))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)