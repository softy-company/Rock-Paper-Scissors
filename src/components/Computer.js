import { useDispatch, useSelector } from 'react-redux'

const Computer = () => {
	const { computer } = useSelector(state => state.toolkit)

	return (
		<div className='flex items-center justify-center flex-col gap-2'>
			<h1 className='font-bold text-md'>Computer</h1>
			<img
				className='w-24 h-24 bg-white  '
				src={computer.randomKey}
				alt='img'
			/>
			{/* <button onClick={computerChange}>click</button> */}
		</div>
	)
}

export default Computer
