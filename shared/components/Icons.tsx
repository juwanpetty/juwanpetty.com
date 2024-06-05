import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandGithubFilled,
  IconChevronRight,
  IconCircleArrowUp,
  IconCopy,
  IconClock,
  IconLayoutSidebar,
  IconLayoutSidebarRight,
  IconLayoutSidebarLeftCollapseFilled,
  IconLink,
  IconMail,
  IconMoon,
  IconPhoto,
  IconRss,
  IconSearch,
  IconSlash,
  IconSquareRounded,
  IconSun,
  type TablerIconsProps,
} from "@tabler/icons-react";

export const Icons = {
  ArrowRight: (props: TablerIconsProps) => <IconArrowRight {...props} />,
  Book: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path d="M9,15.051c.17,0,.339-.045,.494-.134,.643-.371,1.732-.847,3.141-.845,.899,.001,1.667,.197,2.27,.435,.648,.255,1.344-.24,1.344-.937V4.487c0-.354-.181-.68-.486-.86-.637-.376-1.726-.863-3.14-.863-1.89,0-3.198,.872-3.624,1.182" />
        <path d="M9,15.051c-.17,0-.339-.045-.494-.134-.643-.371-1.732-.847-3.141-.845-.899,.001-1.667,.197-2.27,.435-.648,.255-1.344-.237-1.344-.933,0-2.593,0-7.472,0-9.09,0-.354,.181-.676,.486-.856,.637-.376,1.726-.863,3.14-.863,1.89,0,3.198,.872,3.624,1.182h0s0,11.104,0,11.104Z" />
      </g>
    </svg>
  ),
  ChevronRight: (props: TablerIconsProps) => <IconChevronRight {...props} />,
  CircleArrowUp: (props: TablerIconsProps) => <IconCircleArrowUp {...props} />,
  Code: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <polyline points="5.25 12.5 1.75 9 5.25 5.5" />
        <polyline points="12.75 12.5 16.25 9 12.75 5.5" />
        <line x1="7.5" y1="15.25" x2="10.5" y2="2.75" />
      </g>
    </svg>
  ),
  Copy: (props: TablerIconsProps) => <IconCopy {...props} />,
  Clock: (props: TablerIconsProps) => <IconClock {...props} />,
  Close: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <line x1="14" y1="4" x2="4" y2="14" />
        <line x1="4" y1="4" x2="14" y2="14" />
      </g>
    </svg>
  ),
  External: (props: TablerIconsProps) => <IconArrowUpRight {...props} />,
  Github: (props: TablerIconsProps) => <IconBrandGithubFilled {...props} />,
  GithubAlt: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"
      />
    </svg>
  ),
  Home: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path d="M3.145,6.2l5.25-3.99c.358-.272,.853-.272,1.21,0l5.25,3.99c.249,.189,.395,.484,.395,.796v7.254c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2V6.996c0-.313,.146-.607,.395-.796Z" />
      </g>
    </svg>
  ),
  Image: (props: TablerIconsProps) => <IconPhoto {...props} />,
  Link: (props: TablerIconsProps) => <IconLink {...props} />,
  Mail: (props: TablerIconsProps) => <IconMail {...props} />,
  Menu: (props: any) => <IconLayoutSidebar {...props} />,
  MenuRight: (props: any) => <IconLayoutSidebarRight {...props} />,
  Moon: (props: TablerIconsProps) => <IconMoon {...props} />,
  Placeholder: (props: TablerIconsProps) => <IconSquareRounded {...props} />,
  Rss: (props: TablerIconsProps) => <IconRss {...props} />,
  Search: (props: TablerIconsProps) => <IconSearch {...props} />,
  Slash: (props: TablerIconsProps) => <IconSlash {...props} />,
  SidebarCollapse: (props: TablerIconsProps) => (
    <IconLayoutSidebarLeftCollapseFilled {...props} />
  ),
  Sun: (props: TablerIconsProps) => <IconSun {...props} />,
};
