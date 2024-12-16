import CircularProgress from '@mui/material/CircularProgress'
import './Preloader.less'
import React from 'react'


interface PreloaderProps {
  size?: number
}

const Preloader = ({
  size = 100,
}: PreloaderProps) => {
  return <div className="pre-loader">
    <CircularProgress size={ size } />
  </div>
}


export default Preloader
