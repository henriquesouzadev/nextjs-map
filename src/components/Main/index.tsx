import React from 'react'
import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Logo" />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration src="./img/hero-illustration.svg" alt="Illustration" />
    </S.Wrapper>
  )
}

export default Main
