import { useEffect, type FC } from "react";

interface Props {
  containerId: string;
}

const GTM: FC<Props> = ({ containerId }) => {
  useEffect(() => {
    if (containerId) {
      (function (w, d, s, l, i) {
        // @ts-ignore
        w[l] = w[l] || [];
        // @ts-ignore
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        // @ts-ignore
        j.async = true;
        // @ts-ignore
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        // @ts-ignore
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", containerId);
    }
  }, [containerId]);

  return null;
};

export default GTM;
