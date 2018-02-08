import React, { Component } from 'react';
import './search.css'
import logo from '../logo.svg';

class Searchbar extends Component {
    /*
        todo: insert algolia api, get credentials, add objects and ui.
        is sorting done with algolia or from the server(select * from ...)?
    */
    render(){
        return(
            <div>
                <input type = "text" placeholder = "Type here to filter Employees" onKeyUp="search"/>
            </div>
        );
    }
}

export default Searchbar;