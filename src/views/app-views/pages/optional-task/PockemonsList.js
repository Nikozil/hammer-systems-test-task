import Avatar from 'antd/lib/avatar/avatar';
import { List, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import React from 'react';

const PockemonsList = ({
  pockemons,
  addPockemonHandler,
  deletePockemonHandler,
}) => {
  const cursorAutoStyle = {
    cursor: 'auto',
  };
  const cursorPointerStyle = {
    cursor: 'pointer',
  };

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={pockemons}
        renderItem={(pocke) => (
          <List.Item
            actions={[]}
            onClick={() => addPockemonHandler(pocke)}
            style={pocke.coords ? cursorAutoStyle : cursorPointerStyle}>
            <List.Item.Meta
              avatar={
                <Avatar
                  shape={'square'}
                  size={50}
                  src={pocke.img}
                  alt={pocke.name}></Avatar>
              }
              title={pocke.name}
              description={
                pocke.coords
                  ? `x:${pocke.coords.x} y:${pocke.coords.y}`
                  : 'Выбери меня'
              }
            />
            {pocke.coords ? (
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  deletePockemonHandler(pocke);
                }}
                type="primary"
                size={'small'}
                icon={<CloseOutlined />}
              />
            ) : null}
          </List.Item>
        )}
      />
    </div>
  );
};

export default PockemonsList;
