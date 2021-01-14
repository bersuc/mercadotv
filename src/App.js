import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Nav from './menu/Nav'
import Home from './pages/Home'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/entrevistas" component={About} />
                    <Route exact path="/contact" component={About} />
                    <Route exact path="/about" component={Dashboard} />
                    <Route exact path="/apoie" component={Dashboard} />
                </Switch>
            </div>
        </Router>
    )
}

function About() {
    return (
        <div>
            <h2> About </h2>
        </div>
    )
}

function Dashboard() {
    return (
        <div>
            <h2> Dashboard </h2>
        </div>
    )
}

export default App
