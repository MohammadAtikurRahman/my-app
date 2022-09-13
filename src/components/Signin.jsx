import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';


export default function Signin() {
  return (
<FormGroup> 
    <div>

      <Box

    
        component="form"
        sx={{
          

          '& > :not(style)': { m: 1, width: '20ch' } 
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Name" variant="outlined"  size="small"/>


      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '20ch' }, 
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Password" variant="outlined"  size="small" />


      </Box>

      <Button variant="contained"  sx={{ ml: 4}} >Sign in </Button>
      <FormControlLabel   sx={{  p:2, color: 'text.secondary' } }  control={<Checkbox defaultChecked />} label="Remember me" />

    </div>


    </FormGroup>


  );
}
