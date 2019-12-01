import React from 'react';
import './empty.scss';

const EmptyListComponent = () => {
    return (
        <div className="empty">
            <h1 className="empty__header">Empty</h1>
            <div className="empty__description">Try a bit later</div>
        </div>
    )
};

export default EmptyListComponent;