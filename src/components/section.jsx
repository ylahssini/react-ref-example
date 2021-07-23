import React from 'react';
import Block from './block';
import { RefContext } from '../app';

const Section = ({ data }) => {
    const refs = React.useContext(RefContext);

    return (
        <section>
            {data.map((block) => (
                <div key={block.title} ref={refs[block.title.replace(/ /g, '').toLowerCase()]}>
                    <Block data={block} />
                </div>
            ))}
        </section>
    )
}

export default Section;
