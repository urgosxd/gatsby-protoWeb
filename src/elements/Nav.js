import tw, { styled } from "twin.macro"

export const Toggle = styled.div.attrs(props => ({
  State: props.State,
}))`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: ${props => (props.State ? "50%" : "7px")};
    left: ${props => (props.State ? "50%" : "")};
    transform: ${props =>
      props.State ? "translate(-50%,-50%) rotate(45deg)" : ""};
    width: 100%;
    height: 2px;
    background: #fff;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 7px;
    top: ${props => (props.State ? "50%" : "")};
    left: ${props => (props.State ? "50%" : "")};
    transform: ${props =>
      props.State ? "translate(-50%,-50%) rotate(-45deg)" : ""};
    width: 100%;
    height: 2px;
    background: #fff;
  }
`
