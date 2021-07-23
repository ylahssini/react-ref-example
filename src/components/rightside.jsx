import React from 'react';
import { RefContext } from '../app';

const RightSide = ({ data }) => {
    const refs = React.useContext(RefContext);

    function handleScrollTo(title) {
        refs[title.replace(/ /g, '').toLowerCase()].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    return (
        <aside>
            <ol>
                {data.map((block) => (
                    <li key={block.title} style={{ margin: '0 0 1rem' }}>
                        <button type="button" onClick={() => handleScrollTo(block.title)}>#{block.title}</button>
                    </li>
                ))}
            </ol>
        </aside>
    )
}

export default RightSide;
