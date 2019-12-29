import * as React from 'react';
import './Menu.css';
import { TiHomeOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

export class Menu extends React.Component {

  render() {
    return(
      <div id="skinny__reports__menu">
        <ul>
          <Link to="/">
            <li><TiHomeOutline /></li>
          </Link>
        </ul>
      </div>
    );
  }
}
