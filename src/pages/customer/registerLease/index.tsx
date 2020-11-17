import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Row, Col, Card, Avatar } from 'antd';
import userPic from '@/assets/userImage/luochao.jpg';
import styles from './registerLease.less';
import RecordView from './tabsContent/record';

const msgList = [
  { name: '用户编号', value: 'MJY021354' },
  { name: '注册时间：', value: '2020-01-02 14：32' },
  { name: '手机号：', value: '18624567963' },
  { name: '生日：', value: '2020-01-02' },
  { name: '租客来源：', value: '安居客' },
  { name: '当前联络人：', value: '罗超 ' },
  { name: '累计星光：', value: '343' },
  { name: '用户编号', value: 'MJY021354' },
  { name: '推荐用户：', value: '12' },
];
const tabList = [
  {
    key: '1',
    tab: '签约登记',
  },
  {
    key: '2',
    tab: '星光明细',
  },
  {
    key: '3',
    tab: '实名信息',
  },
  {
    key: '4',
    tab: '推荐记录',
  },
];
const SignRecord = () => {
  const keyChange = (key: string) => {
    console.log('tabkey change', key);
  };
  return (
    <PageHeaderWrapper>
      <Row gutter={16} align="stretch">
        <Col {...{ sm: 8, md: 8, lg: 8, xl: 7 }}>
          <Card className={styles.cardBox}>
            <div className={styles.userInfoBoX}>
              <Avatar alt="头衔" size={86} src={userPic} />
              <div className={styles.userName}>萝卜超人</div>
              <div className={styles.userAsset}>当前星光：132</div>
            </div>
            <div className={styles.userDesc}>
              {msgList.map((item, index) => {
                return (
                  <Row gutter={6} align="middle" key={index}>
                    <Col span={8}>{item.name}</Col>
                    <Col className={styles.alignRightText} span={16}>
                      {item.value}
                    </Col>
                  </Row>
                );
              })}
            </div>
          </Card>
        </Col>
        <Col {...{ sm: 16, md: 16, lg: 16, xl: 17 }}>
          <Card tabList={tabList} onTabChange={keyChange} className={styles.cardBox}>
            <RecordView />
          </Card>
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
};

export default SignRecord;
