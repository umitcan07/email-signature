import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'
import { useEffect } from 'react'

import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => {
    useEffect(() => {
      // Enable dark mode by default
      document.documentElement.classList.add('dark')
    }, [])

    return (
      <>
        <Header />
        <Outlet />
        <TanstackDevtools
          config={{
            position: 'bottom-left',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </>
    )
  },
})
