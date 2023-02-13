import React, { Component } from "react";

export class ClassCounterTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        return (
            <div>
                <p>Counter with class using previous state</p>
                <button onClick={this.incrementCount}>
                    Count: {this.state.count}
                </button>
            </div>
        );
    }
}

export default ClassCounterTwo;
