import Post from './Post';
import { Header } from './components/Header';

import './style.css';

function App() {
	return (
		<diiv>
			<Header />
			<Post author="Vitor" content="Texto texto" />
			<Post author="João" content="Aii uii" />
		</diiv>
	);
}

export default App;
