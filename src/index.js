import express from "express";
import { manager } from "./ProductManager.js";

const PUERTO = 8080;

const app = express();

app.get("/products", async (req, res) => {
    try {
        const limit = parseInt(req.query.limit);
        let products = await manager.getProducts();

        if (!isNaN(limit)) {
            products = products.slice(0, limit);
        }

        // Send the products back to the client
        res.json(products);
    } catch (error) {
        console.error("Error retrieving products", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.get("/products/:id", async(req, res)=>{
    try {
        const id = parseInt(req.params.id);

        const product =await manager.getProductsbyId(id);
        res.send(product)
    } catch (error) {
        console.error("error retrieving product:", error.message);
        res.status(500).json({error: "Internal server error"})
    }
    
})
app.listen(PUERTO, ()=>{
    console.log(`Escuchando puerto ${PUERTO}`);
})

app.use(express.urlencoded({extended:true}));
