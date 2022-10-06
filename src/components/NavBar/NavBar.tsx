import { AppBar, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Empleamos Temporales Test
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
