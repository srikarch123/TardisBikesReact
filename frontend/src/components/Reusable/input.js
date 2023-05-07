import React from 'react';

function handleChange(e){
    this.props.handleChange(e);
}
export default function Input(){
    return(
        <div className="form-group row pb-3">
            <label htmlFor={this.props.config.elementConfig.id} className="col-sm-2 col-form-label">{this.props.config.elementConfig.name}:</label>
            <div className="col-sm-10">
                <input className="form-control" {...this.props.config.elementConfig} value={this.props.elementValue} onChange={e => handleChange(e)} />
            </div>
        </div>
    )
}