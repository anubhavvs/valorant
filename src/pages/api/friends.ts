import type { NextApiRequest, NextApiResponse } from "next";
import { friends } from "@/data/friends";

type Friends = {
  name: string;
  tag: string;
  playerCardIcon: string;
  active: boolean;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Friends>
) {
  res.status(200).json(friends);
}
