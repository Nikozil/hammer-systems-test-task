import { Button, Table, Tooltip } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import React from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const UsersTable = ({ users, onShow, onDelete }) => {
  const tableColumns = [
    {
      title: 'User',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus name={record.username} subTitle={record.name} />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.username.toLowerCase();
          b = b.username.toLowerCase();
          return a < b ? -1 : a > b ? 1 : 0;
        },
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      responsive: ['xl', 'xxl', 'lg', 'md', 'sm'],
      sorter: {
        compare: (a, b) => {
          a = a.email.toLowerCase();
          b = b.email.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      responsive: ['xl', 'xxl', 'lg', 'md'],

      sorter: {
        compare: (a, b) => a.phone.length - b.phone.length,
      },
    },
    {
      title: 'Website',
      dataIndex: 'website',
      responsive: ['xl', 'xxl'],

      sorter: {
        compare: (a, b) => a.website.length - b.website.length,
      },
    },
    {
      title: 'City',
      dataIndex: 'address',
      responsive: ['xl', 'xxl'],
      render: (address) => <span>{address.city} </span>,
      sorter: {
        compare: (a, b) => a.address.street.length - b.address.street.length,
      },
    },
    {
      title: 'Street',
      dataIndex: 'address',
      responsive: ['xl', 'xxl'],
      render: (address) => <span>{address.street} </span>,
      sorter: {
        compare: (a, b) => a.address.street.length - b.address.street.length,
      },
    },
    {
      title: 'Company name',
      dataIndex: 'company',
      responsive: ['xxl'],
      render: (company) => <span>{company.name} </span>,
      sorter: {
        compare: (a, b) => a.company.name.length - b.company.name.length,
      },
    },

    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className="text-right" style={{ width: '100px' }}>
          <Tooltip title="View">
            <Button
              type="primary"
              className="mr-2"
              icon={<EditOutlined />}
              onClick={() => {
                onShow(elm);
              }}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                onDelete(elm.id);
              }}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];
  return <Table columns={tableColumns} dataSource={users} rowKey="id" />;
};

export default UsersTable;
