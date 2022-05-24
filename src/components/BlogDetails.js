/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const BlogDetails = () => {
  const { id } = useParams()
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id)
  const styles = {
    blogdetails: css`
      & h2 {
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 10px;
      }
      & div {
        margin: 20px;
      }
    `,
  }

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article css={styles.blogdetails}>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
