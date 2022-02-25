import { Button, Col, Drawer, Form, Input, message, Row } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import React, { Component } from 'react';

export class EditProfile extends Component {
  render() {
    const { profile, setEditableProfile, saveChanges } = this.props;

    const data = profile.selectedUser;

    const closeHandle = () => {
      setEditableProfile({ visible: false, selectedUser: null });
    };

    const onFinish = (values) => {
      const key = 'updatable';
      message.loading({ content: 'Updating...', key });
      setTimeout(() => {
        const user = {
          ...profile.selectedUser,
          name: values.name,
          email: values.email,
          username: values.username,
          phone: values.phone,
          website: values.website,
          company: {
            ...profile.selectedUser.company,
            name: values.companyName,
          },
          address: {
            ...profile.selectedUser.address,
            street: values.street,
            city: values.city,
            zipcode: values.postcode,
          },
        };
        saveChanges(user);
        message.success({ content: 'Done!', key, duration: 2 });
      }, 1000);
      setEditableProfile({ visible: false, selectedUser: null });
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <>
        <Drawer
          width={'min(50vw, 4000px)'}
          placement="right"
          onClose={closeHandle}
          visible={profile.visible}>
          <div className="mt-4">
            {profile.visible && (
              <Form
                name="basicInformation"
                layout="vertical"
                initialValues={{
                  name: data?.name,
                  email: data?.email,
                  username: data?.username,
                  phone: data?.phone,
                  companyName: data?.company?.name,
                  website: data?.website,
                  street: data?.address?.street,
                  suite: data?.address?.suite,
                  city: data?.address?.city,
                  postcode: data?.address?.zipcode,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Row gutter={ROW_GUTTER}>
                      <Col xs={24} sm={24} md={24}>
                        <Form.Item
                          label="Name"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your name!',
                            },
                          ]}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Username"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your username!',
                            },
                          ]}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[
                            {
                              required: true,
                              type: 'email',
                              message: 'Please enter a valid email!',
                            },
                          ]}>
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Company name" name="companyName">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Phone Number" name="phone">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={24}>
                        <Form.Item label="Website" name="website">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Street" name="street">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Suite" name="suite">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="City" name="city">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Post code" name="postcode">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                      Save Change
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </div>
        </Drawer>
      </>
    );
  }
}

export default EditProfile;
