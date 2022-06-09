import React from 'react'
import filterIcon from './../../../assets/images/Filter.svg'
const FilterIcon = () => {
    return (
        <span>
            <img src={filterIcon} alt="filtericon" width="40" style={{ verticalAlign: 'bottom' }} />
        </span>
    )
}

export default FilterIcon
