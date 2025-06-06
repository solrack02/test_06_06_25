
// ---------- import Packs
import React from 'react';
import JSON5 from 'json5';
import { ScrollView } from 'react-native';

// ---------- import Local Tools
import { getStlValues, mapElements, getVarValue } from '../project';

type Tprops_ScrollBar = {
  pass: { styles: any[]; arrProps: any[]; arrItems: any; args: any };
};
export const ScrollBar = (props: Tprops_ScrollBar) => {
  const { styles, arrItems, arrProps, args } = props.pass;

  // ---------- set Variables Styles (If Exists)
  const stl = getStlValues(styles);

  // ------- set User Element Properties (If Exists)
  const userElProps: any = {};
  for (let strObj of arrProps) {
    if (!strObj) continue;
    if (!props) continue;
    if (typeof strObj !== 'string') continue;

    const parsedObject = JSON5.parse(strObj);

    for (const keyProp in parsedObject) {
      const valueProp = parsedObject[keyProp];

      const [hasVar, varValue] = getVarValue(valueProp);

      if (hasVar) userElProps[keyProp] = varValue;
      if (!hasVar) userElProps[keyProp] = valueProp;
    }
  }

  const allProps = {
    style: [stl],
    ...userElProps,
  };

  return <ScrollView {...allProps}>{mapElements(arrItems, args)}</ScrollView>;
};

