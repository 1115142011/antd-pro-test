import React, { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { PlusOutlined, MinusOutlined, CloseCircleOutlined } from '@ant-design/icons';

const CardTitle = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [form] = Form.useForm();
  const toggleInput = () => {
    setIsAdd(!isAdd);
  };
  const submitFom = async () => {
    const formValue = await form.validateFields();
    console.log('formValue,', formValue);
  };

  return (
    <Row gutter={16}>
      {isAdd ? (
        <Col span={isAdd ? 24 : 0}>
          <Form form={form} onFinish={submitFom}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入小组名!',
                },
              ]}
            >
              <Input
                autoComplete="off"
                autoFocus
                suffix={
                  <Button
                    type="text"
                    size="small"
                    icon={<CloseCircleOutlined />}
                    onClick={toggleInput}
                  />
                }
                addonAfter={
                  <React.Fragment>
                    <Button onClick={submitFom} type="primary">
                      确定
                    </Button>
                  </React.Fragment>
                }
                placeholder="小组名"
              />
            </Form.Item>
          </Form>
        </Col>
      ) : (
        <React.Fragment>
          <Col>
            <span>小组列表</span>
          </Col>
          <Col>
            <Button
              type="primary"
              shape="circle"
              size="small"
              key="add"
              onClick={toggleInput}
              icon={<PlusOutlined />}
            />
          </Col>
          <Col>
            <Button
              danger
              type="primary"
              shape="circle"
              size="small"
              key="delete"
              icon={<MinusOutlined />}
            />
          </Col>
        </React.Fragment>
      )}
    </Row>
  );
};

export default CardTitle;
