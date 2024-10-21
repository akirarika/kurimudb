import { action, reject } from "milkio";

export default action({
  async handler(
    context,
    params: {
      a: string;
      b: number;
      throw?: boolean;
    },
  ) {
    const a = context.getConfig("app");

    const result = await context
      /**
       * calc
       */
      .step(async (stage) => {
        const count = Number(params.a) + params.b;
        context.logger.info("count", count);
        if (params.throw) throw reject("FAIL", "Reject this request");
        return {
          count,
        };
      })
      .run();

    return result.count;
  },
});