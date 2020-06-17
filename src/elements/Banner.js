import tw, { styled } from "twin.macro"

export const BannerWrapper = styled.section`
  grid-column: 2 / span 6;
`
export const UlSocial = styled.ul`
  right: 100px;
  @media (max-width: 767px) {
    bottom: 50px;
    right: initial;
  }
`
