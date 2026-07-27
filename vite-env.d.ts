/// <reference types="vite/client" />

declare module "*.asset.json" {
  const content: { url: string; width?: number; height?: number };
  export default content;
}
