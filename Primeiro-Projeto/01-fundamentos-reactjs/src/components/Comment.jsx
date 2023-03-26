import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
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
						<button title="Deletar comentário">
							<Trash size={20} />
						</button>
					</header>

					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>

				<footer>
					<button type="button">
						<ThumbsUp size={20} />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
