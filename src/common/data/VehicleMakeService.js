import dynamicSort from "../DynamicSort";

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
    },
    {
      id: 5,
      name: "Renault",
      abrv: "renault"
    },
    {
      id: 6,
      name: "Rolls-Royce",
      abrv: "rolls-royce"
    },
    {
      id: 7,
      name: "Opel",
      abrv: "opel"
    }
  ];

  find(searchString, page = 1, rpp = 5, orderBy = "id", orderDir = "asc") {
    const searchResult = this._data.filter(
      e =>
        e.name.toLowerCase().includes(searchString.toLowerCase()) ||
        e.abrv.toLowerCase().includes(searchString.toLowerCase())
    );

    const beginningOfPageIndex = page * rpp - rpp;

    searchResult.sort((a, b) => {
      let varA =
        typeof a[orderBy] === "string" ? a[orderBy].toUpperCase() : a[orderBy];
      let varB =
        typeof b[orderBy] === "string" ? b[orderBy].toUpperCase() : b[orderBy];
      let comparison = 0;
      if (varA < varB) {
        comparison = -1;
      }
      if (varA > varB) {
        comparison = 1;
      }
      return orderDir === "desc" ? comparison * -1 : comparison;
    });

    return searchResult.slice(beginningOfPageIndex, beginningOfPageIndex + rpp);
  }

  get(id) {
    if (id && this._data.find(o => o.id === id)) {
      return this._data.find(o => o.id === id);
    } else {
      console.log("GET ERROR: ID not found");
    }
  }

  post(model) {
    if (model) {
      const objId = this._data.length + 1;
      const obj = { id: objId, name: model.name, abrv: model.abrv };
      this._data.push(obj);
    } else {
      console.log("POST ERROR: model ist null");
    }
  }

  put(model) {
    if (model && this._data.find(o => o.id === model.id)) {
      const index = this._data.indexOf(this._data.find(o => o.id === model.id));
      this._data[index].name = model.name;
      this._data[index].abrv = model.abrv;
    } else {
      console.log("PUT ERROR: not found");
    }
  }

  delete(id) {
    if (id && this._data.find(o => o.id === id)) {
      const index = this._data.indexOf(this._data.find(o => o.id === id));
      this._data.splice(index, 1);
    } else {
      console.log("DELETE ERROR: ID not found");
    }
  }
}

export default VehicleMakeService;
