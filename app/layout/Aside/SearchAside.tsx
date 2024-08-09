import {useEffect, useRef} from 'react';
import {useAside} from '.';
import Aside from '.';

export default function SearchAside() {
  return (
    <Aside header="Search" type="search">
      <input type="text" />
    </Aside>
  );
}
