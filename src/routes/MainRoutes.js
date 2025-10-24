import { PATH } from './path'
import { pathElement } from './path'
import Layout from '../components/layout/Layout'
import React from 'react'
import { useRoutes } from 'react-router-dom'

export default function MainRoutes() {
  const authenticated = localStorage.getItem('userInfo')

  // Khởi tạo routes
  const currentsRouter = pathElement.map((item) => {
    const LayoutWeb =
      item.path !== PATH.LOGIN && item.path !== PATH.REGISTER
        ? Layout
        : React.Fragment
    return {
      path: item.path,
      element: <LayoutWeb>{item.element}</LayoutWeb>,
    }
  })

  // Log sau khi currentsRouter đã được tạo xong
  const element = useRoutes(currentsRouter)
  return element
}
