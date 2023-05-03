import type { App } from 'vue';
import { DemoComponent } from "@/components";

export default {
  install: (app: App) => {
    app.component('DemoComponent', DemoComponent);
  }
};

export { DemoComponent };