import {createSelector} from '@ngrx/store';

export const getHistoryState = state => state.history;

export const getHistoryStatus = createSelector(
    getHistoryState,
    data => data['data']
);
