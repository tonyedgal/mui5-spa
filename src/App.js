import { Button, styled, Typography } from '@mui/material'
import { Album } from '@mui/icons-material'

function App() {
  /*
   * creating a styled component with emotion
   * add theme with from THemeProvider
   */
  const GrayButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: '#fff',
    margin: 5,
    '&:hover': {
      backgroundColor: 'red',
      color: 'white'
    },
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'white'
    }
  }))

  return (
    <>
      <Button variant='contained' startIcon={<Album />} color='primary'>
        Contained
      </Button>
      <Button variant='contained' color='secondary'>
        Contained
      </Button>
      <Typography variant='h1' color='initial'>
        Testing
      </Typography>
      <GrayButton>Contained</GrayButton>
      <GrayButton>My</GrayButton>
    </>
  )
}

export default App
