class Productmanager {
    constructor() {
        this.products = [];
        Productmanager.lastId = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("All fields are necessary");
            return;
        }

        if (this.products.some(item => item.code === code)) {
            throw new Error("Every code must be a unique SKU");
        }

        const product = {
            id: ++Productmanager.lastId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(product);
        console.log("Product added successfully");
    }

    getProducts() {
        console.log(this.products);
        return this.products;
    }

    getProductsbyId(id) {
        const product = this.products.find(item => item.id === id);

        if (product) {
            console.log(product);
            return product
        } else {
            console.log("Non existing id");
        }
    }

    deleteProduct(idProduct) {
        const updatedData = this.products.filter(item => item.id !== idProduct);
        this.products = updatedData;
        console.log(`Object with id ${idProduct} successfully deleted`);
    }

    updateProduct(idProduct, data) {
        const productIndex = this.products.findIndex(item => item.id === idProduct);

        if (productIndex !== -1) {
            this.products[productIndex] = { ...this.products[productIndex], ...data };
            console.log(`Product with id ${idProduct} successfully updated.`);
        } else {
            console.log(`Object with id ${idProduct} not found.`);
        }
    }
}

const manager = new Productmanager();

manager.addProduct("Grid tank 12", "Batea para 12 equipos", "$12000", "img-12", 54, 12);
manager.addProduct("Grid tank I", "Batea para 1 equipo", "$3000", "img-12", 53, 12);
manager.addProduct("Grid tank III", "Batea para 3 equipo", "$5000", "img-12", 55, 12);

export { manager };
