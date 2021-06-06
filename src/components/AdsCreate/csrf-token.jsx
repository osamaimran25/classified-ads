import React from 'react';



const CSRFToken = () => {
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={""} />
    );
};
export default CSRFToken;