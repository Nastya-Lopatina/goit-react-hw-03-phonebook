import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/ContactList.module.css'

const ContactList = ({contacts,onDeleteContact}) => (
    <ul className = {style.list}>
        {contacts.map(({name,number,id}) => (
        <li
        className = {style.list_name}
         key = {id}>
            {name + ':' + number}
            
            {<button
                className = {style.button}
                type = 'button'
                name = 'delete'
                onClick = {() => onDeleteContact(id) }>
                    Удалить
            </button>
            }
           
        </li>
          
         ))}
     
    </ul>
)

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
}

export default ContactList;