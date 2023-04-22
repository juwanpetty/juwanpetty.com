"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";

import BookOpen from "@icons/BookOpen";
import Bookmark from "@icons/Bookmark";
import ChatAlt from "@icons/ChatAlt";
import Folder from "@icons/Folder";
import Hashtag from "@icons/Hashtag";
import Home from "@icons/Home";
import LightningBolt from "@icons/LightningBolt";
import Login from "@icons/Login";
import News from "@icons/News";
import Sun from "@icons/Sun";
import Video from "@icons/Video";

import Icon from "../Icon/Icon";
import styles from "./Sidebar.module.scss";
import SidebarAccordion from "./components/SidebarAccordion/SidebarAccordion";
import SidebarLink from "./components/SidebarLink/SidebarLink";

export interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.SidebarHeader}>
        <div className={styles.SidebarControls}>
          <button className={styles.SidebarControl}>
            <Icon source={<Sun />} size="small" />
          </button>
          <button className={styles.SidebarControl}>
            <Icon source={<Login />} size="small" />
          </button>
        </div>
      </div>
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
            url="https://www.example.com/"
            accessibilityLabel="Video"
            icon={<Folder />}
            isExternal
          >
            Video
          </SidebarLink>
          <SidebarLink
            url="https://www.example.com/"
            accessibilityLabel="Video"
            icon={<Folder />}
            isExternal
          >
            Video
          </SidebarLink>
          <SidebarLink
            url="https://www.example.com/"
            accessibilityLabel="Video"
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
          icon={<BookOpen />}
        >
          Reading
        </SidebarLink>
        <SidebarLink
          url="/bookmarks"
          accessibilityLabel="Bookmarks"
          icon={<Bookmark />}
        >
          Bookmarks
        </SidebarLink>
        <SidebarLink
          url="/tools"
          accessibilityLabel="Tools"
          icon={<LightningBolt />}
        >
          Tools
        </SidebarLink>
        <SidebarLink
          url="/now"
          accessibilityLabel="Now"
          icon={<ChatAlt />}
          isNew
        >
          Now
        </SidebarLink>
      </div>

      <div className={styles.SidebarGroup}>
        <span className={styles.SidebarHeading}>Find me</span>
        <SidebarLink
          url="https://www.example.com/"
          accessibilityLabel="Twitter"
          icon={<Hashtag />}
          isExternal
        >
          Twitter
        </SidebarLink>
        <SidebarLink
          url="https://www.example.com/"
          accessibilityLabel="YouTube"
          icon={<Hashtag />}
          isExternal
        >
          YouTube
        </SidebarLink>
        <SidebarLink
          url="https://www.example.com/"
          accessibilityLabel="GitHub"
          icon={<Hashtag />}
          isExternal
        >
          GitHub
        </SidebarLink>
      </div>
    </div>
  );
};

export default Sidebar;
