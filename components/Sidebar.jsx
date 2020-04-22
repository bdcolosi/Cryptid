import React from "react";
import { Component } from "react";
import styled from "styled-components";
const SideNav = styled.div`
display: flex;
align-items: center;
  height: 100%;
  width: 15%;
position: relative;
flex-direction: column;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 0.75rem 0 !important;
  overflow-y: auto;
  white-space: nowrap;
  overflow-x: hidden;
  background: black;
  opacity: 0.5;
  border-radius: 15px !important;
`;
const SideNavA = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
`;
class Sidebar extends Component {
    render() {
        return (
            <SideNav>
                <SideNavA href="#">Test</SideNavA>
                <SideNavA href="#">Test</SideNavA>
                <SideNavA href="#">Test</SideNavA>
                <SideNavA href="#">Test</SideNavA>
                <SideNavA href="#">Test</SideNavA>
            </SideNav>
        );
    }
}
export default Sidebar;
