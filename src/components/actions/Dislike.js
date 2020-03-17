import React from 'react';

const Dislike = ({person, modifySuperficialChoices}) => (
    <button 
        type="button"
        onClick={() => modifySuperficialChoices(userId, 'ADD_TO_DISLIKED_USER')}
    >
        <img src="/images/misc/dislike.png" alt="Dislike User" />
    </button>
    );

export default Dislike;