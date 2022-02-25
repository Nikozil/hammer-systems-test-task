import { Card, message, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeUser,
  closeError,
  deleteUser,
  fetchingUsers,
} from 'redux/actions/Users';
import {
  selectLoading,
  selectMessage,
  selectShowMessage,
  selectUsers,
} from 'redux/selectors/User';
import AlertMessage from '../../../../components/shared-components/AlertMessage';
import EditProfile from './EditProfile';
import UsersTable from './UsersTable';

export const UserList = (props) => {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectShowMessage);
  const errorMessage = useSelector(selectMessage);

  const [editableProfile, setEditableProfile] = useState({
    visible: false,
    selectedUser: null,
  });

  useEffect(() => {
    dispatch(fetchingUsers());
  }, [dispatch]);

  const onAlertCloseHandler = () => {
    dispatch(closeError());
  };

  const deleteUserHandler = (userId) => {
    dispatch(deleteUser(userId));
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  const changeUserProfileHandler = (user) => {
    dispatch(changeUser(user));
  };

  const showUserProfile = (userInfo) => {
    setEditableProfile({
      visible: true,
      selectedUser: userInfo,
    });
  };

  return (
    <>
      <AlertMessage
        isError={isError}
        message={errorMessage}
        onClose={onAlertCloseHandler}
      />
      <Spin size="large" spinning={loading}>
        <Card bodyStyle={{ padding: '0px' }}>
          <UsersTable
            users={users}
            onShow={showUserProfile}
            onDelete={deleteUserHandler}
          />
          <EditProfile
            profile={editableProfile}
            setEditableProfile={setEditableProfile}
            saveChanges={changeUserProfileHandler}
          />
        </Card>
      </Spin>
    </>
  );
};

export default UserList;
