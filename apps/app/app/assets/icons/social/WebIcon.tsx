import { SVGProps } from "react";

const WebIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.0016 19.7304C8.68772 19.7304 7.45268 19.4811 6.29655 18.9824C5.1404 18.4838 4.13472 17.807 3.2795 16.9522C2.42427 16.0973 1.74721 15.0921 1.24833 13.9364C0.749442 12.7808 0.5 11.5461 0.5 10.2321C0.5 8.91819 0.749334 7.68315 1.248 6.52702C1.74667 5.37087 2.42342 4.36519 3.27825 3.50997C4.1331 2.65474 5.13834 1.97768 6.29398 1.47879C7.44959 0.979912 8.68437 0.730469 9.9983 0.730469C11.3122 0.730469 12.5473 0.979803 13.7034 1.47847C14.8596 1.97714 15.8652 2.65389 16.7205 3.50872C17.5757 4.36357 18.2527 5.36881 18.7516 6.52445C19.2505 7.68006 19.5 8.91484 19.5 10.2288C19.5 11.5427 19.2506 12.7777 18.752 13.9339C18.2533 15.09 17.5765 16.0957 16.7217 16.9509C15.8669 17.8062 14.8616 18.4832 13.706 18.9821C12.5504 19.481 11.3156 19.7304 10.0016 19.7304ZM8.99998 18.1804V16.2304C8.44998 16.2304 7.97914 16.0346 7.58748 15.6429C7.19581 15.2513 6.99998 14.7804 6.99998 14.2304V13.2304L2.19998 8.43045C2.14998 8.73044 2.10414 9.03045 2.06248 9.33045C2.02081 9.63045 1.99998 9.93044 1.99998 10.2304C1.99998 12.2471 2.66248 14.0138 3.98748 15.5304C5.31248 17.0471 6.98331 17.9304 8.99998 18.1804ZM15.9 15.6304C16.2333 15.2638 16.5333 14.8679 16.8 14.4429C17.0666 14.0179 17.2875 13.5763 17.4625 13.1179C17.6375 12.6596 17.7708 12.1888 17.8625 11.7054C17.9541 11.2221 18 10.7304 18 10.2304C18 8.59228 17.5474 7.09619 16.6423 5.74219C15.7372 4.38821 14.5231 3.41122 13 2.81122V3.23044C13 3.78044 12.8041 4.25128 12.4125 4.64294C12.0208 5.03461 11.55 5.23044 11 5.23044H8.99998V7.23044C8.99998 7.51378 8.90414 7.75128 8.71248 7.94295C8.52081 8.13461 8.28331 8.23044 7.99998 8.23044H5.99998V10.2304H12C12.2833 10.2304 12.5208 10.3263 12.7125 10.5179C12.9041 10.7096 13 10.9471 13 11.2304V14.2304H14C14.4333 14.2304 14.825 14.3596 15.175 14.6179C15.525 14.8763 15.7666 15.2138 15.9 15.6304Z"
        fill="#323334"
      />
    </svg>
  );
};

export default WebIcon;
