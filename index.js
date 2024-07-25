// @ts-check
/** @type {typeof import("./index.d.ts").OnConnected} */
const OnConnectedImpl = class extends HTMLElement {
  #onDisconnected;
  #onConnected;
  connectedCallback() {
    if (this.#onConnected) {
      this.#onDisconnected = this.#onConnected();
    }
  }
  disconnectedCallback() {
    if (this.#onDisconnected) {
      this.#onDisconnected();
      this.#onDisconnected = undefined;
    }
  }
  get fn() {
    return this.#onConnected;
  }
  set fn(newCallback) {
    if (this.isConnected) {
      this.disconnectedCallback();
      this.#onConnected = newCallback;
      this.connectedCallback();
    } else {
      this.#onConnected = newCallback;
    }
  }
};
customElements.define("on-connected", OnConnectedImpl);
