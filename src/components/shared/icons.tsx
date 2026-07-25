import type { SVGProps } from "react";

export function ArrowOutIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M10 8.00001L16 8L16 14M15.5 8.5L8 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ArrowLeftIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M10.5858 16.242L6.34315 11.9994L10.5858 7.75675M7.05026 11.9994L17.6569 11.9994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M13.4137 7.75797L17.6564 12.0006L13.4137 16.2433M16.9493 12.0006L6.34266 12.0006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function MenuIcon({
  open,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { open?: boolean }) {
  return (
    <svg
      width="24"
      height="32"
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect
        x="2"
        y="9"
        width="20"
        height="2"
        style={{ transformOrigin: "12px 15px" }}
        className={`transform fill-current transition-[translate,rotate] duration-300 ease-in-out ${
          open ? "translate-y-[6px] rotate-45" : "translate-y-0 rotate-0"
        }`}
      />
      <rect
        x="2"
        y="15"
        width="15"
        height="2"
        className={`fill-current transition-opacity duration-300 ease-in-out ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <rect
        x="2"
        y="21"
        width={open ? 20 : 10}
        height="2"
        style={{ transformOrigin: "12px 15px" }}
        className={`transform fill-current transition-[translate,rotate] duration-300 ease-in-out ${
          open ? "-translate-y-[6px] -rotate-45" : "translate-y-0 rotate-0"
        }`}
      />
    </svg>
  );
}
