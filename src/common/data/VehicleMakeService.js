class VehicleMakeService {
  _data = [
    {
      id: 1,
      name: "BMW",
      abrv: "bmw"
    },
    {
      id: 2,
      name: "Ford",
      abrv: "ford"
    },
    {
      id: 3,
      name: "Volkswagen",
      abrv: "vw"
    },
    {
      id: 4,
      name: "Fiat",
      abrv: "fiat"
    }
  ];

  find(findStr) {
    return this._data.find(
      e =>
        e.name.toLowerCase().includes(findStr.toLowerCase()) ||
        e.abrv.toLowerCase().includes(findStr.toLowerCase())
    );
  }

  getById(id) {
    return this._data.find(o => o.id === id);
  }

  post(nameStr, abrvStr) {
    const objId = this._data.length + 1;
    const obj = { id: objId, name: nameStr, abrv: abrvStr };
    this._data.push(obj);
  }

  put(id, newName, newAbrv) {
    const index = this._data.indexOf(this._data.find(o => o.id === id));
    this._data[index].name = newName;
    this._data[index].abrv = newAbrv;
  }

  delete(id) {
    const index = this._data.indexOf(this._data.find(o => o.id === id));
    this._data.splice(index, 1);
  }

  getAllData() {
    return this._data;
  }
}

export default VehicleMakeService;
