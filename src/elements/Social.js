import tw, { styled } from "twin.macro"

export const Anchor = styled.a`
  position: relative;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  text-decoration: none;
  border: 1px solid #fff;
  margin: 10px 0 0;

  &:hover {
    background: #fff;
  }
  @media (max-width: 767px) {
    margin: initial;
    margin-right: 10px;
  }
`
export const Li = styled.li`
  list-style: none;
`
