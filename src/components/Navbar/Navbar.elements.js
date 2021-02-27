import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;

  &:hover {
    color: yellow;
  }
`;

export const NavbarContainer = styled(Container)`
  height: 80px;
  display: flex;
  justify-content: space-between;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: pink;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate() (-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 90vh;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: pink;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 991px) {
    width: 100%;
    text-align: center;
    padding: 2rem;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

export const NavBtnLink = styled(Link)`
  @media screen and (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
    padding: 8px 16px;
    border: none;
    outline: none;
  }
`;
