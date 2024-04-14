import { useEffect, useRef } from 'react'

// Custom hook to get previous state of a state variable
// Tracks changes
const usePreviousState = (current: any) => {
	// Default previous ref (context here is an array) to 0
	const prevRef = useRef<any>(0)
	const currentRef = useRef<any>(current)

	useEffect(() => {
		prevRef.current = currentRef.current
		currentRef.current = current
	}, [current])

	return prevRef.current
}

export default usePreviousState
