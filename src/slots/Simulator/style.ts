import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => {
  return {
    simulator: css`
      position: absolute;
      z-index: 1;
      top: calc(${token.docPadding}px + ${token.docHeaderTopHeight}px);
      right: ${token.docPadding}px;

      overflow: hidden;

      box-sizing: border-box;
      width: ${token.docSimulatorWidth}px;
      min-width: ${token.docSimulatorWidth}px;

      border-radius: ${token.docBorderRadius}px;

      iframe {
        display: block;
        width: 100%;
      }

      @media (max-width: 1100px) {
        right: auto;
        left: 750px;
      }

      @media (min-width: 375) {
        right: 50%;
        margin-right: calc((${token.docRowMaxWidth}px / 2) * -1 + 24px);
      }
    `,
    simulatorFixed: css`
      position: fixed;
      top: ${token.docPadding}px;
    `,
  };
});
