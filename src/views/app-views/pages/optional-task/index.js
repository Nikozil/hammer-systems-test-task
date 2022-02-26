import { Col, Row, Spin, Button, Input } from 'antd';
import AlertMessage from 'components/shared-components/AlertMessage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changePockemonsCoords,
  closeError,
  fetchingPockemons,
} from 'redux/actions/Pockemons';
import {
  selectLoading,
  selectMessage,
  selectPockemons,
  selectShowMessage,
} from 'redux/selectors/Pockemons';
import { saveDataToTXT, setDataFromTXT } from 'utils/FileFunctions';
import Field from './Field';
import PockemonsList from './PockemonsList';

const OptionalTask = () => {
  const dispatch = useDispatch();

  const pockemons = useSelector(selectPockemons);
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectShowMessage);
  const errorMessage = useSelector(selectMessage);

  const [selectedPockemons, setSelectedPockemons] = useState([]);

  useEffect(() => {
    dispatch(fetchingPockemons());
  }, [dispatch]);

  const onAlertCloseHandler = () => {
    dispatch(closeError());
  };
  const addPockemonHandler = (pockemon) => {
    if (pockemon.coords === null) {
      const pockemonDataWithNewCoords = { ...pockemon, coords: { x: 0, y: 0 } };

      dispatch(changePockemonsCoords(pockemonDataWithNewCoords));

      setSelectedPockemons((prev) => [...prev, pockemon]);
    }
  };
  const deletePockemonHandler = (pockemon) => {
    if (pockemon.coords !== null) {
      const pockemonDataWithNewCoords = { ...pockemon, coords: null };

      dispatch(changePockemonsCoords(pockemonDataWithNewCoords));

      setSelectedPockemons((prev) =>
        prev.filter((pocke) => pocke.id !== pockemon.id)
      );
    }
  };

  const setPositionHandler = (id, position) => {
    setSelectedPockemons((prev) =>
      prev.map((p) => (p.id === id ? { ...p, coords: position } : p))
    );

    const PockemonData = pockemons.find((p) => +p.id === +id);

    const pockemonDataWithNewCoords = { ...PockemonData, coords: position };

    dispatch(changePockemonsCoords(pockemonDataWithNewCoords));
  };

  const saveHandler = () => {
    const coords = pockemons.map((pocke) => ({
      id: pocke.id,
      coords: pocke.coords,
    }));

    const filteredCoords = coords.filter((p) => p.coords);

    saveDataToTXT(filteredCoords, 'coordinates');
  };

  const uploadHandler = (files) => {
    const file = files.target.files[0];

    setDataFromTXT(file, setPositionFromFile);
  };

  const setPositionFromFile = (data) => {
    setSelectedPockemons([]);

    data.forEach(({ id, coords }) => {
      if (coords) {
        const PockemonData = pockemons.find((p) => +p.id === +id);
        const pockemonDataWithNewCoords = { ...PockemonData, coords: coords };

        dispatch(changePockemonsCoords(pockemonDataWithNewCoords));

        setSelectedPockemons((prev) => [...prev, pockemonDataWithNewCoords]);
      }
    });
  };

  return (
    <div>
      <AlertMessage
        isError={isError}
        message={errorMessage}
        onClose={onAlertCloseHandler}
      />
      <Spin size="large" spinning={loading}>
        <Row>
          <Col span={6}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button type="primary" onClick={saveHandler}>
                Сохранить
              </Button>

              <label
                htmlFor="uploadCoords"
                className={'ant-btn ant-btn-primary'}>
                Загрузить
              </label>
              <Input
                style={{ display: 'none' }}
                name="uploadCoords"
                id="uploadCoords"
                type="file"
                onChange={uploadHandler}></Input>
            </div>

            <PockemonsList
              pockemons={pockemons}
              addPockemonHandler={addPockemonHandler}
              deletePockemonHandler={deletePockemonHandler}
            />
          </Col>
          <Col span={18}>
            <Field
              selectedPockemons={selectedPockemons}
              setPosition={setPositionHandler}
            />
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

export default OptionalTask;
