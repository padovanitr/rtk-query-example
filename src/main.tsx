import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './services/store/store'
import baseTheme from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
