import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setLikeCount((state) => {
			return state + 1;
		});
	}

	return (
		<div className={styles.comment}>
			<Avatar src="https://github.com/vitorsat.png" hasBorder={false} />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Vitor Miguel</strong>
							<time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:15">
								Publicado há 1h
							</time>
						</div>
						<button onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={20} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp size={20} />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
