import React from 'react';

import header from '../images/platziconf-logo.svg'
import './styles/BadgeEdit.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import PageLoading from '../components/PageLoading'

class BadgeEdit extends React.Component{
    state = { 
        loading: false, 
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: ' ',
        }
    };

    componentDidMount(){
        this.fetchData()

    }

    fetchData = async (e) => {
        this.setState({loading: true, error: null}) //antes de que se haga la petición, la página se está cargando

        try{
            const data = await api.badges.read(this.props.match.params.badgeId) //el método read toma el id del badge que nos interesa, para extraer ese id usamos el prop de los componentes que usan Route llamado match, accedemos a las variables de la RUTA ESPECIFICADA EN ROUTE mediante el obj params, luego indicamos el obj en cuestión que es badgeId
            this.setState({ loading:false, form: data}) //guardamos los datos en form 
        }catch(error){
            this.setState({loading: false, error: error})
        }
    }

    handleChange = e => {
        this.setState({
            form: { //en este obj form, se irán añadiendo los estados 
                // [e.target.name]: e.target.value no lo implementamos de esta manera porque se sobreescriben los valores
                ...this.state.form, //se desesctructura el objeto para que "caigan" los valores y no se sobreescriban
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault() //detenemos el submit para que el navegador no lo envíe a x página
        this.setState({ loading:true, error:null })

        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form) //hacemos la petición con el método UPDATE de api, hace una petición PUT, este método se encarga de actualizar contenidos
            this.setState({ loading: false})

            this.props.history.push('/badges') //utilizamos un método de los props llamado history, el cual nos servirá para mandar nuestra página a otra dirección
        }catch (error){
            this.setState({ loading: false, error: error})
        }
    }
    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        return (
            <React.Fragment>                
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt=""/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge //badge puede disponer fácilmente de los datos almacenados en el obj form del obj state 
                                firstName={this.state.form.firstName || 'FIRST_NAME'} 
                                lastName={this.state.form.lastName || 'LAST_NAME'} 
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} 
                                twitter={this.state.form.twitter || 'TWITTER'} 
                                email={this.state.form.email}
                                avatarUrl="https://s.gravatar.com/avatar/7fe4dd1c42563678b98d86bb329c316a?s=80"
                            />
                        </div>

                        <div className="col">
                        <h1>Edit</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


//BadgeForm tiene como props el evento onChange, el cual lanzará su función handleChange, 
//En el código de BadgeForm podemos ver que cada que a los inputs se les genere el evento onChange, se direcciona hacia el evento onChange de SUS PROPS
//Por lo cual, cada que haya un cambio en los inputs, se lanzará esta función handleChange
//La cual establece que se hara setState al objeto state, que tiene dentro un obj form. Desestrucutra dicho objeto y se le añaden los valores: añade el nombre del input y su value

//FormValues es igual a lo que contiene el obj form del obj state

//Se eliminó Navbar debido a que ahora representa un Layout el cual es contenedor de las demás páginas

//OPERADOR OR || : Este operador lo podemos utilizar para evaluar 2 o más argumentos, si no se cumple el primero, entonces se ejecuta el siguiente

export default BadgeEdit;
