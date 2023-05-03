import type { App } from 'vue';
import { TestComponent } from "@/components";

export default {
  install: (app: App) => {
    app.component('TestComponent', TestComponent);
  }
};

export { TestComponent };