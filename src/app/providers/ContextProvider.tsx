"use client"

import { Props } from 'next/script'
import React from 'react'
import { GlobalProvider } from "../context/GlobalProvider.js";

function ContextProvider({children} : Props) {
  return (
    <GlobalProvider>
      {children}
    </GlobalProvider>
  )
}

export default ContextProvider;