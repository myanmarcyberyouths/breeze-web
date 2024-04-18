import { SVGProps } from "react";

const InformationIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 16.75H12.75V11H11.25V16.75ZM12 9.28845C12.2288 9.28845 12.4207 9.21105 12.5755 9.05625C12.7303 8.90145 12.8077 8.70963 12.8077 8.48078C12.8077 8.25194 12.7303 8.06012 12.5755 7.9053C12.4207 7.7505 12.2288 7.6731 12 7.6731C11.7711 7.6731 11.5793 7.7505 11.4245 7.9053C11.2697 8.06012 11.1923 8.25194 11.1923 8.48078C11.1923 8.70963 11.2697 8.90145 11.4245 9.05625C11.5793 9.21105 11.7711 9.28845 12 9.28845ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5765 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45268 3.248 8.29655C3.74667 7.1404 4.42342 6.13472 5.27825 5.2795C6.1331 4.42427 7.13834 3.74721 8.29398 3.24833C9.44959 2.74944 10.6844 2.5 11.9983 2.5C13.3122 2.5 14.5473 2.74933 15.7034 3.248C16.8596 3.74667 17.8652 4.42342 18.7205 5.27825C19.5757 6.1331 20.2527 7.13834 20.7516 8.29398C21.2505 9.44959 21.5 10.6844 21.5 11.9983C21.5 13.3122 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8652 18.7217 18.7205C17.8669 19.5757 16.8616 20.2527 15.706 20.7516C14.5504 21.2505 13.3156 21.5 12.0016 21.5Z"
        fill="#323334"
      />
    </svg>
  );
};

export default InformationIcon;
