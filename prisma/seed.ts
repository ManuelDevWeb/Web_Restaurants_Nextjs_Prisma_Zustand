import { categories } from "./data/categories";
import { products } from "./data/products";

import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

// Funcion encargada de sembrar los datos en la DB
const seed = async()=>{
    try {
        // Creando categorias
        await prisma.category.createMany({
            data: categories
        });
        // Creando productos
        await prisma.product.createMany({
            data: products
        });
    } catch (error) {
        console.log(error);
    }
}

seed()
    .then(async ()=>{
        await prisma.$disconnect();
    })
    .catch(async (e)=>{
        console.log(e);
        await prisma.$disconnect();
    });