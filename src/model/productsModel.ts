import { pool } from "../config/db";

export const findAll = async () => {
    try {
        const [products] = await pool.query("SELECT * FROM Products");
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Error fetching products: funtion: findAll');
    }
};

export const findById = async (id: number) => {
    try {
        const [product] = await pool.query("SELECT * FROM Products WHERE id = ?", [id]);
        return product;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw new Error('Error fetching product: function: findById');
    }
};

export const save = async () => {

};




