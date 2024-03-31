import { PropsWithChildren } from 'react';
import { Tooltip } from 'react-tooltip';
import { TOOLTIPS_STYLE } from '../../constants';

type Props = {
  anchorSelect: string;
  place: 'top' | 'bottom' | 'left' | 'right';
  style: 'Info' | 'Warning';
};

const CustomTooltip = ({
  anchorSelect,
  place = 'top',
  children,
  style = 'Info',
}: PropsWithChildren<Props>) => {
  const styles = {
    Info: TOOLTIPS_STYLE.INFO,
    Warning: TOOLTIPS_STYLE.WARNING,
  };

  return (
    <Tooltip anchorSelect={anchorSelect} place={place} style={styles[style]}>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
