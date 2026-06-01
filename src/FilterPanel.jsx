import React from "react";

function FilterPanel({filters, setFilters, onOpemModal}){
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFilters(prev => ({...prev, [name]:value}));
    };
    return (
        <div style={{display: 'flex', gap:'15px'}}>
            <input type="text" name="search" value={filters.search} onChange={handleChange} />
            <select name="category" value={filters.category} onChenge={handleChange}>
                <option value=''>Все</option>
                <option value='Finance'>Все</option>
                <option value='Marceting'>Все</option>
                <option value='Dev'>Все</option>
                <option value='HR'>Все</option>
                <option value='Sales'>Все</option>
            </select>
            <select name="status" value={filters.status} onChange={handleChange}>
                <option value=''>Все</option>
                <option value='Выполнено'>Выполнено</option>
                <option value='В обработке'>В обработке</option>
                <option value='Отклонено'>Отклонено</option>
            </select>
        </div>
    )
}

export default FilterPanel;