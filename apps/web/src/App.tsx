import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'

import { useBoundStore } from './store/bound.store'
import { AUTH_STATUS } from './consts'
import { useAuth } from './auth/hooks/useAuth'

import * as routers from './app/router/app.router'
import { Spinner } from './common/components/ui/Spinner'

function App() {
  const userStatus = useBoundStore(state => state.status)

  const { onCheckAuthToken } = useAuth()

  useEffect(() => {
    onCheckAuthToken()
  }, []);

  if (userStatus === AUTH_STATUS.CHECKING) return <Spinner />

  const routerAuthorize = userStatus === AUTH_STATUS.AUTHENTICATED
    ? routers.privateRouter
    : routers.router

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <RouterProvider router={createBrowserRouter(routerAuthorize)} />
    </>
  )
}

export default App