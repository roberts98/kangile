import React from 'react';
import styled from 'styled-components';
import AutoComplete from 'react-autocomplete';

import { COLOR_DARK, XXS_SPACING, XS_SPACING } from '../../../contants/styles';

const styles = {
  display: 'block',
  width: '300px',
  borderRadius: '10px',
  padding: '8px 16px',
  border: `2px solid ${COLOR_DARK}`
};

const Menu = styled.div`
  padding: ${XXS_SPACING} ${XS_SPACING};
  border-bottom: 2px solid ${COLOR_DARK};
`;

const Item = styled.div`
  cursor: pointer;
`;

function Autocomplete({ value, handleChange, values }) {
  function shouldItemRender(item, value) {
    if (
      item.username
        .trim()
        .toLowerCase()
        .includes(value.trim().toLowerCase())
    ) {
      return true;
    }

    return false;
  }

  return (
    <AutoComplete
      renderMenu={items => <Menu children={items}></Menu>}
      getItemValue={item => item.username}
      items={values}
      renderItem={item => <Item key={item.username}>{item.username}</Item>}
      value={value}
      renderInput={props => <input required style={styles} {...props} />}
      onChange={e => handleChange(e.target.value)}
      onSelect={value => handleChange(value)}
      shouldItemRender={shouldItemRender}
    />
  );
}

export default Autocomplete;
