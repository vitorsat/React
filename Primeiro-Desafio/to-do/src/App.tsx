import styles from './App.module.css';
import { Check } from './components/Check';
import { CreateButton } from './components/CreateButton';
import { Input } from './components/Input';

import './global.css';

function App() {
	return (
		<div className="App">
			<Input placeholder="Adicione uma nova tarefa" />
			<Check checked={false} />
			<CreateButton />
		</div>
	);
}

export default App;
