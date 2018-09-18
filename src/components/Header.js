import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import { IconTwitter, IconFacebook, IconLinkedIn } from './SocialIcons';
import Logo from '../images/logo.svg';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.tfBlue};
  color: #fff;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-areas: 'title menu';
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  margin: 0 auto;
  max-width: 960px;
  position: relative;

  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    align-items: end;
    grid-template-areas:
      'logo social'
      'logo nav';
    grid-template-rows: 100px 60px;
    grid-template-columns: 360px 1fr;
  }
`;

const HeaderLogo = styled(Link)`
  display: none;
  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    align-items: end;
    display: grid;
    grid-area: logo;

    img {
      height: 130px;
    }
  }
`;

const SocialLinks = styled.div`
  display: none;
  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    display: grid;
    grid-area: social;
    justify-content: right;
  }
`;

const NavLinks = styled.nav`
  display: none;
  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    align-content: end;
    cursor: pointer;
    display: grid;
    grid-area: nav;
    grid-auto-flow: column;
    justify-content: right;
  }
`;

const NavLink = styled.div`
  color: #ffffff;
  padding: 15px 10px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  &:active,
  &:hover {
    background-color: ${props => props.theme.sbtciBlue};
  }
`;

const SubNavLinks = styled.div`
  align-items: center;
  box-shadow: 0 2px 2px ${props => props.theme.darkGray};
  padding: 0.5rem;
  background-color: #fff;
  display: ${props => (props.active ? 'block' : 'none')};
  max-width: 960px;
  position: absolute;
  right: 0%;
  top: 100%;
  width: 100%;
`;

const SubNavLink = styled(Link)`
  color: ${props => props.theme.tfBlue};
  display: block;
  padding: 0.5rem;
  text-align: left;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.sbtciBlue};
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: null,
    };
  }

  toggleMenu = type => {
    if (type !== null) {
      if (this.state.openMenu === type) {
        this.setState({ openMenu: null });
      } else {
        this.setState({ openMenu: type });
      }
    } else {
      this.setState({ openMenu: null });
    }
  };

  render() {
    const RankingsLinks = this.props.taxTypes.map(t => {
      let r = `/tax/${t.id}/`;
      if (t.id === 'total') {
        r = '/';
      }
      return (
        <Link
          className="sbtci-header-nav-link"
          key={`nav-tax-${t.id}`}
          onClick={() => this.toggleMenu(null)}
          to={r}
        >
          {t.name}
        </Link>
      );
    });

    const StateLinks = this.props.USStates.map(s => {
      return (
        <SubNavLink
          key={`nav-state-${s.name.replace(/\s/g, '-').toLowerCase()}`}
          onClick={() => this.toggleMenu(null)}
          to={`/state/${s.name.replace(/\s/g, '-').toLowerCase()}/`}
        >
          {s.name}
        </SubNavLink>
      );
    });

    return (
      <StyledHeader>
        <HeaderContainer>
          <HeaderLogo to="/">
            <img src={Logo} alt="State Business Tax Climate Index" />
          </HeaderLogo>
          <SocialLinks>stuff</SocialLinks>
          <NavLinks>
            <NavLink onClick={() => this.toggleMenu('rankings')}>
              Rankings
            </NavLink>
            <NavLink onClick={() => this.toggleMenu('states')}>States</NavLink>
            <NavLink>Methodology</NavLink>
          </NavLinks>
          <SubNavLinks
            active={this.state.openMenu === 'states'}
            style={{ columnCount: 5, columnGap: '1rem' }}
          >
            {StateLinks}
          </SubNavLinks>
          <SubNavLinks active={this.state.openMenu === 'rankings'}>
            {RankingsLinks}
          </SubNavLinks>
        </HeaderContainer>
      </StyledHeader>
    );
  }
}

export default Header;
