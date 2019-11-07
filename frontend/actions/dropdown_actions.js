export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';
export const SET_DROPDOWN_PROPS = 'SET_DROPDOWN_PROPS';


export const openDropdown = pos => {
  return {
    type: OPEN_DROPDOWN,
    pos
  };
};

export const closeDropdown = () => {
  return {
    type: CLOSE_DROPDOWN,
  };
};

export const setDropdownProps = props => {
  return {
    type: SET_DROPDOWN_PROPS,
    props
  };
};