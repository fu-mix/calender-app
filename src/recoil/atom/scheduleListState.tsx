import { atom } from 'recoil';
import { RecoilAtomKeys } from '../RecoilKeys';

export const scheduleListState = atom({
  key: RecoilAtomKeys.SCHEDULE_LIST_STATE,
  default: [],
});
