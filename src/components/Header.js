import React, { Component } from 'react'

import '../styles/components/header.css'

const ENTER_CHAR_CODE = 13

class Header extends Component {
  render() {
    return (
        <header className="header">
            <h1 className="header__title">Guerrila cookery</h1>

            <div className="header__search">
                <p className="header__instructions">
                    type the ingredients separeted by commaonde the box below
                </p>

                <input type="text" className="header__searchbar" onKeyPress={ (event) => { 
                            if (event.charCode === ENTER_CHAR_CODE && event.target.value) {
                                this.props.onSearchRecipes(event.target.value)
                            }
                        }
                } />
            </div>
        </header>
    )
  }
}

export default Header
