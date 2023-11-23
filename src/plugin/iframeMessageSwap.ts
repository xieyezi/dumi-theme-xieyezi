type IframeMessageEvent<T> = MessageEvent<{ data: T; method: string }>;

export class IframeMessageSwap {
  private iframeRef: HTMLIFrameElement | null = null;
  private taskList: Array<() => void> = [];
  private listeners: { handleEvent: (event: IframeMessageEvent<any>) => void; method: string }[] =
    [];

  setRef = (ref: HTMLIFrameElement) => {
    const listernerReady = this.addListener('ready', () => {
      this.iframeRef = ref;
      for (const it of this.taskList) it();
      this.postMessage('ready');
      listernerReady.off();
    });
  };

  postMessage = <T>(method: string, data?: T) => {
    if (this.iframeRef) {
      const win = this.iframeRef?.contentWindow;
      if (win) {
        win.postMessage({ data, method }, '*');
      }
    } else {
      this.taskList.push(() => this.postMessage(method, data));
    }
  };

  addListener = <T>(method: string, callback: (_data: T) => void) => {
    const handleEvent = (event: IframeMessageEvent<T>) => {
      const { method: eventMethod, data } = event?.data ?? {};
      if (eventMethod === method) {
        callback(data);
      }
    };
    window.addEventListener('message', handleEvent);

    this.listeners.push({ handleEvent, method });
    return { handleEvent, off: () => this.removeListener(handleEvent) };
  };

  removeListener = <T>(handle: (event: IframeMessageEvent<T>) => void) => {
    window.removeEventListener('message', handle);
    this.listeners = this.listeners.filter((listener) => listener.handleEvent !== handle);
  };

  removeAllListeners = () => {
    for (const listener of this.listeners) {
      window.removeEventListener('message', listener.handleEvent);
    }
    this.listeners = [];
  };
}
