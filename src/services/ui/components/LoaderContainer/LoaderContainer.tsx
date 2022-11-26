import { Box, CircularProgress } from '@mui/material'
import type { ReactNode } from 'react'

export type LoaderContainerProps = {
  isLoading?: boolean
  children: ReactNode | JSX.Element | JSX.Element[]
  loadingSize?: string
}

function LoaderContainer({ isLoading, children, loadingSize }: LoaderContainerProps) {
  return isLoading ? (
    <Box
      display="flex"
      height="100%"
      width="100%"
      flexGrow={1}
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress size={loadingSize} />
    </Box>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  )
}

export default LoaderContainer
