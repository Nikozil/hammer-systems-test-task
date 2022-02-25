import { Alert } from 'antd';
import React from 'react';

const AlertMessage = ({ isError, message, onClose }) => {
  return (
    <div>
      {isError && (
        <Alert
          message={message}
          type="error"
          closable
          onClose={onClose}
          style={{
            position: 'absolute',
            zIndex: 2000,
            top: 0,
            left: 0,
            minWidth: '150px',
            maxWidth: '500px',
            width: '100%',
          }}
        />
      )}
    </div>
  );
};

export default AlertMessage;
