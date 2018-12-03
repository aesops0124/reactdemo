import React, {Component} from 'react';

export default class Number extends Component {
           

    render() {
        return (
            <div>
                <span>number: {this.props.defaultNumber}</span> 
            </div>
        );
    }
}