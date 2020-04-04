//import React from 'react';
import React, { Component } from 'react';

// const percobaan = () => <p>Ini percobaan ini adalah percobaan ke {Math.floor(Math.random() * 14)}</p>;

class percobaan extends Component {

    render() {
        return (
            <p>Ini Adalah percobaan ke-{Math.floor(Math.random() * 14)}</p>
        )
    };
}

export default percobaan;