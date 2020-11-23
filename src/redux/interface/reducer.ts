type StateType = {
  filterIsOpen: boolean
}

type ActionType = {
  type: string;
  payload: boolean;
};

const initState: StateType = {
  filterIsOpen: false
};

const types = {
  TOGGLE_FILTER: 'UI/TOGGLE_FILTER'
};

const reducer = (state = initState, action: ActionType) => {
  switch (action.type) {
    case types.TOGGLE_FILTER: {
      return { ...state, filterIsOpen: !state.filterIsOpen };
    }
    default: {
      return state;
    }
  }
};

export { reducer as interfaceReducer, types };
export type { StateType as InterfaceType };