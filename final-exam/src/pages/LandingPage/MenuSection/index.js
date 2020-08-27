import React from 'react';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import SectionTitle from '../../../components/SectionTitle';
import Tabs from '../../../components/Tabs';

import { tabsLinks, tabsContent } from '../../../constants/menuTabsData';
import { menuTitle } from '../../../constants/menuSectionData';

import './styles.scss';

export default function MenuSection() {
  return (
    <section className="menu" id="menu">
      <ContentWidthLimiter className="menu__container">
        <SectionTitle
          className="menu__title"
          heading={menuTitle.heading}
          desc={menuTitle.desc}
          icon={menuTitle.icon}
        />
        <Tabs tabsLinks={tabsLinks} tabsContent={tabsContent} />
      </ContentWidthLimiter>
    </section>
  );
}
