import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends PureComponent {
  state = {

  };

  links = [
    {
      text: 'Counter',
      props: {
        to: '/counter',
      }
    },
    {
      text: 'Todos',
      props: {
        to: '/todos',
      }
    }
  ]

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps) {
  };

  render() {
    return (
      <header id="app-header" role="navigation">
        <nav>
          <div>
            <NavLink
              exact
              to="/"
              className="nav-item"
              activeClassName="selected-nav"
            >
              Home
            </NavLink>
          </div>
          <div className="pull-right">

            <div className="">
              { this.links.map(({ text, props }) =>
                <NavLink
                  key={ text }
                  className="nav-item"
                  activeClassName="selected-nav"
                  { ...props }
                >
                  { text }
                </NavLink>
              ) }
            </div>

          </div>
        </nav>
      </header>
    );
  }
};

export default Header;
