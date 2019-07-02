import React from 'react'
import { Button } from '../Utils/Utils'
import './BackButton.css'

function BackButton(props) {
	return (
		<Button className="back-button" onClick={() => props.history.goBack()}>&larr; Back</Button>
	)
	
}

export default BackButton