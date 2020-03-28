import React, { Component } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
    state = {
        title: this.props.title,
        desc: this.props.desc
    };

    //componentDidCatch = () => this.setState({title: this.props.title, desc: this.props.desc});

    handleTitleChange = ({target}) => this.setState({title: target.value});

    handleDescChange = ({target}) => this.setState({desc: target.value});

    handleUpdateInfo = () => {
        const {title, desc} = this.state;
        const {id, edit} = this.props;
        const newData = { id, title, desc }
        edit(newData)
    }
    render(){
        return (
        <div>
            <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
            <input type="text" name="desc" value={this.state.desc} onChange={this.handleDescChange}/>
            <button className={styles.button} onClick={this.handleUpdateInfo}>Send</button>
        </div>);
    }
}