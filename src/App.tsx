import { useGetCharactersQuery } from './services/api/thronesApiSlice'

function App() {
  const { data: gameOfThronesCharacters, isLoading: isLoadingCharacters } = useGetCharactersQuery()
  console.log('gameOfThronesCharacters', gameOfThronesCharacters)

  return (
    <div className="App">{isLoadingCharacters ? <h1>loading...</h1> : <h1>characters</h1>}</div>
  )
}

export default App
