import {
  CATEGORIES_ACTION_TYPES,
  Category,
  CategoryMap,
} from './category.types';

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { AnyAction } from 'redux';

import { ThunkAction } from 'redux-thunk';
import { useDispatch } from 'react-redux';

import { useAppDispatch } from '../hooks';

// export type Action = { type: string; payload?: any };
// export type AsyncAction = (dispatch: (action: Action) => any) => void;
// export type Dispatcher = (action: AsyncAction | Action) => void;

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

//discriminating unions - not needed anymore
// export type CategoryAction =
//   | FetchCategoriesStart
//   | FetchCategoriesSuccess
//   | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

// export type ThunkAction<
//   R, // Return type of the thunk function
//   S, // state type used by getState
//   E, // any "extra argument" injected into the thunk
//   A extends Action // known types of actions that can be dispatched
// > = (
//   dispatch: ThunkDispatch<S, E, A>,
//   getState: () => S,
//   extraArgument: E
// ) => R;

//below is thunk
export const fetchCategoriesAsync =
  () =>
  async (dispatch: AnyAction): Promise<void | CategoryMap> => {
    useAppDispatch(fetchCategoriesStart());

    try {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      useAppDispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      useAppDispatch(fetchCategoriesFailed(error));
    }
  };
