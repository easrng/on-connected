type OnConnectedCallback = () => void | (() => void);
declare class OnConnected extends HTMLElement {
  #onDisconnected?: () => void;
  #onConnected?: OnConnectedCallback;
  connectedCallback(): void;
  disconnectedCallback(): void;
  set fn(newCallback: OnConnectedCallback);
  get fn(): OnConnectedCallback;
}
declare global {
  interface HTMLElementTagNameMap {
    "on-connected": OnConnected;
  }
}
export type { OnConnected };
