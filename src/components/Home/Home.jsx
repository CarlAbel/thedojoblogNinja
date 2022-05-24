/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useFetch from '../../hooks/useFetch';

import { useState } from 'react';
import BlogList from '../BlogList/BlogList';

const Home = () => {
	const [name, setName] = useState('Mario');

	const styles = {
		loading: css`
			display: flex;
			justify-content: center;
			gap: 1rem;
			margin: 5rem 0;

			& span {
				display: block;
				background: #f1356d;
				height: 1rem;
				width: 2rem;
				border-radius: 100px;
				animation: loading 1s infinite 0s ease;
				opacity: 0.2;
				transform: scale(0.3);
			}

			/* & span:nth-child(2) {
				animation-delay: 0.2s;
			}

			& span:nth-child(3) {
				animation-delay: 0.4s;
			} */

			@keyframes loading {
				/* 0% {
					opacity: 0;
				} */
				50% {
					opacity: 1;
					transform: scale(1);
					width: 4rem;
				}
			}
		`,
	};

	// const handleDelete = id => {
	// 	const newBlogs = blogs.filter(blog => {
	// 		return blog.id !== id;
	// 	});
	// 	setBlogs(newBlogs);
	// };

	const {
		data: blogs,
		isPending,
		error,
	} = useFetch('http://localhost:8000/blogs');

	return (
		<div className="home">
			{error && <p>{error}</p>}
			{isPending && (
				<div css={styles.loading}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			)}
			{blogs && <BlogList blogs={blogs} title="All blogs" />}
			<button
				onClick={() => {
					setName('Luigi');
				}}
			>
				No Luigi
			</button>
			<p>{name}</p>
			{/* <Input /> */}
		</div>
	);
};

export default Home;
