import React from 'react';

const PostMeta = props => (
    <ul className="uk-subnav uk-subnav-divider">
        {props["wp:term"].map(tax => tax.map(term => <MetaElement {...term} key={term.id} />))}
    </ul>
)

const MetaElement = props => (
    <li>
        <span>[{props.taxonomy}]&nbsp;&nbsp;</span>
        <a>{props.name}</a>
    </li>
);

export default PostMeta;
