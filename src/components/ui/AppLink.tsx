import Link, { LinkProps } from "next/link";
import React from "react";
import type { Locale } from "@/lib/i18n";

type AppLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    lang?: string;
    href: string;
  };

export default function AppLink({ lang, href, children, ...props }: AppLinkProps) {
  let strHref = href.toString();
  
  if (strHref.startsWith("/en/")) strHref = strHref.replace("/en/", "/");
  else if (strHref === "/en") strHref = "/";
  // We don't strip /ar/ because /ar/ is valid for Arabic!
  
  return (
    <Link href={strHref} {...props}>
      {children}
    </Link>
  );
}
