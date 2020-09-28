import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader'
import api from '../api'

class Badges extends React.Component{
    state = {
        loading: true,
        error: null, 
        data : undefined
    }
    
    componentDidMount(){ //en el componentDidMount es el mejor lugar para inicializar una llamada HTTP
        this.fetchData()

        //this.IntervalId = setInterval(this.fetchData, 5000) //POLLING, técnica que consiste en que cada cierto tiempo, actualicemos estado, esto se hace constantemente
    }

    componentWillMount(){
        //clearInterval(this.IntervalId) //cuando el componente haga su desmontaje, se borrará el intérvalo
    }

    fetchData = async () => {
        this.setState({ loading:true, error:null })

        try {
            const data = await api.badges.list() //api.badges.list regresa una promesa, list hace una petición GET, trae todos los datos guardados, y los asigna a
            this.setState({ loading:false, data:data })
        } catch (error) {
            this.setState({ loading:false, error:error })
        }
    }

    render(){

        if(this.state.loading && !this.state.data){ //cuando la página esté en loading, y cuando no haya datos en el state...
            return <PageLoading /> //es ahí cuando se renderizará el componente del loader, de lo contrario, no se renderizará, es decir, si se recarga pero el state ya tiene datos, no se renderiza
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>
        }

        return(
            <React.Fragment>

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} alt="" className="Badges_conf-logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/> 
                            
                            {this.state.loading && <MiniLoader />}
                        </div> 
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

//El botón ya tiene especificado que debe ir hacia la direccion badges/new de BadgeNew
//Anteriormente era una etiqueta <a> pero se reemplazó por la etiqueta Link, su propiedad to hace referencia a href
//Es decir, hacia donde direcciona

//Se eliminó Navbar debido a que ahora representa un Layout el cual es contenedor de las demás páginas

//BadgesList recibe como prop el data que obtuvimos mediante la petición GET 

//Implementamos el MiniLoader, para que cuando estemos recargando la página automáticamente, no se renderice el componente de loader el cual impide al usuario interactuar con la página
export default Badges 