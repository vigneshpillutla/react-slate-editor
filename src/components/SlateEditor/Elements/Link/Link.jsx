import React from 'react';
import { useFocused, useSelected, useSlateStatic } from 'slate-react';

import { removeLink } from '../../utils/link.js';
import Icon from '../../common/Icon';
import './styles.css';
const Link = ({ attributes, element, children }) => {
  const editor = useSlateStatic();
  const selected = useSelected();
  const focused = useFocused();
  return (
    <span className="link">
      <a
        href={element.href}
        {...attributes}
        {...element.attr}
        target={element.target}>
        {children}
      </a>
      {selected && focused && (
        <div className="link-popup" contentEditable={false}>
          <a href={element.href} target={element.target}>
            {element.href}
          </a>
          <button onClick={() => removeLink(editor)}>
            <Icon icon="unlink" />
          </button>
        </div>
      )}
    </span>
  );
};

export default Link;
