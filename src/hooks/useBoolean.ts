import React from 'react';

interface IBooleanActions {
  on: () => void;
  off: () => void;
  toggle: () => void;
}

type IUseBoolean = [boolean, IBooleanActions];

const useBoolean = (initialValue = false): IUseBoolean => {
  const [boolState, setBoolState] = React.useState(initialValue);

  const updateBoolState = {
    on: () => setBoolState(true),
    off: () => setBoolState(false),
    toggle: () => setBoolState(!boolState),
  };

  return [boolState, updateBoolState];
};

export default useBoolean;
