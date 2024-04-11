import { SVGProps } from "react";

const EventIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      {...props}
    >
      <path
        d="M12.25 20.0625L15.5 17.5312L18.75 20.0625L17.5 16.0625L20.5625 13.5H16.8125L15.5 9.6875L14.1875 13.5H10.4375L13.5 16.0625L12.25 20.0625ZM4.875 25C4.35417 25 3.91146 24.8177 3.54688 24.4531C3.18229 24.0885 3 23.6458 3 23.125V19C3 18.7917 3.05729 18.6094 3.17188 18.4531C3.28646 18.2969 3.4375 18.1875 3.625 18.125C4.27083 17.8958 4.77604 17.4844 5.14062 16.8906C5.50521 16.2969 5.6875 15.6667 5.6875 15C5.6875 14.3542 5.50521 13.7292 5.14062 13.125C4.77604 12.5208 4.27083 12.1042 3.625 11.875C3.4375 11.8125 3.28646 11.7031 3.17188 11.5469C3.05729 11.3906 3 11.2083 3 11V6.875C3 6.35417 3.18229 5.91146 3.54688 5.54688C3.91146 5.18229 4.35417 5 4.875 5H26.125C26.6458 5 27.0885 5.18229 27.4531 5.54688C27.8177 5.91146 28 6.35417 28 6.875V11C28 11.2083 27.9427 11.3906 27.8281 11.5469C27.7135 11.7031 27.5625 11.8125 27.375 11.875C26.7292 12.1042 26.224 12.5208 25.8594 13.125C25.4948 13.7292 25.3125 14.3542 25.3125 15C25.3125 15.6667 25.4948 16.2969 25.8594 16.8906C26.224 17.4844 26.7292 17.8958 27.375 18.125C27.5625 18.1875 27.7135 18.2969 27.8281 18.4531C27.9427 18.6094 28 18.7917 28 19V23.125C28 23.6458 27.8177 24.0885 27.4531 24.4531C27.0885 24.8177 26.6458 25 26.125 25H4.875ZM4.875 23.125H26.125V19.7188C25.3333 19.1771 24.6875 18.5 24.1875 17.6875C23.6875 16.875 23.4375 15.9792 23.4375 15C23.4375 14.0208 23.6875 13.125 24.1875 12.3125C24.6875 11.5 25.3333 10.8229 26.125 10.2812V6.875H4.875V10.2812C5.6875 10.8229 6.33854 11.5 6.82812 12.3125C7.31771 13.125 7.5625 14.0208 7.5625 15C7.5625 15.9792 7.31771 16.875 6.82812 17.6875C6.33854 18.5 5.6875 19.1771 4.875 19.7188V23.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EventIcon;
