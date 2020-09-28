import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew.js'
import BadgeDetails from '../pages/BadgeDetailsContainer'
import BadgeEdit from '../pages/BadgeEdit'
import NotFound from '../pages/NotFound'

function App() {
    return (
        <BrowserRouter>
            <Layout> {/*Layout representa la Navbar, agregamos las páginas para que aparezcan dentro de Navbar, para eso en Layout se utiliza el props.children*/}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App

//Layout es el contenedor de las demás páginas, por ello las posicionamos dentro de su etiqueta

//utilizamos exact en path debido a que React busca la primer coincidencia, exact path indica que debe ser esa ruta exactamente