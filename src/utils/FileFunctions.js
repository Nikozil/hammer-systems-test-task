export const saveDataToTXT = (data, filename = 'file') => {
  const json = JSON.stringify(data);

  const blob = new Blob([json], {
      type: 'text/txt',
    }),
    txtURL = window.URL.createObjectURL(blob),
    tempLink = document.createElement('a');

  tempLink.href = txtURL;
  tempLink.setAttribute('download', `${filename}.txt`);
  tempLink.click();
};

export const setDataFromTXT = (file, setHandler) => {
  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    const newData = JSON.parse(reader.result);
    setHandler(newData);
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
};
