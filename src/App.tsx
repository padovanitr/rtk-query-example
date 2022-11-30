import { AppContainer } from './App.style'
import { useGetCharactersQuery } from './services/api/thronesApiSlice'
import CharactersList from './services/ui/components/CharactersList'
import LoaderContainer from './services/ui/components/LoaderContainer'

function App() {
  const { data: charactersData, isLoading: isLoadingCharacters } = useGetCharactersQuery()

  return (
    <AppContainer>
      <LoaderContainer isLoading={isLoadingCharacters}>
        <CharactersList characters={charactersData} />
      </LoaderContainer>
    </AppContainer>
  )
}

export default App
