import PropTypes from 'prop-types';
import React from 'react';

import { Collapse } from 'antd';

const { Panel } = Collapse;

export default function ExpansibleContainer({ title, content }) {
  return (
    <Collapse header={title}>
      {content.map((child, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Panel key={`${title}_${i}`} header={`Caso ${i + 1}`}>
          {child}
        </Panel>
      ))}
    </Collapse>
  );
}

ExpansibleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};
