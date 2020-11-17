import React from 'react';
import { Select, Tag, Row, Col, Table } from 'antd';
import textImage from '@/assets/userImage/luochao.jpg';
import styles from './record.less';

const { Option } = Select;

const list = [
  {
    name: '租客姓名：',
    value: '罗超',
  },
  {
    name: '租客电话：',
    value: '18584780394',
  },
  {
    name: '租金：',
    value: '1750元/月',
  },
  {
    name: '押金：',
    value: '1600 ',
  },
  {
    name: '付款方式：',
    value: '季付',
  },
  {
    name: '租客来源：',
    value: '58',
  },
  {
    name: '楼层：',
    value: '25/32',
  },
  {
    name: '电梯房：',
    value: '是',
  },
  {
    name: '所属商户：',
    value: '像素公寓',
  },
  {
    name: '备注：',
    value: '对对对',
  },
];
const columns = [
  {
    title: '费用类型',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '缴纳方式',
    dataIndex: 'age',
    align: 'center',
  },
  {
    title: '金额',
    dataIndex: 'address',
    align: 'center',
  },
];
const data = [
  {
    key: '1',
    name: '物业费',
    age: 32,
    address: '100',
  },
  {
    key: '2',
    name: '物业费',
    age: 42,
    address: '1000',
  },
  {
    key: '3',
    name: '物业费',
    age: 32,
    address: '1000m@',
  },
];
const Record = () => {
  const selectChange = (value: string, option: any) => {
    console.log('value', value);
    console.log('option', option);
  };
  return (
    <div>
      <div className={styles.selectWrap}>
        <Select defaultValue="1" style={{ width: '100%' }} onChange={selectChange}>
          <Option key="1" value="1">
            <div>
              <Tag color="#f50">退租</Tag>
              <span>天府鹭洲1-3-1804-A 罗慧丹 2019-03-24-2020-03-23（续租） </span>
            </div>
          </Option>
          <Option key="2" value="3">
            <div>
              <Tag color="#2db7f5">续租</Tag>
              <span>天府鹭洲1-3-1804-A 罗慧丹 2019-03-24-2020-03-23（续租） </span>
            </div>
          </Option>
          <Option key="3" value="4">
            <div>
              <Tag color="#87d068">新租</Tag>
              <span>天府鹭洲1-3-1804-A 罗慧丹 2019-03-24-2020-03-23（续租） </span>
            </div>
          </Option>
          <Option key="4" value="5">
            <div>
              <Tag color="#108ee9">换租</Tag>
              <span>天府鹭洲1-3-1804-A 罗慧丹 2019-03-24-2020-03-23（续租） </span>
            </div>
          </Option>
        </Select>
      </div>
      <div className={styles.baseMsg}>
        <div className={styles.Boxtitle}>基本信息</div>
        <div className={styles.msgDetail}>
          <Row gutter={8}>
            {list.map((item) => {
              return (
                <Col span={8} key={item.name}>
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div className={styles.tableBox}>
        <div className={styles.Boxtitle}>费用缴纳方式</div>
        <Table columns={columns} dataSource={data} size="small" pagination={false} />
      </div>
      <div>
        <div className={styles.Boxtitle}>附件</div>
        <div className={styles.fileBox}>
          <div className={styles.imageBox}>
            <img draggable="false" className={styles.imageItem} src={textImage} alt="附件" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
