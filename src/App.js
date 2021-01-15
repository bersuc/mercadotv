import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Nav from './menu/Nav'
import Home from './pages/Home'
import Apoie from './pages/Apoie'
import Contact from './pages/Contact'
import Books from './pages/Books'
import About from './pages/About'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/books" component={Books} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/apoie" component={Apoie} />
                    <Route path="/*" component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
}

function NotFound() {
    return <span className="align-middle">404 - Page Not Found</span>
}

export default App
