import React from 'react';

const Block = ({ data }) => (
    <article>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
    </article>
);

export default Block;
