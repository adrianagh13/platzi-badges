import React from 'react';

class BadgeForm extends React.Component{
    // state = {};
    handleChange = e => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value
        // })
        this.setState({ //setState permite guardar la información generada del mismo form, se le pasa un obj con la info a guardar
            [e.target.name] : e.target.value,
        }) //cada que se generar un cambio en el input, se guardaba el nombre del mismo y el valor en el objeto state
    }
    
    handleClick = e => {
        console.log('button was clickedd')
    }

    handleSubmit = e => {
        e.preventDefault() //evita el refresh automático
        console.log('Form was submitted');
        // console.log(this.state)  se imprimian en consola todos los valores guradados en el objeto state
    }
    render(){
        return (
            <div>
                <form onSubmit={this.props.onSubmit}> 
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                        onChange={this.props.onChange} //this.handleChange antes
                        className="form-control" 
                        type="text" 
                        value={this.props.formValues.firstName} //antes el value se sacaba de this.state.atributo, cuando guardabamos los valores en el obj state
                        name="firstName"/>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        value={this.props.formValues.lastName} //ahora los sacamos de formValues, que accede a state y a form, y de ese objeto saca el valor atribuido de acuerdo al nombre del input
                        name="lastName"/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="email" 
                        value={this.props.formValues.email}
                        name="email"/>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        value={this.props.formValues.jobTitle}
                        name="jobTitle"/>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        value={this.props.formValues.twitter}
                        name="twitter"/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                
                {this.props.error && (
                    <p className="text-danger">{this.props.error.message}</p>
                )} 
                </form>
            </div>
        )
    }
}

//la etiqueta form tiene onSubmit, que indica a su prop onSubmit, que se encuentra en BadgeNew
//el onSubmit se lanza cuando damos clic al botón que tiene dentro


//Si hay un error en el state de badgeEdit o badgeNew, como se lo pasamos a los props de BadgeForm
//Dicho error se indicará aquí, dentro del formulario, con this.props.error.message
export default BadgeForm