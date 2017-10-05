import React, { Component } from 'react'

import '../styles/components/header.css'

class Header extends Component {
  render() {
    return (
        <header className="header">
            <h1 className="header__title">Guerrila cookery</h1>

            <div className="header__search">
                <p className="header__instructions">
                    type the ingredients separeted by commaonde the box below
                </p>

                <input type="text" className="header__searchbar" onKeyPress={ this.props.onSearchRecipe } />
            </div>
        </header>
    )
  }
}

export default Header
