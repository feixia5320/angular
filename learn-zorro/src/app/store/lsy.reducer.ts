import { Action } from '@ngrx/store';
import { lsy, initLsy } from './lsy.model';
import { chifan, shuijiao, xiedaima } from './lsy.action';

export function lsyReducer(state: lsy = initLsy, action: Action) {
  switch (action.type) {
    case chifan:
      return Object.assign({}, state, {
        zui: action['gaoshiqing']
      });
    case shuijiao:
      return Object.assign({}, state, {
        tou: action['gaoshiqing']
      });
    case xiedaima:
      return Object.assign({}, state, {
        shou: action['gaoshiqing']
      });
    default:
      return state;
  }
}