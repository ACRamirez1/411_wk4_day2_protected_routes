import { connect } from 'react-redux';
import Home from '../components/Home';

// map the global state of cars to props

const mapStateToProps = (state) => {
    // return an object that matches the key in state.js
  return {
    cars: state.cars,
  };
};

// connect the redux container to the Home component
export default connect (mapStateToProps)(Home);