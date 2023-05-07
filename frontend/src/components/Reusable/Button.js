import React from 'react';

export default class Button extends React.Component{
    render(){
        return(
            <button className="btn btn-danger mt-3" type="submit">{this.props.buttonName}</button>
        )
    }
}