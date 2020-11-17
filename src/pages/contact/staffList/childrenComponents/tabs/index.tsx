import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const TabsView = (props) => {
  return (
    <Tabs defaultActiveKey="1" tabPosition="left" style={{ maxHeight: 700, width: '100%' }}>
      {[...Array.from({ length: 50 }, (v, i) => i)].map((i) => (
        <TabPane tab={`Tab-${i}`} key={i} />
      ))}
    </Tabs>
  );
};

export default TabsView;
