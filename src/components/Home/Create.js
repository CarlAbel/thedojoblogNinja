/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("Mario")
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const blog = { title, body, author }

    setIsPending(true)

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false)
      navigate("/home")
    })
  }

  const styles = {
    create: css`
      max-width: 400px;
      margin: 0 auto;
      text-align: center;
      & label {
        text-align: left;
        display: block;
      }
      & h2 {
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 30px;
      }
      & input,
      textarea,
      select {
        width: 100%;
        padding: 6px 10px;
        margin: 10px 0;
        border: 1px solid #ddd;
        box-sizing: border-box;
        display: block;
      }
      & button {
        background: #f1356d;
        color: #fff;
        border: 0;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
      }
    `,
  }
  return (
    <div css={styles.create}>
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Blog Title:
          <input
            type="text"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label htmlFor="">
          Blog Body:
          <textarea
            type="text"
            required
            value={body}
            onChange={(event) => setBody(event.target.value)}
          ></textarea>
        </label>
        <label htmlFor="">
          Blog Author:
          <select
            type="text"
            required
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          >
            <option value="Mario">Mario</option>
            <option value="Yoshi">Yoshi</option>
          </select>
        </label>
        {!isPending && <button type="submit">Add Blog</button>}
        {isPending && (
          <button type="submit" disabled>
            Adding Blog
          </button>
        )}
      </form>
    </div>
  )
}

export default Create
