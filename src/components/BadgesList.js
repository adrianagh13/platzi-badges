import React from 'react'
import './styles/BadgesList.css'
import { Link } from 'react-router-dom'
import BadgesListItem from './BadgesListItem'

function useSearchBadges(badges){
    const [query, setQuery] = React.useState(" ")
    const [ filteredBadges, setFilteredBadges ] = React.useState(badges)

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
        }) 
        setFilteredBadges(result)

    }, [badges, query])

    return {query, setQuery, filteredBadges}
}

function BadgesList (props){
    const badges = props.badges

    const { query, setQuery, filteredBadges } = useSearchBadges(badges)

    if(filteredBadges.length === 0){
        return(
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }} 
                    />
                </div>
                <h3>No results were found</h3>
                <Link to="/badges/new" className="btn btn-primary">
                    Create new badge
                </Link>
            </div>
        )
    }
    return(
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input 
                    type="text" 
                    className="form-control"
                    value={query}
                    onChange={(e) => { 
                        setQuery(e.target.value) //set query actúa como setState, toma el evento evaluado, que es onChange, y estatblece en el edo que su valor, es el valor del evento 
                    }} 
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map(badge => {
                    return (
                        <li key={badge.id} className="list-group-item">
                            <Link 
                                className="text-reset text-decoration-none" 
                                to={`/badges/${badge.id}`}
                            >
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    ) 
}

export default BadgesList

//En la sección del listado de los datos, se recorre el objeto badges que se encuentra en los props del componente
//se hace un map al arreglo dentro del objeto, el cual recorre todas las posiciones, a cada posicion se le llama 'badge'
//map devuelve un elemento de lista <li> que contiene el primer nombre y segundo nombre de cada objeto
//Para ser más específicos se agrega un key a cada list item que los hace únicos, esto se logra utilizando el id de cada objeto o persona

//Al hacer hover sobre cada badge de badgesList, nos redireccionará hacia badge/id-del-badge, así es como logramos entrar a badgeDetails, para visualizar los detalles de cada badge 

