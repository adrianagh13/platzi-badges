import React from 'react'
import md5 from 'md5'

function Gravatar (props){ //cuando un componente recibe sus props es porque queremos hacer uso de ellos dentro del componente
    const email = props.email
    const hash = md5(email || 'emial')

    return (
        <img className={props.className} src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="Avatar"/>
    )
}

export default Gravatar

//este componente sivre para añadir un gravatar, recuerda que gravatar funciona si le añadimos un email.
//ese email se convierte a hash
//por ello, aqui recibimos el email que está en los props del componente, que a la vez es un prop de Badge al momento de crear un BadgeNew
//aquí lo recibimos y lo convertimos a hash con md5
//retornamos un img cuyo classname es el classname de sus props, (Badge__avatar)
//Y el src de la imagen es el link de gravatar con un hash en el link, solo funciona si ese email esta en gravatar