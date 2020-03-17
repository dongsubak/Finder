import React from 'react';
import Rewind from './actions/Rewind';
import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Superlike from './actions/Superlike';



const Actions = ({person, modifySuperficialChoices}) => {
    <div id="actions">
        <Rewind userId={person.id} />
        <Dislike 
            userId={person.id} 
            modifySuperificialChoices={modifySuperficialChoices}
        />
        <Like 
            userId={person.id} 
            modifySuperificialChoices={modifySuperficialChoices}
        />
        <Superlike 
            userId={person.id} 
            modifySuperificialChoices={modifySuperficialChoices}
        />
    </div>
}

export default Action;