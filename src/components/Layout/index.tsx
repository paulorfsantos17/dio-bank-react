import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

interface ILayout {
  children?: React.ReactNode
}

export const Layout = ({children}: ILayout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
