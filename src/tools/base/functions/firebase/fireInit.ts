
// ---------- set Local Imports
import { initializeApp } from 'firebase/app';
import { setVar } from '../';
import { getCtData } from '../../project';

type Tprops = { args: any; pass: { fbConfig: any; arrFuncs: any[] } };

export const fireInit = async (props: Tprops) => {
  console.log('fireInit');
  // ---------- set Props
  const { args, pass } = props;
  const { fbConfig } = pass;

  if (typeof fbConfig !== 'string') {
    return console.log('Erro Ao inicializar o Firebase', fbConfig);
  }

  console.log('fireInit', { fbConfig });

  // ---------- set FB Init on a Variable
  const objFirebase = getCtData(fbConfig);
  console.log('fireInit', { objFirebase });

  const fbInit = initializeApp(objFirebase, 'secondary');
  console.log({ fbInit });

  setVar({
    args: {},
    pass: { keyPath: ['all.temp.fireInit'], value: [fbInit] },
  });
};
