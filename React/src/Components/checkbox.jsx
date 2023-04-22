import React from 'react'

function Checkbox({ label, value, onChange }) {
    return (
        <label className='flex w-full'>
            <input type="checkbox" checked={value} onChange={onChange} className='mr-4 cursor-pointer w-4' />
            {label}
        </label>
    )
}

export default Checkbox