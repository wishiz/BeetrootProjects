import React from 'react';

// Components
import ContentLimiter from '../../../components/ContentLimiter';
import Tabs from '../../../components/Tabs';
import TabsContent from './TabContent';

// Constants
import contents from '../../../constants/ABOUT_US_DATA';
// ----------------

export default function AboutUsSection() {
  const tabFlags = [
    { name: 'tabOne', title: 'History' },
    { name: 'tabTwo', title: 'Awards' },
    { name: 'tabThree', title: 'Philosophy' },
  ];

  const contentToDisplay = contents.find(())

  const tabContent = [
    {
      name: 'tabOne',
      content: () => <TabsContent contentToDisplay="tabOne" />,
    },
    { name: 'tabTwo', content: () => <div>tab content 2</div> },
    { name: 'tabThree', content: () => <div>tab content 3</div> },
  ];

  return (
    <ContentLimiter>
      <Tabs flags={tabFlags} content={tabContent} defaultTab="tabOne" />
    </ContentLimiter>
  );
}
