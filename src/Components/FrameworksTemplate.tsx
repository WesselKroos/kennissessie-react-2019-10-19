import React from 'react';
export default ({
  state: { allShown },
  props: { items },
  style: { list, list__item },
  toggle
}: {
  state: any,
  props: { items: string[] },
  style: any,
  toggle: () => void
}) =>
  (<>

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

  </>)