# Common test adjustments

To be used in `tests/visualregression.spec.ts`

## Closing a CCM19 cookie banner via JavaScript**

```js
import type { JSHandle } from '@playwright/test';

async function preparePageForScreenshot(page: Page) {
  const window: JSHandle<Window & { CCM?: { closeWidget: () => {} } }> = await page.evaluateHandle('window');
  await page.evaluate(window => window.CCM && window.CCM.closeWidget(), window);
}
```

## Hiding a Usercentrics cookie banner via CSS

```js
async function preparePageForScreenshot(page: Page) {
  await page.addStyleTag({
    content: `
      #usercentrics-cmp-ui {
        display: none !important
      }
    `
  });
}
```

## Blocking all mp4 videos**

```js
await page.route('*/**/*.mp4', async route => {
  await route.abort();
});
```
