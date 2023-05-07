import React from "react";

export default class FormItems extends React.Component{
    handleChange=(e)=>{
        this.props.handleChange(e);
    }
    render(){
        let input;
        const {elementType,elementConfig}=this.props.config;
        const {elementValue}=this.props;
        switch(elementType){
            case 'input':
                input = <div className="form-group row pb-3">
                            <label htmlFor={elementConfig.id} className="col-sm-2 col-form-label">{elementConfig.name}:</label>
                            <div className="col-sm-10">
                                <input className="form-control" {...elementConfig} value={elementValue}  />
                            </div>
                        </div>
                    break;
                case 'textarea':
                    input = <div className="form-group row pb-3">
                                <label htmlFor={elementConfig.id} className="col-sm-2 col-form-label">{elementConfig.name}:</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" {...elementConfig} value={elementValue} />
                                </div>
                            </div>
                        break;
                case 'radio':
                    input = <div className="form-group row pb-3">
                                <label className="col-sm-2 col-form-label text-capitalize" htmlFor={elementConfig.id}>{elementConfig.id}:</label>
                                <div className="col-sm-10 text-left" id={elementConfig.id}>
                                    <div className="col-sm-10">
                                        {elementConfig.radios.map((radio)=>
                                        <div key={radio.id}>
                                            <input type="radio" {...radio}  className="form-check-input"/>
                                            <label className="form-check-label text-capitalize" htmlFor={radio.id}>{radio.value}</label>
                                        </div> 
                                        )   
                                    }
                                    </div>
                                </div>
                            </div>
                            break;
                default:
                    break;
        }
        return(
            <div>
                {input}
            </div>

        )
    }
}