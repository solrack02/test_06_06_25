
// ---------- import Packs
import React from 'react';
import { View } from 'react-native';

// ---------- import Local Tools
import { mapElements } from '../project';

type Tprops_Custom = {
  pass: { arrItems: any[]; args: any };
};
export const Custom = (props: Tprops_Custom) => {
  const { arrItems, args } = props.pass;

  return <View>{mapElements(arrItems, args)}</View>;
};
