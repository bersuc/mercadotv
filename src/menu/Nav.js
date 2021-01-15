import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import { BiSearch } from 'react-icons/bi'

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark justify-content-between">
                <Link to="/">
                    <div className="navbar-brand">Home</div>
                </Link>
                <Link to="/books">
                    <div className="navbar-brand">Livros</div>
                </Link>
                <Link to="/contact">
                    <div className="navbar-brand">Contato</div>
                </Link>
                <Link to="/about">
                    <div className="navbar-brand">Sobre</div>
                </Link>
                <Link to="/apoie">
                    <div className="navbar-brand">Apoie</div>
                </Link>
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Buscar"
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        <BiSearch cursor="pointer" />
                    </button>
                </form>
            </nav>
        </>
    )
}
