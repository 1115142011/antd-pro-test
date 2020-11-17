import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { Card, Row, Col, Input, Button } from 'antd';
// import { PlusOutlined, RollbackOutlined } from '@ant-design/icons';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import classnames from 'classnames';
import { Card, Input } from 'antd';
import { getContactList } from '@/services/contact';
import styles from './houseList.less';
import { ContactListItem } from '../../contact/data.d';

interface ListParam {
  pageSize?: number;
  pageNo?: number;
  current?: number;
  status?: number;
  name: string;
  [key: string]: any;
}
const HomeTable: React.FC = () => {
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
      title: '序号',
      valueType: 'index',
    },
    {
      title: '楼盘名称',
      dataIndex: 'name',
    },
    {
      title: '地图绑定',
      dataIndex: 'jobStatus',
      valueEnum: {
        0: { text: '否', status: 'Error' },
        1: { text: '是', status: 'Processing' },
      },
    },
    {
      title: '地址',
      dataIndex: 'account',
    },
    {
      title: '创建时间',
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
      title: '最新更新时间',
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
      title: '操作',
      dataIndex: 'option',
      render(_, record) {
        console.log(record);
        return (
          <>
            <a>地图绑定</a>
          </>
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

  return (
    <React.Fragment>
      <PageHeaderWrapper>
        <div className={styles.searchForm}>
          <Card>
            <div className={styles.searchIput}>
              <Input.Search
                placeholder="楼盘名"
                allowClear
                enterButton="搜索"
                size="large"
                onSearch={onSearch}
              />
            </div>

            <div className={styles.selectTabs}>
              <span>状态：</span>
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
                  待绑定
                </a>
                <a
                  className={classnames({ [styles.current]: param.status === 2 })}
                  onClick={() => changeStatus(2)}
                >
                  已绑定
                </a>
              </div>
            </div>
          </Card>
        </div>

        <ProTable<ContactListItem>
          headerTitle="楼盘列表"
          rowKey="Id"
          search={false}
          columns={column}
          actionRef={actionRef}
          pagination={{
            showQuickJumper: true,
            defaultPageSize: 10,
            onShowSizeChange: sizeChange,
            onChange: pageIndexChange,
          }}
          params={param}
          request={(value) => queryList(value)}
        />
      </PageHeaderWrapper>
    </React.Fragment>
  );
};

export default HomeTable;
