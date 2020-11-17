import React, { useState } from 'react';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
// import { queryHouseByName } from '@/api/globalApi';

const { Option } = Select;
interface SearchUserProps {
  placeholder?: string;
  onChange: (value: string) => any;
}

const SearchUser: React.FC<SearchUserProps> = (props) => {
  const [fetching, setFetching] = useState<boolean>(false);
  const [listData, setListData] = useState<{ key: string; name: string }[]>([]);
  const getListData = () => {
    setFetching(true);
    // queryHouseByName(value)
    //   .then((res) => {
    //     setFetching(false);
    //     if (res && res.data) {
    //       setListData(res.data);
    //     }
    //   })
    //   .catch((err) => {
    //     setFetching(false);
    //   });
  };
  const { placeholder = '请输入' } = props;
  return (
    <Select
      labelInValue
      showSearch
      placeholder={placeholder}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      filterOption={false}
      onSearch={debounce(getListData, 400)}
      onChange={(value: any) => props.onChange(value)}
      style={{ width: 180 }}
    >
      {listData.map((item, index) => (
        <Option key={`${index}z`} value={item.key}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
};

export default SearchUser;
