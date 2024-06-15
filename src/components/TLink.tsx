"use client";

import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export const TLink: React.FC<LinkProps & { children: React.ReactNode }> = ({
  children,
  ...otherProps
}) => {
  const router = useRouter();

  const fadeBodyOut = useCallback(() => {
    const body = document.querySelector("body");
    if (body !== null) {
      body.classList.add("transition-out");
    }
  }, []);

  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        fadeBodyOut();

        setTimeout(() => {
          router.push(otherProps.href.toString(), {});
        }, 1000);
      }}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export const RouteChangeListener = () => {
  const path = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body !== null) {
      body.classList.remove("transition-out");
    }
  }, [path]);

  return <div aria-hidden="true" className="route-change-listener"></div>;
};
