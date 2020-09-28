import React from 'react'

import api from '../api'
import BadgeDetails from './BadgeDetails'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageLoading'

import './styles/BadgeDetails.css'

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined, //al incializar la data, debe estar indefinida
        modalIsOpen : false
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error})
        }
    }

    handleOpenModal = e => {
        this.setState({ modalIsOpen : true})
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen : false})
    }

    handleDeleteBadge = async () => {
        this.setState({ loading: true, error: null})

        try {
            await api.badges.remove(this.props.match.params.badgeId) //sacamos el id a través de la url con match y params
            this.setState({ loading: false})

            this.props.history.push('/badges') //nos redireccionará a la página badges

        } catch (error) {
            this.setState({ loading: false, error: error})
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error.message} />
        }
        
        return(
            <BadgeDetails 
            onCloseModal={this.handleCloseModal} 
            onOpenModal={this.handleOpenModal}
            modalIsOpen={this.state.modalIsOpen}
            onDeleteBadge={this.handleDeleteBadge}
            badge={this.state.data}/>
        )
    }
}

export default BadgeDetailsContainer

//col-6 indica que cada una de las columnas va a medir la mitad de la página

//la petición de hace al métood read de api, el cual recibe el id del badge, lo obtenemos mediante la propiedad de React Router llamada match
//la cual entra a los parámetros de su ruta y accedemos a sus variables, le indicamos en específico la que queremos

//para escribir el div con la clase container que tiene una fila y 2 columnas, escribimos lo siguiente:
//container>.row>.col*2

//En las opción de borrar el badge, no pusimos un link, debido a que este bptón, no redirecciona a ora página