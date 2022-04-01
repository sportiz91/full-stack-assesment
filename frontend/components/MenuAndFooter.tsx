import React, { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const MenuAndFooter = ({ children }: Props): JSX.Element => {
  return (
    <div>

      <header>

      </header>
    
    {children}
    
    <footer>

    </footer>

  </div>
  )
}

export default MenuAndFooter