import { Box } from '@mui/material'
import { useGetCharactersQuery } from './services/api/thronesApiSlice'
import CharactersList from './services/ui/components/CharactersList'
import LoaderContainer from './services/ui/components/LoaderContainer'

function App() {
  const { data: charactersData, isLoading: isLoadingCharacters } = useGetCharactersQuery()

  return (
    <Box>
      <LoaderContainer isLoading={isLoadingCharacters}>
        <CharactersList characters={charactersData} />
      </LoaderContainer>
    </Box>
  )
}

export default App
