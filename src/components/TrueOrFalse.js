import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const TrueOrFalse = () => {
	const { computer } = useSelector(s => s.toolkit)
	const { textValue } = useSelector(s => s.toolkit)
	const [color, setColor] = useState('')
	const [result, setResult] = useState('')

	useEffect(() => {
		let newColor = ''
		let newResult = ''

		const text = computer.text

		if (textValue === 'Rock' && text === 'Paper') {
			newResult = 'You Lost !'
			newColor = 'red'
		} else if (textValue === 'Rock' && text === 'Scissors') {
			newResult = 'You win!'
			newColor = 'green'
		} else if (textValue === 'Rock' && text === 'Rock') {
			newResult = "It's a Tie !"
			newColor = 'orange'
		} else if (textValue === 'Paper' && text === 'Rock') {
			newResult = 'You win !'
			newColor = 'green'
		} else if (textValue === 'Paper' && text === 'Paper') {
			newResult = "It's a Tie !"
			newColor = 'orange'
		} else if (textValue === 'Paper' && text === 'Scissors') {
			newResult = 'You Lost !'
			newColor = 'red'
		} else if (textValue === 'Scissors' && text === 'Rock') {
			newResult = 'You Lost !'
			newColor = 'red'
		} else if (textValue === 'Scissors' && text === 'Paper') {
			newResult = 'You win !'
			newColor = 'green'
		} else if (textValue === 'Scissors' && text === 'Scissors') {
			newResult = "It's a Tie !"
			newColor = 'orange'
		} else {
			newResult = 'Choose One !'
			newColor = 'red'
		}

		setColor(newColor)
		setResult(newResult)
	}, [computer])

	return (
		<div>
			<h1 style={{ color: color }} className='font-bold text-2xl mb-10'>
				{result}
			</h1>
		</div>
	)
}

export default TrueOrFalse
