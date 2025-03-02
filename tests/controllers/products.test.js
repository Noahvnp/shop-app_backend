import "dotenv/config";
import { afterAll, describe, expect, it } from "@jest/globals";
import request from "supertest";
import server from "../../index";

const API_PREFIX = process.env.API_PREFIX || "/api/v1";

describe("Product API", () => {
  it("should return all products", async () => {
    const res = await request(server).get(`${API_PREFIX}/products/ `);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", "success");
  });

  it("should return a product by ID", async () => {
    const productId = 1;

    const res = await request(server).get(`${API_PREFIX}/products/${productId}`);

    expect(res.statusCode).toBe(200);
    // expect(res.body).toHaveProperty("status", "success");
    // expect(res.body).toHaveProperty("data");
    expect(res.body).toHaveProperty("message");

    // const product = res.body.data;

    // expect(product).toHaveProperty("id", productId);
    // expect(product).toHaveProperty("name");
    // expect(product).toHaveProperty("price");

    // expect(typeof product.name).toBe("string");
    // expect(typeof product.price).toBe("number");
  });
});

afterAll(() => {
  server.close();
});
