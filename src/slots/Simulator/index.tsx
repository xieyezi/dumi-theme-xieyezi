import { FC, memo, useEffect, useMemo, useRef, useState } from 'react';

import { useThemeStore } from '@/store/useThemeStore';

import { IframeMessageSwap } from '../../plugin/iframeMessageSwap';
import { useStyles } from './style';

export interface SimulatorProps {
  path?: string;
  src: string;
}

const iframeMessageSwap = new IframeMessageSwap();

const Simulator: FC<SimulatorProps> = ({ src, path }) => {
  const simulatorRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const { styles, cx } = useStyles();
  const theme = useThemeStore((s) => s.themeMode);

  const simulatorStyle = useMemo(() => {
    const height = Math.min(640, window.innerHeight - 90);

    return { height: `${height}px` };
  }, [windowHeight]);

  useEffect(() => {
    iframeMessageSwap.postMessage('navigate', path);
  }, [path]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    theme && iframeMessageSwap.postMessage('theme', theme);
  }, [theme]);

  useEffect(() => {
    iframeMessageSwap.setRef(simulatorRef.current as unknown as HTMLIFrameElement);

    const handleSrcoll = () => {
      setScrollTop(document.body.scrollTop);
    };

    const handleResize = () => {
      //FIXEME:  替换为document
      setWindowHeight(window.innerHeight);
    };

    document.body.addEventListener('scroll', handleSrcoll);
    document.body.addEventListener('resize', handleResize);

    return () => {
      document.body.removeEventListener('scroll', handleSrcoll);
      document.body.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={cx(styles.simulator, scrollTop > 60 ? styles.simulatorFixed : '')}>
      <iframe
        id="simulator"
        ref={simulatorRef}
        src={src}
        style={simulatorStyle}
        title="incall-design-rn-iframe"
      />
    </div>
  );
};

export default memo(Simulator);
