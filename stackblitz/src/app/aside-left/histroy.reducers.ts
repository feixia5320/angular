import {HistoryActions, ActionType} from './histroy.actions';

export interface HistoryState {
    data: any;
}

export const initialHistoryState: HistoryState = {
    data: undefined
};

export function HistoryReducer(state = initialHistoryState, action: HistoryActions): HistoryState {
    switch (action.type) {
        case ActionType.Config:
            return {
                ...state,
                data: action.payload.data,
            };
        default:
            return state;
    }

}