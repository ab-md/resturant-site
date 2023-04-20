import React from 'react';

const FilterForm = () => {
    return (
        <div>
            <form>
                <select>
                    <option value="">Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <select>
                    <option value="more">More than 30 min</option>
                    <option value="less">Less than 30 min</option>
                </select>
            </form>
        </div>
    );
};

export default FilterForm;