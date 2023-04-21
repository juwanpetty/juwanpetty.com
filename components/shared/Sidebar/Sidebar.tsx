import React from "react";

import Folder from "@icons/Folder";
import Home from "@icons/Home";
import News from "@icons/News";
import Video from "@icons/Video";

import styles from "./Sidebar.module.scss";
import SidebarAccordion from "./components/SidebarAccordion/SidebarAccordion";
import SidebarLink from "./components/SidebarLink/SidebarLink";

export interface SidebarProps {
  // articles?: React.ReactNode;
  // videos?: React.ReactNode;
}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.SidebarGroup}>
        <SidebarLink url="/" accessibilityLabel="Home" icon={<Home />}>
          Home
        </SidebarLink>
        <SidebarLink
          url="/projects"
          accessibilityLabel="Projects"
          icon={<Folder />}
        >
          Projects
        </SidebarLink>
        <SidebarAccordion id="articles" resource="Articles" icon={<News />}>
          <SidebarLink
            url="/projects"
            accessibilityLabel="Projects"
            icon={<Folder />}
          >
            Article
          </SidebarLink>
          <SidebarLink
            url="/projects"
            accessibilityLabel="Projects"
            icon={<Folder />}
          >
            Article
          </SidebarLink>
          <SidebarLink
            url="/projects"
            accessibilityLabel="Projects"
            icon={<Folder />}
          >
            Article
          </SidebarLink>
        </SidebarAccordion>
        <SidebarAccordion id="videos" resource="Videos" icon={<Video />}>
          <SidebarLink
            url="/projects"
            accessibilityLabel="Projects"
            icon={<Folder />}
            isExternal
          >
            Video
          </SidebarLink>
          <SidebarLink
            url="/projects"
            accessibilityLabel="Projects"
            icon={<Folder />}
            isExternal
          >
            Video
          </SidebarLink>
          <SidebarLink
            url="/projects"
            accessibilityLabel="Projects"
            icon={<Folder />}
            isExternal
          >
            Video
          </SidebarLink>
        </SidebarAccordion>
      </div>
      <div className={styles.SidebarGroup}>
        <span className={styles.SidebarHeading}>Explore</span>
        <SidebarLink
          url="/reading"
          accessibilityLabel="Reading"
          icon={<Folder />}
        >
          Reading
        </SidebarLink>
        <SidebarLink
          url="/bookmarks"
          accessibilityLabel="Bookmarks"
          icon={<Folder />}
        >
          Bookmarks
        </SidebarLink>
        <SidebarLink url="/tools" accessibilityLabel="Tools" icon={<Folder />}>
          Tools
        </SidebarLink>
        <SidebarLink
          url="/now"
          accessibilityLabel="Now"
          icon={<Folder />}
          isNew
        >
          Now
        </SidebarLink>
      </div>
    </div>
  );
};

export default Sidebar;
