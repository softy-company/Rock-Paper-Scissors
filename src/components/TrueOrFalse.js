import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ComputerCount, UserCount } from '../redux/reduxToolkitSLice'
import loadingIcon from '../img/Ellipsis-1s-92px.svg'

const TrueOrFalse = () => {
	const { computer } = useSelector(s => s.toolkit)
	const { textValue } = useSelector(s => s.toolkit)
	const [color, setColor] = useState('')
	const [result, setResult] = useState('')
	const [user, setUser] = useState(0)
	const [computerCount, setComputerCount] = useState(0)
	const dispatch = useDispatch()
	// console.log(user)

	useEffect(() => {
		let newColor = ''
		let newResult = ''

		const text = computer.text

		if (textValue === 'Rock' && text === 'Paper') {
			newResult = 'You Lost !'
			newColor = 'red'
			setComputerCount(prevComputer => prevComputer + 1)
		} else if (textValue === 'Rock' && text === 'Scissors') {
			newResult = 'You win !'
			newColor = 'green'
			setUser(prevUser => prevUser + 1)
		} else if (textValue === 'Rock' && text === 'Rock') {
			newResult = "It's a Tie !"
			newColor = 'orange'
		} else if (textValue === 'Paper' && text === 'Rock') {
			newResult = 'You win !'
			newColor = 'green'
			setUser(prevUser => prevUser + 1)
		} else if (textValue === 'Paper' && text === 'Paper') {
			newResult = "It's a Tie !"
			newColor = 'orange'
		} else if (textValue === 'Paper' && text === 'Scissors') {
			newResult = 'You Lost !'
			newColor = 'red'
			setComputerCount(prevComputer => prevComputer + 1)
		} else if (textValue === 'Scissors' && text === 'Rock') {
			newResult = 'You Lost !'
			newColor = 'red'
			setComputerCount(prevComputer => prevComputer + 1)
		} else if (textValue === 'Scissors' && text === 'Paper') {
			newResult = 'You win !'
			newColor = 'green'
			setUser(prevUser => prevUser + 1)
		} else if (textValue === 'Scissors' && text === 'Scissors') {
			newResult = "It's a Tie !"
			newColor = 'orange'
		} else {
			newResult = 'Choose One !'
			newColor = 'red'
		}
		console.log(user)

		setColor(newColor)
		setResult(newResult)
	}, [computer])
	dispatch(UserCount(user))
	dispatch(ComputerCount(computerCount))
	if (computerCount === 10) {
		alert('Хаха лох ты проиграл')
		setComputerCount(0)
		setUser(0)

	} else if (user === 10) {
		alert('Повезло')
		setUser(0)
		setComputerCount(0)
    
	}

	return (
		<div>
			<h1 style={{ color: color }} className='font-bold text-2xl mb-10'>
				{result}
			</h1>
		</div>
	)
}

export default TrueOrFalse
