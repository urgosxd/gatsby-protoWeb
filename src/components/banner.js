import React from "react"
import { BannerWrapper, Toggle, Anchor, Li, UlSocial } from "../elements"
import "twin.macro"
import { Linkedin, Facebook, Instagram } from "@styled-icons/boxicons-logos"

export const Baner = ({ children }) => (
  <BannerWrapper tw=" flex items-center lg:py-0 lg:px-0 px-12  ">
    {children}
  </BannerWrapper>
)

export const Nav = ({ change, State }) => {
  return (
    <header
      tw="absolute top-0 left-0 w-full flex justify-between py-8 lg:py-10 lg:px-24 px-16
     z-50 transition duration-500 "
    >
      <a tw="relative font-bold text-white no-underline text-4xl">LOGO</a>
      <Toggle onClick={() => change(!State)} State={State} />
    </header>
  )
}

export const Content = () => (
  <div Tn="Contenido" tw="max-w-xl ">
    <h2 tw="text-white lg:text-4xl text-3xl ">
      Hello World,
      <br />
      Soy{" "}
      <span tw="text-blue-400 lg:text-4xl text-3xl">Josue Cornejo Cuba</span>
    </h2>
    <p tw="lg:text-xl text-base text-white font-light ">
      Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
      demostraciones de tipografías o de borradores de diseño para probar el
      diseño visual antes de insertar el texto final.
    </p>
    <a tw="relative inline-block mt-5 bg-white text-black py-2 px-8 no-underline lg:text-xl text-base font-medium ">
      Know more
    </a>
  </div>
)

export const Social = () => (
  <UlSocial tw="absolute flex md:flex-col flex-row  ">
    <Li tw="list-none ">
      <Anchor>
        <Facebook
          size="25px"
          style={{ filter: "invert(1)", mixBlendMode: "difference" }}
        />
      </Anchor>
    </Li>
    <Li>
      <Anchor>
        <Instagram
          size="25px"
          style={{ filter: "invert(1)", mixBlendMode: "difference" }}
        />
      </Anchor>
    </Li>
    <Li>
      <Anchor>
        <Linkedin
          size="20px"
          style={{ filter: "invert(1)", mixBlendMode: "difference" }}
        />
      </Anchor>
    </Li>
  </UlSocial>
)
