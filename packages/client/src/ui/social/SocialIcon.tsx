import dynamic from "next/dynamic";
import Link from "next/link";
import type { FC } from "react";

interface Props {
  type: "facebook" | "instagram" | "linkedin" | "gmail" | "github";
  url?: string;
}

const SocialIcon: FC<Props> = ({ url, type }) => {
  const Icon = dynamic(() =>
    type === "facebook"
      ? import("@common/icons/FacebookIcon")
      : type === "instagram"
      ? import("@common/icons/InstagramIcon")
      : type === "linkedin"
      ? import("@common/icons/LinkedInIcon")
      : type === "github"
      ? import("@common/icons/GitHubIcon")
      : import("@common/icons/GmailIcon")
  );

  return (
    <>
      {typeof url !== "undefined" ? (
        <Link href={url}>
          <Icon className="h-6 w-6 cursor-pointer fill-gray-400" />
        </Link>
      ) : (
        <Icon className="h-6 w-6 fill-gray-400" />
      )}
    </>
  );
};

export default SocialIcon;
