import request from "./request";

const headers = new Headers({
    "Content-Type": "text/xml",
    credentials: "include",
});

export default {
    async list() {
        const data = await request("get", "/api/test");
        return data;
    },
    // async list() {
    //     const response = await fetch("http://localhost:3001/api/test", {
    //         headers,
    //     });
    //     const data = response.json();
    //     return data;
    // },
};
