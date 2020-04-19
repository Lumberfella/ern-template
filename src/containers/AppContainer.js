import React from 'react';
import App from '../components/app/App';
import axios from 'axios';

class AppContainer extends React.Component {
    
    constructor() {
        super();
        this.state = {
            ping: ""
        }
    }

    componentDidMount() {
        let message = "";
        axios.get('http://localhost:8080/ping')
            .then(function (response) {
                this.setState({
                    ping: response.data["message"]
                });
            }.bind(this));
    }

    render() {
        return <App message={this.state.ping} />
    }
}

export default AppContainer;