import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from './routes'

export default function Routes() {
    return (
        <Router>
            <Switch>
                {
                    routes.map((route, index)=> {
                        return(
                            <Route key={index} path={route.path} component={route.component} exact={route.exact} />
                        )
                    })
                }
            </Switch>
        </Router>
    )
}