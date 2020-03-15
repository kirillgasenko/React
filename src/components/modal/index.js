import React, { Component } from "react";

export default class Modal extends Component {
    state = {
        title: '',
        desc: ''
    }
    componentDidCatch = () => this.setState({title: this.props.title, desc: this.props.desc})

    changeTitle = ({target}) => this.setState({title: target.value})
    changeDesc = ({target}) => this.setState({desc: target.value})
    
    edit = () => {
        const {
            state: {
                title,
                desc
            },
            props: {
                id,
                edit
            }
        } = this
        const newData = {
            title,
            desc,
            id
        }
        edit(newData)
    }
    render(){
        return (
        <div>
            <input type="text" name="title" defaultValue={this.props.title} onChange={this.changeTitle}/>
            <input type="text" name="desc" defaultValue={this.props.desc} onChange={this.changeDesc}/>
            <button type="button" onClick={this.edit}>Send</button>
        </div>);
    }
}