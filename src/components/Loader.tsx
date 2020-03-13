import React from 'react'
import loader from '~Assets/img/portal.gif'

interface LoaderConfigurationType {
  height: number
  width: number
}

const Loader = (loaderConfiguration: LoaderConfigurationType) => {
  const { height, width } = loaderConfiguration
  return (
    <img height={height} width={width} src={loader} alt="loading..." />
  )
}

export default Loader
