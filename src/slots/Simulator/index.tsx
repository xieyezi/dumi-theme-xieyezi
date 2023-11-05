import { FC, memo, useEffect, useMemo, useState } from 'react';

import { iframeMessageSwap } from '../../plugin/iframeMessageSwap';
import './index.less';

export interface SimulatorProps {
  path?: string;
  src: string;
}

const Simulator: FC<SimulatorProps> = ({ src, path }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  const [scrollTop, setScrollTop] = useState(0);
  const theme = 'dark';

  const simulatorStyle = useMemo(() => {
    const height = Math.min(640, window.innerHeight - 90);

    return { height: `${height}px` };
  }, [windowHeight]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollTop(window.scrollY);
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
    <div className="simulator-fixed'">
      <iframe
        id="simulator"
        ref={iframeMessageSwap.setRef}
        src={src}
        style={simulatorStyle}
        title="vant-ui-iframe"
      />
    </div>
  );
};

export default memo(Simulator);
