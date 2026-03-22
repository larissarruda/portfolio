import React from 'react'

const ColorsContext = React.createContext(null)

export const Colors = () => {
    /* laranja: f15400  azul-escuro: #0b1925 azul escuro: #04045e meio preto: #242834*/
        const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: 'text-gray-800 border-2 border-[#f15400] hover:text-white',
        decorativeCircle: 'bg-orange-400 opacity-20'
    }
    /* verde: f15400  azul claro: #0b1925 azul escuro: #04045e meio preto: #242834*/
    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-200',
        buttonSecondary: 'text-white border-2 border-[#f15400] hover:bg-[#f15400] hover:text-[#04045e]',
        decorativeCircle: 'bg-[#04045e] opacity-10'
    }

  return (
    <ColorsContext.Provider value={{lightTheme, darkTheme}}>
        {children}
    </ColorsContext.Provider>
  )
}
