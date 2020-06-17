import React, { useState } from "react"
import "twin.macro"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import { Baner, Nav, Content, Social, NavMenu } from "../components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Consulta {
      BG: file(extension: { eq: "jpg" }, relativePath: { eq: "bg.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [toggle, usetoggle] = useState(false)

  const Imagen = data.BG

  console.log(Imagen)
  return (
    <>
      <Main tw="relative w-full min-h-screen" image={Imagen} State={toggle}>
        <Baner>
          <Nav change={usetoggle} State={toggle} />
          <Content />
          <Social />
        </Baner>
      </Main>
      <NavMenu State={toggle} />
    </>
  )
}
export default IndexPage

const Main = styled.main.attrs(props => ({
  State: props.State,
}))`
  display: grid;
  grid-template-columns: minmax(60px, 1fr) repeat(6, minmax(60px, 190px)) minmax(
      60px,
      1fr
    );
  background-image: url(${props =>
    !!props.image.childImageSharp
      ? props.image.childImageSharp.fluid.src
      : null});
  background-size: cover;
  transform: ${props => (props.State ? "translateX(-400px)" : "")};
  transition: 0.5s;

  @media (max-width: 767px) {
    display: flex;
    transform: ${props => (props.State ? "translateX(-250px)" : "")};
  }
`
