import React from 'react';
export default ({ state: { allItemsShown = false, frameworks = [] }, style: { list = "", list__item = "" }, showAllItems = () => { } }) => (<>

    <ul className={list}>
        {frameworks
            .filter((framework, i) => (allItemsShown || (!allItemsShown && i < 5)))
            .map(framework => <li className={list__item} key={framework}>{framework}</li>)}
    </ul>

    <button onClick={showAllItems}>
        {allItemsShown ?
            <span>Toon eerste 5 items</span> :
            <span>Toon alle items</span>
        }
    </button>

</>)