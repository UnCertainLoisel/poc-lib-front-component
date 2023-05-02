import type { App } from 'vue';
import { HelloWorld, TestComponent } from "@/components";

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld);
    app.component('TestComponent', TestComponent);
  }
};

export { HelloWorld, TestComponent };
