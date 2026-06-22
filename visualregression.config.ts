import { defineConfig } from "@praetorius/visual-regression-tester";

export default defineConfig({
  referenceUrl: "https://www.example.com",
  subjectUrl: "https://example.ddev.site",
  diff: {
    threshold: 0.2,
    maxPixelsDifferent: 10,
    maxPercentDifferent: 0,
  },
  run: {
    limit: -1,
    status: ['scheduled', 'passed', 'failed'],
    skipAccepted: true,
  },
});
