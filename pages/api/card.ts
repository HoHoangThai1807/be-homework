import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    amount?: number;
    message?: string;
  }>
) {
  try {
    if (req.method !== "POST") {
      res.status(405).send({ message: "Only POST requests allowed" });
      return;
    }

    const amount = req.body.amount;
    if (typeof amount === "string" || amount instanceof String) {
      res.status(403).json({
        message: "Only number input allowed!",
      });
    } else {
      res.status(200).json(req.body);
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to post data!" });
  }
}
