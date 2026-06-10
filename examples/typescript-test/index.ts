import { Region, screen } from "@kumar-sambhav/nut-js";

(async () => {
  await screen.highlight(new Region(100, 200, 300, 400));
})();
