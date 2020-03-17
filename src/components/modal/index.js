import React, { Component } from "react";

export default class Modal extends Component {
    state = {
        title: '',
        desc: ''
    };

    componentDidCatch = () => this.setState({title: this.props.title, desc: this.props.desc});

    handleTitleChange = ({target}) => this.setState({title: target.value});

    handleDescChange = ({target}) => this.setState({desc: target.value})

    handleUpdateInfo = () => {
        const {title, desc} = this.state;
        const {id, edit} = this.props;
        const newData = {
            id,
            title,
            desc
        }
        edit(newData)
    }
    render(){
        return (
        <form>
            <input type="text" name="title" defaultValue={this.props.title} onChange={this.handleTitleChange}/>
            <input type="text" name="desc" defaultValue={this.props.desc} onChange={this.handleDescChange}/>
            <button type="button" onClick={this.handleUpdateInfo}>Send</button>
        </form>);
    }
}