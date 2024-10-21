import { expect, test } from "vitest";
import { astra } from "/.milkio/test";

test.sequential("basic", async () => {
  const [context, reject, world] = await astra.createMirrorWorld(import.meta.url);
  const [error, results] = await world.execute("/$call/calc", {
    params: {
      //
    },
    generateParams: true,
  });
  if (error) throw reject("Milkio did not execute successfully", error);

  // Check if the return value is as expected
  // ...
});