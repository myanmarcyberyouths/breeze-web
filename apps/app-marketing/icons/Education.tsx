import { IconPropsInterface } from "@/interfaces/IconProps";

const EducationIcon = ({ width = "40", height = "40" }: IconPropsInterface) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M40 0H0V40H40V0Z" fill="url(#pattern_education)" />
      <defs>
        <pattern
          id="pattern_education"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_44_293" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="image0_44_293"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default EducationIcon;
