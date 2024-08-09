import {useEffect, useRef} from 'react';
import {useAside} from '.';
import Aside from '.';

export default function CartAside() {
  return (
    <Aside header="Cart" type="cart">
      <input type="text" />
    </Aside>
  );
}
