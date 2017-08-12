import React from 'react';

/**
 * Component providing a nice progress effect.
 */
const Spinner = () => (
    <div className="uk-flex uk-flex-center">
        <div is uk-spinner="ratio: 2"></div>
    </div>
);

export default Spinner;
