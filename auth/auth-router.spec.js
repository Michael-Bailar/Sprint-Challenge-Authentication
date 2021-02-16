const request = require("supertest")

const server = require("../api/server.js")
const db = require("../database/dbConfig.js")

const testUser = {
    username: "mbtesting",
    password: "test"
}

describe("server", () => {
    describe("POST /register/", () => {
        beforeEach(async () => {
            await db("users").truncate()
        })

        it("returns 201 on success", () => {
            return request(server)
                .post("/api/auth/register")
                .send(testUser)
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })
   

        it('should return a message saying "user created"', function () {
            return request(server)
            .post("/api/auth/register")
            .send(testUser)
            .then(res => {
                expect(res.body.message).toBe("user created");
            });
        });
    })

    describe("POST /login/", () => {
        it("returns 200 on success", () => {
            return request(server)
                .post("/api/auth/login")
                .send(testUser)
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
    it('should return a message saying"Welcome!"', function () {
        return request(server)
        .post("/api/auth/login")
        .send(testUser)
        .then(res => {
            expect(res.body.message).toBe("Welcome!");
        });
    });
})