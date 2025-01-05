import { Region, screen } from "@computer-use/nut-js";

(async () => {
  await screen.highlight(new Region(100, 200, 300, 400));
})();
