import { getCmsClient } from "@app/cms/cms-server";
import { getProfileQuery } from "@features/profile/profile-queries";
import type { ProfileModel } from "@features/profile/profile-types";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  profile: ProfileModel;
};

const handler = async (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  const client = getCmsClient(false);
  const profile: ProfileModel = await client.fetch(getProfileQuery, {
    environment: "production",
  });
  res.status(200).json({ profile });
};

export default handler;
