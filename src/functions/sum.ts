import type { SumReq, SumRes } from "./types/types.js";

export const sum = (req: SumReq): SumRes => {
  return { result: req.a + req.b };
};
