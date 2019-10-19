import React from 'react';

export default (
  { items }: { items: string[] },
  { allShown }: any,
  { toggle }: any,
  { list, list__item }: any
) =>
  <>
    <ul className={list}>
      {items
        .filter((framework, i) => allShown || (!allShown && i < 5))
        .map(framework =>
          <li className={list__item} key={framework}>
            {framework}
          </li>
        )}
    </ul>

    <button onClick={toggle}>
      {allShown ? "Toon eerste 5" : "Toon alles"}
    </button>
  </>