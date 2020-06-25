import {Action} from '@ngrx/store';

export enum ActionType {
  Config = 'config',
}

export class HistoryUpdate implements Action{
    readonly type = ActionType.Config;

    constructor(public payload: {data: any}) {

    }

}

export type HistoryActions = HistoryUpdate;