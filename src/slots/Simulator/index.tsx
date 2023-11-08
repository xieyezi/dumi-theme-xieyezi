import { FC, memo, useEffect, useMemo, useState } from 'react';

import { iframeMessageSwap } from '../../plugin/iframeMessageSwap';
import { useStyles } from './style';

export interface SimulatorProps {
  path?: string;
  src: string;
}

const Simulator: FC<SimulatorProps> = ({ src, path }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const theme = 'dark';

  const { styles, cx } = useStyles();

  const simulatorStyle = useMemo(() => {
    const height = Math.min(640, window.innerHeight - 90);

    return { height: `${height}px` };
  }, [windowHeight]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollTop(window.scrollY);
      console.log(scrollTop);
    });
    window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight);
    });
  }, []);

  useEffect(() => {
    // 切换 iframe 内部的路径
    iframeMessageSwap.postMessage('navigate', path);
  }, [path]);

  useEffect(() => {
    // 切换 iframe 内部的主题
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    theme && iframeMessageSwap.postMessage('theme', theme);
  }, [theme]);

  return (
    <div className={cx(styles.simulator, scrollTop > 60 ? styles.simulatorFixed : '')}>
      <iframe
        id="simulator"
        ref={iframeMessageSwap.setRef}
        src={src}
        style={simulatorStyle}
        title="incall-design-rn-iframe"
      />
    </div>
  );
};

export default memo(Simulator);
