import type { App } from 'vue';
import { CustomFrontComponent } from "@/components";

export default {
  install: (app: App) => {
    app.component('CustomFrontComponent', CustomFrontComponent);
  }
};

export { CustomFrontComponent };