import type { NextApiRequest, NextApiResponse } from "next";
import { BankOutputModel } from "../../widgets/main.type";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BankOutputModel>
) {
  try {
      res.status(200).json({
        branch: "Ngân hàng TMCP Việt Nam thịnh vượng (VPBank) Hội sở",
        account_number: "191415477",
        account_name: "Công ty cổ phần Be Group",
        content: "“Covid19”",
      });
  } catch (error: any) {
    res.status(error.status).json(error.response.data);
  }
}
