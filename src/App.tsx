import { Box } from '@mui/material'
import { useGetCharactersQuery } from './services/api/thronesApiSlice'
import CharactersList from './services/ui/components/CharactersList'
import LoaderContainer from './services/ui/components/LoaderContainer'

function App() {
  const { data: gameOfThronesCharacters, isLoading: isLoadingCharacters } = useGetCharactersQuery()
  console.log('gameOfThronesCharacters', gameOfThronesCharacters)

  return (
    <Box>
      <LoaderContainer isLoading={isLoadingCharacters}>
        <CharactersList />
      </LoaderContainer>
    </Box>
  )
}

export default App
