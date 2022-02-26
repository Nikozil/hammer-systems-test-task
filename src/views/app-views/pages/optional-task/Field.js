import React from 'react';
import Draggable from 'react-draggable';
import fieldImg from '../../../../assets/img/Field.jpg';

const Field = ({ selectedPockemons, setPosition }) => {
  const handleDrag = (item, ui) => {
    const id = item.id;

    setPosition(id, {
      x: ui.x,
      y: ui.y,
    });
  };
  const wrapperStyle = {
    backgroundImage: `url(${fieldImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto ',
    width: '900px',
    height: '672px',
  };
  const draggebleStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    cursor: 'move',
    width: '100px',
    height: '100px',
    overflow: 'hidden',
  };
  const imageStyle = {
    width: '100px',
    height: '100px',
    pointerEvents: 'none',
  };
  return (
    <div style={wrapperStyle}>
      {selectedPockemons.map((item, i) => (
        <Draggable
          bounds="parent"
          onStop={(e, ui) => handleDrag(item, ui)}
          key={`${item.id}` + i}
          defaultPosition={item.coords ? item.coords : { x: 0, y: 0 }}>
          <div id={item.id} style={draggebleStyle}>
            <img src={item.img} alt={item.name} style={imageStyle} />
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Field;
