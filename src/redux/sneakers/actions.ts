import { Dispatch } from 'redux';
import { store } from '../../index';
import { ISneakers, sneakerTypes } from "./reducer";
import { sneakersApi } from "../../service/api";
import { isImageExist } from "./helpers/isImageExist";

function successLoad(payload: ISneakers) {
  return {
    type: sneakerTypes.SNEAKERS_LOAD_SUCCESS,
    payload
  };
}

function pendingLoad() {
  return {
    type: sneakerTypes.SNEAKERS_LOAD_PENDING
  };
}

function errorLoad(payload: string) {
  return {
    type: sneakerTypes.SNEAKERS_LOAD_ERROR,
    payload
  };
}

function stopPending() {
  return {
    type: sneakerTypes.SNEAKERS_LOAD_STOP_PENDING
  };
}

function addBrands(payload: string) {
  return {
    type: sneakerTypes.SNEAKERS_FILTER_ADD_BRANDS,
    payload
  };
}

function removeBrand(payload: string) {
  return {
    type: sneakerTypes.SNEAKERS_FILTER_REMOVE_BRAND,
    payload
  };
}

export function brandsAddHandler(name: string, isChecked: boolean) {
  return async (dispatch: Dispatch) => {
    if (isChecked) {
      dispatch(addBrands(name));
    } else {
      dispatch(removeBrand(name));
    }
  };
}

function getFilteredSneakers(payload: ISneakers[]) {
  return {
    type: sneakerTypes.SNEAKERS_GET_FILTERED_SNEAKERS,
    payload
  };
}

export function switchImageFilter(payload: boolean) {
  return {
    type: sneakerTypes.SNEAKERS_SWITCH_IMAGE_FILTER,
    payload
  };
}

export function filterSneakersByBrands() {
  return async (dispatch: Dispatch) => {
    const { list, brandsFilter, showWithImage } = store.getState().sneakers;

    const newList = (list as ISneakers[]).filter((sneaker) => {
      const brands = (brandsFilter as string[]).length ?
        (brandsFilter as string[]).some(brand => brand === sneaker.brand.toLowerCase()) : true;
      const image = showWithImage ? isImageExist(sneaker.media.imageUrl) : true;

      return brands && image;
    });

    dispatch(getFilteredSneakers(newList));
  };
}

export function getSneakersList() {
  return async (dispatch: Dispatch) => {
    dispatch(pendingLoad());
    try {
      const list = await sneakersApi.getSneakersList();
      dispatch(successLoad(list.results));
      // @ts-ignore
      dispatch(filterSneakersByBrands());
    } catch (err) {
      dispatch(errorLoad('Load error'));
    } finally {
      setTimeout(() => {
        dispatch(stopPending());
      }, 2000);
    }
  };
}

export function addToWishList(payload: ISneakers) {
  return {
    type: sneakerTypes.SNEAKERS_ADD_TO_WISH_LIST,
    payload
  };
}

export function removeFromWishList(payload: string) {
  return {
    type: sneakerTypes.SNEAKERS_ADD_TO_WISH_LIST,
    payload
  };
}