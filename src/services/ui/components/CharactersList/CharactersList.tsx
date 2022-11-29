import { Box, List, ListItem } from '@mui/material'
import { CharactersType } from '../../../api/thronesApiSlice'

export interface CharactersListProps {
  characters: CharactersType[] | undefined
}

export default function CharactersList({ characters }: CharactersListProps) {
  return (
    <Box>
      <List>
        <ListItem>item</ListItem>
        <ListItem>item</ListItem>
        <ListItem>item</ListItem>
      </List>
    </Box>
  )
}
