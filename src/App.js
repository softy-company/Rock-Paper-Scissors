import './App.css'
import Buttons from './components/Buttons'
import Computer from './components/Computer'
import TrueOrFalse from './components/TrueOrFalse'
import User from './components/User'

function App() {
	return (
		<div className='App flex items-center justify-center flex-col'>
			<div className='view flex items-center justify-center gap-20 mb-10'>
				<User />
				<Computer />
			</div>
			<TrueOrFalse />
			<Buttons />
			<h1 className='font-bold text-xl text-red-600 mt-10'>
				Рома МК11 Кочур!!!
			</h1>
		</div>
	)
}

export default App
