import { Post } from './components/Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://avatars.githubusercontent.com/u/61619897?v=4',
			name: 'Vitor Miguel',
			role: 'Web Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: '👉 jane.design/doctorcare ' },
		],
		publishedAt: new Date('2021-05-11 08:13:15'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/vitorsat.png',
			name: 'João Miguel',
			role: 'Web Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: '👉 jane.design/doctorcare ' },
		],
		publishedAt: new Date('2021-05-14 23:13:15'),
	},
];

function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}

export default App;
