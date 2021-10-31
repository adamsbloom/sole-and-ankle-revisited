import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <NavDesktop>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </NavDesktop>
        <Side>
          <NavMobile>
            <Icon id="shopping-bag" strokeWidth={2} />
            <Icon id="search" strokeWidth={2} />
            <NavLink onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={2} />
            </NavLink>
          </NavMobile>
        </Side>
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media (max-width: ${(p) => p.theme.tablet}) {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
  }
`;

const NavDesktop = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media (max-width: ${(p) => p.theme.tablet}) {
    display: none;
  }
`;

const NavMobile = styled.nav`
  display: none;
  gap: 40px;
  color: ${COLORS.gray[900]};

  @media (max-width: ${(p) => p.theme.tablet}) {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: ${(p) => p.theme.phone}) {
    gap: 24px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  @media (max-width: ${(p) => p.theme.tablet}) {
    &:first-of-type {
      color: revert;
    }
  }
`;

export default Header;
