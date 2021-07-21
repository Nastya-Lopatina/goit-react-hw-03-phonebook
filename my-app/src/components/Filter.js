import React from 'react';
import PropTypes from 'prop-types';

function Filter ({value,onChange}){
    return(
        <div>
           Поиск контактов по имени
           <input
           type = 'text'
           value ={value}
           onChange = {(e) => onChange(e.target.value)}/>
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default Filter