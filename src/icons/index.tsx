/* eslint-disable max-len */
import { DefineComponent, defineComponent, SVGAttributes } from 'vue';

const SVG = defineComponent({
  props: {
    fill: {
      type: String,
      required: false,
      default: 'currentColor',
    },
    height: {
      type: String,
      required: false,
      default: '24',
    },
    viewBox: {
      type: String,
      required: false,
      default: '0 0 24 24',
    },
    stroke: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
      default: '24',
    },
    xmlns: {
      type: String,
      required: false,
      default: 'http://www.w3.org/2000/svg',
    },
  },
  setup(props, { slots }) {
    return () => (
      <svg {...props}>{ slots.default ? slots.default() : null }</svg>
    );
  },
}) as DefineComponent<SVGAttributes>;

export const RunIcon = (): JSX.Element => (
  <SVG viewBox="0 0 17 16">
    <path d="M11.0792 8.1078C11.2793 8.25007 11.27 8.55012 11.0616 8.67981L6.02535 11.8135C5.79638 11.956 5.5 11.7913 5.5 11.5216L5.5 8.40703L5.5 4.80661C5.5 4.52735 5.81537 4.36463 6.04296 4.52647L11.0792 8.1078Z" />
  </SVG>
);

export const BackwardIcon = (): JSX.Element => (
  <SVG>
    <path d="M8.99126 12.2106L14.0455 6.98196L13.2998 6.21057L7.5 12.2106L13.2998 18.2106L14.0455 17.3924L8.99126 12.2106Z" />
  </SVG>
);

export const ForwardIcon = (): JSX.Element => (
  <SVG>
    <path d="M13.5087 12.2105L8.45455 17.4392L9.2002 18.2106L15 12.2106L9.2002 6.21057L8.45455 7.02875L13.5087 12.2105Z" />
  </SVG>
);

export const RefreshIcon = (): JSX.Element => (
  <SVG>
    <path
      clip-rule="evenodd"
      d="M16.48 12.8571C16.0883 15.1705 14.1389 16.9286 11.7931 16.9286C9.16499 16.9286 7.03448 14.722 7.03448 12C7.03448 9.27803 9.16499 7.07143 11.7931 7.07143C13.6797 7.07143 15.3099 8.20855 16.0796 9.85714L14.2759 9.85714V11.1429H16.48H16.7586H17.5275H18V6.85714L16.7586 6.85714V8.90778C15.7449 7.16536 13.9004 6 11.7931 6C8.59366 6 6 8.68629 6 12C6 15.3137 8.59366 18 11.7931 18C14.7116 18 17.126 15.7648 17.5275 12.8571H16.48Z"
      fill-rule="evenodd"
    />
  </SVG>
);

export const ExportIcon = (): JSX.Element => (
  <svg
    fill="none"
    height="24"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.5714 7H8.07143C7.4797 7 7 7.4797 7 8.07143V15.9286C7 16.5203 7.4797 17 8.07143 17H15.9286C16.5203 17 17 16.5203 17 15.9286V13.4286" />
    <path d="M14.1429 7H16.8929C16.952 7 17 7.04798 17 7.10714V9.85715" />
    <path d="M11.2858 12.7143L16.8572 7.14282" />
  </svg>
);

export const DirectoryIcon = ({
  isOpen = false,
}: {
  isOpen?: boolean;
}): JSX.Element => (
  <SVG height="20" viewBox="0 0 1024 1024" width="20">
    {isOpen ? (
      <path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2c-1.5-1.4-3.5-2.2-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32z m-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z" />
    ) : (
      <path d="M880 298.4H521L403.7 186.2c-1.5-1.4-3.5-2.2-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32z" />
    )}
  </SVG>
);

export const FileIcon = (): JSX.Element => (
  <SVG height="20" viewBox="0 0 1024 1024" width="20">
    <path d="M309.333333 192a32 32 0 0 0-32 32v576c0 17.664 14.336 32 32 32h384a32 32 0 0 0 32-32v-384h-128a96 96 0 0 1-96-96v-128h-192z m256 45.226667l114.773334 114.773333H597.333333a32 32 0 0 1-32-32V237.226667zM213.333333 224A96 96 0 0 1 309.333333 128h224a32 32 0 0 1 22.613334 9.386667l224 224c6.016 5.973333 9.386667 14.122667 9.386666 22.613333v416A96 96 0 0 1 693.333333 896h-384A96 96 0 0 1 213.333333 800V224z"></path>
  </SVG>
);

export const CloseIcon = (): JSX.Element => (
  <SVG height="8" viewBox="0 0 16 16" width="8">
    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
  </SVG>
);