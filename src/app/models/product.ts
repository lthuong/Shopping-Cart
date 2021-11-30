export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, des = '', price = 0, imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png') {
        this.id = id;
        this.name = name;
        this.description = des;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
