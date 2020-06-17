import tw, { styled } from "twin.macro"

export const NavMenuWrapper = styled.div.attrs(props => ({
  State: props.State,
}))`
  position: fixed;
  top: 0;
  right: ${props => (props.State ? "0" : "-400px")};
  width: 400px;
  height: 100vh;
  background: #40c3ff;
  z-index: 1;
  display: grid;
  place-items: center;
  transition: 0.5s;
  @media (max-width: 767px) {
    width: 250px;
  }
`
