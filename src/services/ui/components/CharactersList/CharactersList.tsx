import { Box, Button, List, ListItem, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import { CharactersType } from '../../../api/thronesApiSlice'

export interface CharactersListProps {
  characters: CharactersType[] | undefined
}

export default function CharactersList({ characters }: CharactersListProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<CharactersType>(characters![0])

  return (
    <Box display="flex" width="100%" p={10} gap={10}>
      <Paper sx={{ flex: 1 }}>
        <List>
          {characters?.map((character) => (
            <ListItem key={character.id}>
              <Button onClick={() => setSelectedCharacter(character)}>{character.fullName}</Button>
            </ListItem>
          ))}
        </List>
      </Paper>

      <Box sx={{ flex: 2 }}>
        <Paper sx={{ padding: '2.5rem' }}>
          <Box display="flex" justifyContent="center">
            <Box
              component="img"
              mb="3rem"
              sx={{
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src={selectedCharacter.imageUrl}
            />
          </Box>

          <Typography>Name: {selectedCharacter.firstName}</Typography>
          <Typography>Last name: {selectedCharacter.lastName}</Typography>
          <Typography>Family: {selectedCharacter.family}</Typography>
          <Typography>Title: {selectedCharacter.title}</Typography>
        </Paper>
      </Box>
    </Box>
  )
}
