/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"

function App() {
  const styles = {
    content: css`
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
    `,
  }
  return (
    <div className="App">
      <Navbar />
      <div css={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
