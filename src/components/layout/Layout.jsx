import { Stack } from '@mui/material'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Stack direction='row' justifyContent='space-between'>
        <Sidebar sx />
        <Feed sx />
        <Rightbar sx />
      </Stack>
    </>
  )
}

export default Layout
