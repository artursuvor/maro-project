class Villa {
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

const myVilla1 = new Villa(1, "Вишневый сад", "Villa, Москва, ЖК Вишневый сад", "125м2", "/img/room.png");
const myVilla2 = new Villa(2, "Кленовый сад", "Villa, Москва, ЖК Кленовый сад", "120м2", "/img/room.png");
const myVilla3 = new Villa(3, "Красивый сад", "Villa, Москва, ЖК Красивый сад", "130м2", "/img/room.png");
const myVilla4 = new Villa(4, "Дубовый сад", "Villa, Москва, ЖК Дубовый сад", "110м2", "/img/room.png");
const myVilla5 = new Villa(5, "Сосновый сад", "Villa, Москва, ЖК Сосновый сад", "135м2", "/img/room.png");
const myVilla6 = new Villa(6, "Яблочный сад", "Villa, Москва, ЖК Яблочный сад", "140м2", "/img/room.png");
const myVilla7 = new Villa(7, "Грушевый сад", "Villa, Москва, ЖК Грушевый сад", "115м2", "/img/room.png");
const myVilla8 = new Villa(8, "Сиреневый сад", "Villa, Москва, ЖК Сиреневый сад", "125м2", "/img/room.png");
const myVilla9 = new Villa(9, "Ореховый сад", "Villa, Москва, ЖК Ореховый сад", "130м2", "/img/room.png");

const villaData: Villa[] = [
  myVilla1, myVilla2, myVilla3,
  myVilla4, myVilla5, myVilla6,
  myVilla7, myVilla8, myVilla9
];

export default villaData;