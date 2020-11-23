import { ISneakers } from "../../service/api/sneakersApi";

type StateType = {
  list: ISneakers[];
  filteredList: ISneakers[],
  wishList: ISneakers[];
  pending: boolean;
  error: string;
  brandsFilter: string[];
  showWithImage: boolean;
}

type ActionType = {
  type: string;
  payload: ISneakers | ISneakers[] | string;
};

const initState: StateType = {
  list: [],
  filteredList: [],
  wishList: [],
  pending: true,
  error: '',
  brandsFilter: [],
  showWithImage: true
};

const types = {
  SNEAKERS_LOAD_PENDING: 'SNEAKERS/SNEAKERS_LOAD_PENDING',
  SNEAKERS_LOAD_SUCCESS: 'SNEAKERS/SNEAKERS_LOAD_SUCCESS',
  SNEAKERS_LOAD_ERROR: 'SNEAKERS/SNEAKERS_LOAD_ERROR',
  SNEAKERS_LOAD_STOP_PENDING: "SNEAKERS/SNEAKERS_LOAD_STOP_PENDING",
  SNEAKERS_FILTER_ADD_BRANDS: "SNEAKERS/SNEAKERS_FILTER_ADD_BRANDS",
  SNEAKERS_FILTER_REMOVE_BRAND: "SNEAKERS/SNEAKERS_FILTER_REMOVE_BRAND",
  SNEAKERS_GET_FILTERED_SNEAKERS: 'SNEAKERS/SNEAKERS_GET_FILTERED_SNEAKERS',
  SNEAKERS_SWITCH_IMAGE_FILTER: "SNEAKERS/SNEAKERS_SWITCH_IMAGE_FILTER",
  SNEAKERS_ADD_TO_WISH_LIST: 'SNEAKERS/SNEAKERS_ADD_TO_WISH_LIST',
  REMOVE_FROM_WISH_LIST: 'SNEAKERS/REMOVE_FROM_WISH_LIST'
};

const reducer = (state = initState, action: ActionType) => {
  switch (action.type) {
    case types.SNEAKERS_LOAD_PENDING: {
      return { ...state, pending: true, error: '' };
    }
    case types.SNEAKERS_LOAD_ERROR: {
      return { ...state, error: action.payload };
    }
    case types.SNEAKERS_LOAD_SUCCESS: {
      return { ...state, list: action.payload };
    }
    case types.SNEAKERS_LOAD_STOP_PENDING: {
      return { ...state, pending: false };
    }
    case types.SNEAKERS_FILTER_ADD_BRANDS: {
      return { ...state, brandsFilter: [ ...state.brandsFilter, action.payload ] };
    }
    case types.SNEAKERS_FILTER_REMOVE_BRAND: {
      return {
        ...state,
        brandsFilter: [ ...state.brandsFilter.filter(brand => brand !== (action.payload)) ]
      };
    }
    case types.SNEAKERS_GET_FILTERED_SNEAKERS: {
      return { ...state, filteredList: action.payload };
    }
    case types.SNEAKERS_SWITCH_IMAGE_FILTER: {
      return { ...state, showWithImage: action.payload };
    }
    case types.SNEAKERS_ADD_TO_WISH_LIST: {
      return { ...state, wishList: [ ...state.wishList, action.payload ] };
    }
    case types.REMOVE_FROM_WISH_LIST: {
      return {
        ...state,
        wishList: [ ...state.wishList.filter(sneaker => sneaker !== (action.payload)) ]
      };
    }
    default: {
      return state;
    }
  }
};

export {
  reducer as sneakersReducer,
  types as sneakerTypes
};

export type {
  ISneakers,
  StateType as StateTypeSneakers
};