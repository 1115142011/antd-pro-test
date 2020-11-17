import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button } from 'antd';
// import { PlusOutlined, RollbackOutlined } from '@ant-design/icons';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { getContactList } from '@/services/contact';
import styles from './tableList.less';
import { ContactListItem } from '../data.d';

interface ListParam {
  pageSize?: number;
  pageNo?: number;
  current?: number;
  [key: string]: any;
}
const ContactList = () => {
  const actionRef = useRef<ActionType>();
  const [param, setParam] = useState<ListParam>({ pageNo: 1, pageSize: 10 });
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
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '在职状态',
      dataIndex: 'jobStatus',
      valueEnum: {
        0: { text: '已离职', status: 'Default' },
        1: { text: '在职', status: 'Processing' },
      },
    },
    {
      title: '账号',
      dataIndex: 'account',
    },

    {
      title: '电话',
      dataIndex: 'tel',
    },
    {
      title: '激活状态',
      dataIndex: 'accountActivate',
      valueEnum: {
        0: { text: '未激活', status: 'Default' },
        1: { text: '已激活', status: 'Processing' },
      },
    },
    {
      title: '入职时间',
      dataIndex: 'entryTime',
      render(_, record) {
        return (
          <React.Fragment>
            {record.jobStatus === 1 ? (
              record.entryTime
            ) : (
              <React.Fragment>
                <div>{record.entryTime}</div>
                <div>{record.outerTime} 离职</div>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      },
    },
    {
      title: '角色',
      dataIndex: 'role',
      valueEnum: {
        0: { text: '组员', status: 'Default' },
        1: { text: '组长', status: 'Processing' },
      },
    },
    {
      title: '责任房源数量',
      dataIndex: 'houseNumber',
    },
    {
      title: '会员数量',
      dataIndex: 'mermberNumber',
    },

    {
      title: '操作',
      dataIndex: 'option',
      render(_, record) {
        return <>{record.jobStatus === 1 ? <a>离职登记</a> : '--'}</>;
      },
    },
  ];
  // console.log(props, 'sss', styles);
  return (
    <React.Fragment>
      <PageHeaderWrapper>
        <ProTable<ContactListItem>
          headerTitle="房源列表"
          rowKey="Id"
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
          tableClassName={styles.table}
        />
      </PageHeaderWrapper>
    </React.Fragment>
  );
};

export default ContactList;
