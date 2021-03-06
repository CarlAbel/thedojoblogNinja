/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import { Link } from "react-router-dom"

const styles = {
  navbar: css`
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    border: 4px solid #f1356d53;
    border-radius: 0 0 1.5rem 1.5rem;
    justify-content: space-between;
    border-top: none;
    background: #fefefe;

    & a {
      margin-left: 16px;
      text-decoration: none;
      padding: 6px;
      transition: 0.2s;
      font-weight: 600;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        height: 2px;
        width: 0%;
        background-color: #f1356d;
        transition: 0.3s;
        opacity: 0;
        border-radius: 100px;
      }

      &:hover {
        color: #f1356d;

        &:after {
          width: calc(100% + 8px);
          opacity: 0.5;
        }
      }
    }
  `,
  heading: css`
    color: #f1356d;
  `,
  links: css`
    margin-left: auto;
  `,
}

const Navbar = () => {
  return (
    <nav css={styles.navbar}>
      <h1 css={styles.heading}>The Shoju Blog 🥷</h1>
      <div className="links" css={styles.links}>
        <Link to="/home">Home</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/Testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About us</Link>
      </div>
    </nav>
  )
}

export default Navbar
