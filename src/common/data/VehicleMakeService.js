class VehicleMakeService {
  _data = [
    {
      id: 101,
      name: "BMW",
      abrv: "bmw"
    },
    {
      id: 102,
      name: "Ford",
      abrv: "ford"
    },
    {
      id: 103,
      name: "Volkswagen",
      abrv: "vw"
    },
    {
      id: 104,
      name: "Fiat",
      abrv: "fiat"
    }
  ];

  find(filter) {
    console.log();

    return this._data.map(e => e.name.includes(filter));
  }

  getById(id) {
    return this._data.find(o => o.id === id);
  }

  post(model) {}

  put(model) {}

  delete(id) {}

  getAllData() {
    return this._data;
  }
}

export default VehicleMakeService;
