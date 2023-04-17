import styles from './App.module.css';
import { Check } from './components/Check';
import { Input } from './components/Input';

import './global.css';

function App() {
	return (
		<div className="App">
			<Input placeholder="Adicione uma nova tarefa" />
			<Check />
		</div>
	);
}

export default App;
