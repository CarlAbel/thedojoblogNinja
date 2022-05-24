/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Link } from "react-router-dom"

// import FeatherIcon from 'feather-icons-react';

const BlogList = ({ blogs, title }) => {
  const styles = {
    preview: css`
      box-shadow: 0rem 0.5rem 2rem -0.5rem #f1356d30;
      margin: 2rem 0;
      padding: 2.5rem 1.5rem;
      border-radius: 1.5rem;
      cursor: pointer;
      border: 3px solid transparent;
      transition: 0.3s;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover {
        border-color: #f1356d;
      }
      & a {
        text-decoration: none;
      }

      & p {
        opacity: 0.5;
      }
    `,
    header: css`
      margin-top: 3rem;
    `,
    delete: css`
      background: transparent;
      border: none;
      border-radius: 16px;
      height: 3rem;
      width: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.3s;

      & svg {
        transition: 0.3s;
      }

      &:hover {
        background: #f1356d30;
        color: #f1356d;

        & svg {
          color: #f1356d;
          stroke: #f1356d;
        }
      }
    `,
  }

  return (
    <div>
      <h1 css={styles.header}>{title}</h1>
      {blogs.map((blog) => (
        <div css={styles.preview} key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          {/* <button onClick={() => handleDelete(blog.id)} css={styles.delete}>
						<FeatherIcon icon="trash-2" />
					</button> */}
        </div>
      ))}
    </div>
  )
}

export default BlogList
