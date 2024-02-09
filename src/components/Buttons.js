import React from 'react'
import { useState } from 'react'
import rock from '../img/rock.png'
import scissors from '../img/scisors.png'
import paper from '../img/paper.png'
import { useDispatch, useSelector } from 'react-redux'
import {
	ResultTrueOrFalse,
	setComputerTool,
	setUserTool
} from '../redux/reduxToolkitSLice'
import loadingIcon from '../img/Ellipsis-1s-92px.svg'

const Buttons = () => {
	const { computer } = useSelector(state => state.toolkit)
	const dispatch = useDispatch()
	const [randomKey, setRandomKey] = useState(null)
	const [userObj, setUserObj] = useState({})
	const [loading, setLoading] = useState(false)

	const obj = {
		Rock: rock,
		Paper: paper,
		Scissors: scissors
	}

	function computerChange(event) {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			const keys = Object.keys(obj)
			const randomIndex = Math.floor(Math.random() * keys.length)
			const newRandomKey = keys[randomIndex]
			setRandomKey(newRandomKey)
			dispatch(
				setComputerTool({ randomKey: obj[newRandomKey], text: newRandomKey })
			)

			const selectedTool = event.target.value
			setUserObj(obj[selectedTool])
			dispatch(setUserTool(obj[selectedTool]))
			dispatch(ResultTrueOrFalse(selectedTool))

		}, 500)
	}
	if (loading) {
		return (
			<div className='loading flex items-center justify-center mt-0'>
				<img className='' src={loadingIcon} alt='' />
			</div>
		)
	}

	return (
		<div className='flex gap-4'>
			<button
				value={'Rock'}
				onClick={computerChange}
				className='bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'
			>
				<img
					style={{
						pointerEvents: 'none'
					}}
					className='w-10 h-10'
					src={rock}
					alt=''
				/>
			</button>
			<button
				value={'Paper'}
				onClick={computerChange}
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'
			>
				<img
					style={{
						pointerEvents: 'none'
					}}
					className='w-10 h-10'
					src={paper}
					alt=''
				/>
			</button>
			<button
				value={'Scissors'}
				onClick={computerChange}
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'
			>
				<img
					style={{
						pointerEvents: 'none'
					}}
					className='w-10 h-10 '
					src={scissors}
					alt=''
				/>
			</button>
		</div>
	)
}

export default Buttons
