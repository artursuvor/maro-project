class Commercial {
  id: number;
  residentialComplex: string;
  address: string;
  sizeSquareMeters: string;
  photoUrl: string;

  constructor(id: number, residentialComplex: string, address: string, sizeSquareMeters: string, photoUrl: string) {
    this.id = id;
    this.residentialComplex = residentialComplex;
    this.address = address;
    this.sizeSquareMeters = sizeSquareMeters;
    this.photoUrl = photoUrl;
  }
}

const myCommercial1 = new Commercial(1, "Вишневый сад", "Москва, ЖК Вишневый сад", "125м2", "/img/room.png");
const myCommercial2 = new Commercial(2, "Кленовый сад", "Commercial, Москва, ЖК Кленовый сад", "120м2", "/img/room.png");
const myCommercial3 = new Commercial(3, "Красивый сад", "Commercial, Москва, ЖК Красивый сад", "130м2", "/img/room.png");
const myCommercial4 = new Commercial(4, "Дубовый сад", "Commercial, Москва, ЖК Дубовый сад", "110м2", "/img/room.png");
const myCommercial5 = new Commercial(5, "Сосновый сад", "Commercial, Москва, ЖК Сосновый сад", "135м2", "/img/room.png");
const myCommercial6 = new Commercial(6, "Яблочный сад", "Commercial, Москва, ЖК Яблочный сад", "140м2", "/img/room.png");
const myCommercial7 = new Commercial(7, "Грушевый сад", "Commercial, Москва, ЖК Грушевый сад", "115м2", "/img/room.png");
const myCommercial8 = new Commercial(8, "Сиреневый сад", "Commercial, Москва, ЖК Сиреневый сад", "125м2", "/img/room.png");
const myCommercial9 = new Commercial(9, "Ореховый сад", "Commercial, Москва, ЖК Ореховый сад", "130м2", "/img/room.png");

const commercialData: Commercial[] = [
  myCommercial1, myCommercial2, myCommercial3,
  myCommercial4, myCommercial5, myCommercial6,
  myCommercial7, myCommercial8, myCommercial9
];

export default commercialData;
