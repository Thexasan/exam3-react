import { Button } from '@mui/material'
import React from 'react'

const BTN = (props) => {
  return (
    <Button onClick={props.onClick} variant="contained" color="success" >
    {props.btn}
    </Button>
  )
}

export default BTN