class Apartment {
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

const myApartment1 = new Apartment(1, `${"Вишневый сад"}`, "Apart, Москва, ЖК Вишневый сад", "125м2", "/img/room.png");
const myApartment2 = new Apartment(2, "Кленовый сад", "Apart, Москва, ЖК Кленовый сад", "120м2", "/img/room.png");
const myApartment3 = new Apartment(3, "Красивый сад", "Apart, Москва, ЖК Красивый сад", "130м2", "/img/room.png");
const myApartment4 = new Apartment(4, "Дубовый сад", "Apart, Москва, ЖК Дубовый сад", "110м2", "/img/room.png");
const myApartment5 = new Apartment(5, "Сосновый сад", "Apart, Москва, ЖК Сосновый сад", "135м2", "/img/room.png");
const myApartment6 = new Apartment(6, "Яблочный сад", "Apart, Москва, ЖК Яблочный сад", "140м2", "/img/room.png");
const myApartment7 = new Apartment(7, "Грушевый сад", "Apart, Москва, ЖК Грушевый сад", "115м2", "/img/room.png");
const myApartment8 = new Apartment(8, "Сиреневый сад", "Apart, Москва, ЖК Сиреневый сад", "125м2", "/img/room.png");
const myApartment9 = new Apartment(9, "Ореховый сад", "Apart, Москва, ЖК Ореховый сад", "130м2", "/img/room.png");

const apartmentData: Apartment[] = [
  myApartment1, myApartment2, myApartment3,
  myApartment4, myApartment5, myApartment6,
  myApartment7, myApartment8, myApartment9
];

export default apartmentData;
