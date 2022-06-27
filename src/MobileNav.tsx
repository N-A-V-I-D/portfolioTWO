import {Drawer, Box, Typography, IconButton, Icon } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import './mobileNav.css'
import { grey } from '@mui/material/colors';
import Sidebar from './Navbar';
import './navbar.css'
import {links} from './navbarlinks'
export const MuiDrawer = () => {
  const [isDrawrerOpen, setIsDrawerOpen] = useState(false)
  const [isOpen, setOpen] = useState(false)

  return (
    <>
   
    <div id='mobileNav'>
    <IconButton z-index='3' size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
      {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
      <MenuIcon sx={{ color: grey[500] }}id='mButt' style={{ fontSize: 50 }}/>
      </IconButton>
      <div>
        <Drawer disableScrollLock={true}
        id='drawer' z-index='-1' anchor='left' open={isDrawrerOpen} onClose={() => setIsDrawerOpen(false)}>
          <Box id='drawer' z-index='1' p={2} width='250px' textAlign='center' role='presentation'>
          {links.map((link) => {
            <a id='link2' href={link.url} key={link.id}>{link.text}</a>
          })}
            
          </Box>
        </Drawer>
        
      </div>
     
    </div>
    </>
  )
}
