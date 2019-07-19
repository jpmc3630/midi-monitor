import React from "react";
import {inject, observer} from "mobx-react";
import {hs} from "../utils/hexstring";
import "./Messages.css";

class Messages extends React.Component {

/*
    clear = () => {
        this.props.appState.messages = [];   // parseMidi() messages with additional .timestamp property
    };

    toggleFull = (index) => {
        if (global.dev) console.log("togglefull", index);
        this.props.appState.messages[index].view_full = !this.props.appState.messages[index].view_full;
    };
*/

/*
    scrollToBottom = () => {
        // if (this.props.consolePosition === 'bottom') return;
        const t = document.getElementById("mytable");
        console.log(t.offsetHeight);
        window.scrollTo(0, t.offsetHeight);
        // this.messagesEnd.scrollIntoView();
    };
*/

    // componentDidMount() {
    //     this.scrollToBottom();
    // };

/*
    componentDidUpdate() {
        this.scrollToBottom();
    };
*/
    scrollToBottom = () => {
        if (this.props.consolePosition === 'bottom') return;
        this.messagesEnd.scrollIntoView();
    };

    componentDidMount() {
        this.scrollToBottom();
    };

    componentDidUpdate() {
        this.scrollToBottom();
    };

    //
    // Display format:
    //
    // # | source | data (hex) | data (dec) | type | channel | decoded | commands (e.g. export sysex)
    //

    render() {

        // const {consolePosition} = this.props;

        // const cut_len = consolePosition === 'bottom' ? 48 : 12;

        return (
            <div className="messages-wrapper">
                <div className="messages-header">
                    <div>timestamp</div>
                    <div>source</div>
                    <div>raw data (hex)</div>
                    <div>raw data (dec)</div>
                    <div>msg type</div>
                    <div>ch.</div>
                    <div>data1</div>
                    <div>data2</div>
                </div>
                <div className="message-rows">
                    {this.props.appState.messages && this.props.appState.messages.map((m, i) =>
                    <div className="message-row" key={i}>
                        <div>{m.timestamp.toFixed(3)}</div>
                        <div>{m.source}</div>
                        <div className="data">{hs(m.data)}</div>
                        <div className="data">{hs(m.data)}</div>
                        <div className="data-txt">{m.type}</div>
                        <div className="data">{m.channel}</div>
                        <div className="data">{m.data1}</div>
                        <div className="data">{m.data2}</div>
                    </div>
                    )}
                    <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </div>
            </div>
        );
    }
}

// https://github.com/mobxjs/mobx-react/issues/250
export default inject('appState')(observer(Messages));
