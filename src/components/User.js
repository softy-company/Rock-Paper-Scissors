import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
	const { user } = useSelector(s => s.toolkit)
	const { userCount } = useSelector(s => s.toolkit)
	const { computer } = useSelector(s => s.toolkit)

	console.log(userCount)

	return (
		<div className='flex items-center justify-center gap-2 flex-col'>
			<h1 className='font-bold'>User</h1>
			<h2>{userCount}</h2>
			<img className='w-24 h-24' src={user} alt='img' />
		</div>
	)
}

export default User
