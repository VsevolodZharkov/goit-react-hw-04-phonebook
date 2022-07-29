
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'
import { useState } from 'react';

const ContactForm = ({addUserData}) => {
	const [ name, setName ] = useState('');
	const [ number, setNumber ] = useState('');

	const handleChange = event => {
    switch(event.target.name) {
			case 'name' :
				setName(event.target.value);
				break;
			
			case 'number' :
				setNumber(event.target.value);
				break;
			
			default:
				return;
		}
  };

	const onSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const user = { name, number, id };
		if(user.name.trim() === '' || user.number.trim() === '' ) {
			alert('Invalid data entry.')
			return;
		}
		addUserData(user);
		resetForm();
  };

	const resetForm = () => {
		setName('')
		setNumber('')
	}

	return (
		<form onSubmit={onSubmit}>
			<label>
				Name
				<input
				type="text"
				name="name"
				value={name}
				onChange={handleChange}
				pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
				required
				/>
			</label>
			<label>
				Number
				<input
				 type="tel"
				 name="number"
				 value={number}
				 onChange={handleChange}
				 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
				 required
				/>
			</label>

			<button type="submit" onClick={onSubmit}>Add contact</button>
		</form>
	);
}

ContactForm.prototype = {
	addUserData: PropTypes.func.isRequired,
}
export { ContactForm };
