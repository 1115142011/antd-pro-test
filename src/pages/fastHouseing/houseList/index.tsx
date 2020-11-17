import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, Input } from 'antd';
import { PlusOutlined, RollbackOutlined } from '@ant-design/icons';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import classnames from 'classnames';

import { getContactList } from '@/services/contact';
import SearchHouse from '@/components/searchHouse';
import styles from './index.less';
import { ContactListItem } from '../../contact/data.d';

interface ListParam {
  pageSize?: number;
  pageNo?: number;
  current?: number;
  status?: number;
  name: string;
  [key: string]: any;
}
const HouseTabls: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [param, setParam] = useState<ListParam>({ pageNo: 1, pageSize: 10, status: 0, name: '' });
  const sizeChange = (pageNo: number, size: number) => {
    setParam({
      ...param,
      pageNo,
      pageSize: size,
    });
  };
  const pageIndexChange = (page: number, pageSize: number = 10) => {
    setParam({
      ...param,
      pageNo: page,
      pageSize,
    });
  };
  const queryList = async (params: any) => {
    const res = await getContactList(params);

    return {
      data: res,
      total: res.length,
      success: res.length > 0,
    };
  };

  const column: ProColumns<ContactListItem>[] = [
    {
      title: '房源号',
      valueType: 'index',
    },
    {
      title: '所属商户',
      align: 'center',
      dataIndex: 'name',
    },
    {
      title: '房源名称',
      dataIndex: 'jobStatus',
      valueEnum: {
        0: { text: '否', status: 'Error' },
        1: { text: '是', status: 'Processing' },
      },
    },
    {
      title: '房间',
      align: 'center',
      dataIndex: 'account',
    },
    {
      title: '房间类型',
      align: 'center',
      dataIndex: 'entryTime',
      render(_, record) {
        return (
          <React.Fragment>
            {record.jobStatus === 1 ? (
              record.entryTime
            ) : (
              <React.Fragment>
                <div>{record.entryTime}</div>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      },
    },
    {
      title: '上下架状态',
      align: 'center',
      dataIndex: 'entryTime',
      render(_, record) {
        return (
          <React.Fragment>
            {record.jobStatus === 1 ? (
              record.entryTime
            ) : (
              <React.Fragment>
                <div>{record.entryTime}</div>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      },
    },
    {
      title: '房屋状态',
      align: 'center',
      dataIndex: 'jobStatus',
      valueEnum: {
        0: { text: '否', status: 'Error' },
        1: { text: '是', status: 'Processing' },
      },
    },
    {
      title: '定价',
      align: 'center',
      dataIndex: 'jobStatus',
      valueEnum: {
        0: { text: '否', status: 'Error' },
        1: { text: '是', status: 'Processing' },
      },
    },
    {
      title: '近30天浏览量',
      align: 'center',
      dataIndex: 'jobStatus',
      valueEnum: {
        0: { text: '否', status: 'Error' },
        1: { text: '是', status: 'Processing' },
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      align: 'center',
      render(_, record) {
        console.log(record);
        return (
          <div>
            <a>产看详情</a>

            <a style={{ margin: '0 20px' }}>下架</a>

            <a>取消推荐</a>
          </div>
        );
      },
    },
  ];

  const changeStatus = (value: number) => {
    setParam({
      ...param,
      status: value,
    });
  };
  const onSearch = (value: string) => {
    setParam({
      ...param,
      name: value,
    });
  };
  const userChange = (value: any) => {
    console.log('xxx', value);
  };

  return (
    <React.Fragment>
      <PageHeaderWrapper>
        <div className={styles.searchForm}>
          <Card>
            <div className={styles.searchIput}>
              <Input.Search
                placeholder="用户名/手机号/楼盘"
                allowClear
                enterButton="搜索"
                size="large"
                onSearch={onSearch}
              />
            </div>

            <div className={styles.selectTabs}>
              <span>租客标签：</span>
              <div className={styles.tabsBox}>
                <a
                  className={classnames({ [styles.current]: param.status === 0 })}
                  onClick={() => changeStatus(0)}
                >
                  全部
                </a>
                <a
                  className={classnames({ [styles.current]: param.status === 1 })}
                  onClick={() => changeStatus(1)}
                >
                  已出租
                </a>
                <a
                  className={classnames({ [styles.current]: param.status === 2 })}
                  onClick={() => changeStatus(2)}
                >
                  空置中
                </a>
                <a
                  className={classnames({ [styles.current]: param.status === 3 })}
                  onClick={() => changeStatus(3)}
                >
                  已下架
                </a>
                <a
                  className={classnames({ [styles.current]: param.status === 4 })}
                  onClick={() => changeStatus(4)}
                >
                  推荐房源
                </a>
                <div className={styles.searchUser}>
                  <span className={styles.inputLabel}>所属商户:</span>
                  <SearchHouse onChange={userChange} />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <ProTable<ContactListItem>
          headerTitle={
            <div className={styles.tableTitle}>
              <span>用户列表</span>
              <span className={styles.desc}>
                共 <a className={styles.userTotal}>9999</a> 间，已出租 3421 间，空置 233 间，空置率
                14.4 %
              </span>
            </div>
          }
          rowKey="index"
          search={false}
          columns={column}
          actionRef={actionRef}
          pagination={{
            showQuickJumper: true,
            defaultPageSize: 10,
            onShowSizeChange: sizeChange,
            onChange: pageIndexChange,
          }}
          toolBarRender={() => {
            return [<Button type="primary">导入</Button>, <Button type="primary">导出</Button>];
          }}
          params={param}
          request={(value) => queryList(value)}
        />
      </PageHeaderWrapper>
    </React.Fragment>
  );
};

export default HouseTabls;
