import React from "react"
import { BannerWrapper } from "../elements"
import "twin.macro"
import { Linkedin, Facebook, Instagram } from "@styled-icons/boxicons-logos"
import { useStaticQuery, graphql } from "gatsby"
import { Toggle } from "../elements/Nav"

export const Baner = ({ children }) => (
  <BannerWrapper tw=" flex items-center">{children}</BannerWrapper>
)

export const Nav = ({ change, State }) => {
  return (
    <header tw="absolute top-0 left-0 w-full flex justify-between py-10 px-24 z-50 transition duration-500 ">
      <a tw="relative font-bold text-white no-underline text-4xl">LOGO</a>
      <Toggle onClick={() => change(!State)} State={State} />
    </header>
  )
}

export const Content = () => (
  <div Tn="Contenido" tw="max-w-xl ">
    <h2 tw="text-white text-4xl ">
      Hello World,
      <br />
      Soy <span tw="text-blue-400 text-4xl ">Josue Cornejo Cuba</span>
    </h2>
    <p tw="text-xl text-white font-light ">
      Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
      demostraciones de tipografías o de borradores de diseño para probar el
      diseño visual antes de insertar el texto final.
    </p>
    <a tw="relative inline-block mt-5 bg-white text-black py-2 px-8 no-underline text-xl font-medium ">
      Know more
    </a>
  </div>
)

export const Social = () => (
  <ul>
    <li>
      <a>
        <Facebook />
      </a>
    </li>
    <li>
      <a>
        <Instagram />
      </a>
    </li>
    <li>
      <a>
        <Linkedin />
      </a>
    </li>
  </ul>
)
