# on-connected

a zero-dependency web component that notifies you when connected and disconnected from the DOM

## installation

```sh
npm install on-connected
```

## usage

```jsx
<on-connected
  fn={() => {
    console.log("connected");
    return () => {
      console.log("disconnected");
    };
  }}
/>
```
