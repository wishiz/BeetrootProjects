import React from 'react';

//Components
import ContentLimiter from '../../../components/ContentLimiter';
import Tabs from './Tabs';

// ----------------

export const AboutUsSection = () => {
  const tabFlags = [
    { name: 'tabOne', title: 'History' },
    { name: 'tabTwo', title: 'Awards' },
    { name: 'tabThree', title: 'Philosophy' },
  ];

  const tabContent = [
    { name: 'tabOne', content: TabsContent },
    { name: 'tabTwo', content: TabsContent },
    { name: 'tabThree', content: TabsContent },
  ];

  return (
    <ContentLimiter>
      <Tabs flag={tabFlags} conte={tabContent} />
    </ContentLimiter>
  );
};
