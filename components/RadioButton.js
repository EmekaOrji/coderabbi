import React from 'react';

export default function RadioButton({ id, radioValue, onChange, children }) {
	return (
		<>
			<label>
				<input
					type='radio'
					id={id}
					value={id}
					checked={radioValue === id}
					onChange={onChange}
				/>
				<div className='radio-view button secondary'>{children}</div>
			</label>
		</>
	);
}
