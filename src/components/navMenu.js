import React from "react"
import { NavMenuWrapper } from "../elements"
import "twin.macro"
import { styled } from "twin.macro"

export const NavMenu = ({ State }) => (
  <NavMenuWrapper State={State}>
    <ul tw="relative flex flex-col ">
      <Li>
        <Anchor>Home</Anchor>
      </Li>
      <Li>
        <Anchor>About</Anchor>
      </Li>
      <Li>
        <Anchor>Services</Anchor>
      </Li>
      <Li>
        <Anchor>Portfolio</Anchor>
      </Li>
      <Li>
        <Anchor>Contact</Anchor>
      </Li>
    </ul>
  </NavMenuWrapper>
)

const Li = styled.li`
  list-style: none;
`

const Anchor = styled.a`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
`
