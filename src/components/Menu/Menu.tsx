import * as React from 'react';
import './Menu.css';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

export class Menu extends React.Component {

  render() {
    return(
      <div id="skinny__reports__menu">
        <ul>
          <Link to="/">
            <li><MdHome/></li>
          </Link>
        </ul>
      </div>
    );
  }
}
