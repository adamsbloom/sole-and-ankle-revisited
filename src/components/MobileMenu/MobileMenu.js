/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <Overlay>
        <Content isOpen={isOpen} onDismiss={onDismiss}>
          <Header>
            <DismissButton onClick={onDismiss}>
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
              <Icon id="close" />
            </DismissButton>
          </Header>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <NavLink href="/terms">Terms and Conditions</NavLink>
            <NavLink href="/privacy">Privacy Policy</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </Footer>
        </Content>
      </Overlay>
    </div>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: hsla(220deg, 5%, 40%, 0.8);
`;

const Content = styled(DialogContent)`
  position: fixed;
  top: 0;
  left: 75px;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.header`
  position: relative;
  margin-bottom: auto;
`;

const DismissButton = styled.button`
  position: absolute;
  top: 32px;
  right: 24px;
  border: 0;
  background-color: inherit;
`;

const Nav = styled.nav`
  display: flex;
  padding: 32px;
  flex-direction: column;
  gap: 24px;
  font-size: ${18 / 16}rem;
  text-transform: uppercase;
`;

const NavLink = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none;
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export default MobileMenu;
