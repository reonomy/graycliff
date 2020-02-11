import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const VIEWBOX = '0 0 32 32';

export function IconReonomy(props: SvgIconProps) {
  return (
    <SvgIcon viewBox={VIEWBOX} color="primary" {...props}>
      <path d="M31.68,16.32l0,0,0-.06s0,0,0-.06a.08.08,0,0,0,0-.05.81.81,0,0,0,0-.22.08.08,0,0,0,0-.05s0,0,0-.06l0-.06,0,0a.41.41,0,0,0-.16-.16l0,0-.06,0h-.05l-.06,0H24.18v-7a.37.37,0,0,0,0-.11.08.08,0,0,0,0,0s0,0,0-.06l0-.06,0,0L24,8,16.41.39a.58.58,0,0,0-.82,0L8,8H8l-7.6,7.6a.57.57,0,0,0,0,.82L8,24H8l7.6,7.6.09.07,0,0,.06,0h.06l.05,0h.22l.05,0h.06l.06,0,0,0,.09-.07L24,24h0l7.6-7.6Zm-1.88.26L24.18,22.2V16.58ZM16,1.62,22.78,8.4,16,15.18,9.22,8.4ZM7.82,22.2,1.62,16l6.2-6.2ZM9,9.8l6.44,6.44V29.8L9,23.36Zm7.6,6.44L23,9.8V23.36L16.58,29.8Z" />
    </SvgIcon>
  );
}