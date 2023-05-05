// #region Components
import type { App } from 'vue';
import { CustomFrontComponent } from "@/components";

export default {
  install: (app: App) => {
    app.component('CustomFrontComponent', CustomFrontComponent);
  }
};

export { CustomFrontComponent };
// #endregion

// #region Router
import { add404Page } from './router/router';
export { add404Page };
// #endregion
