import React, { createContext, useEffect, useState } from 'react'

export const TipoContext = createContext()

export const TipoStorage = ({children}) => {
  const [ editTarget, setEditTarget ] = useState(null)

  return (
    <TipoContext.Provider value={{editTarget, setEditTarget}}>
      {children}
    </TipoContext.Provider>
  )
}