import React from 'react';

// import CrimeRateList from './crime-rate-list';

// import Map from './map';

// import SearchPage from './search';
import SingleIncident from './single-incident';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  componentDidMount() {
    // fetch('/api/health-check')
    //   .then(res => res.json())
    //   .then(data => this.setState({ message: data.message || data.error }))
    //   .catch(err => this.setState({ message: err.message }))
    //   .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (

      <SingleIncident />

    );
  }
}
