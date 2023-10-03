import express from "express";

const app = express();

// // Shop microservice

// app.get("/products", (req, res) => {
//   res.send("products in proxy server");
// });
// app.get("/products/:productId", (req, res) => {
//   console.log(req.headers);
//   res.send(`product ${req.params.productId} in proxy server`);
// });
// app.get("/orders/:userId", (req, res) => {  
//   res.send(`orders of user ${req.params.userId} in proxy server`);
// })

// OMS microservice

app.get("/orders", (req, res) => {
  res.send("orders in proxy server");
});
app.get("/orders/:userId", (req, res) => {
  res.send(`orders of user ${req.params.userId} in proxy server`);
});

// ERP microservice

app.get("/api/shop_inventory", (req, res) => {
  const searchText = req.query.search;
  res.send(`inventory search results for ${searchText} in proxy server`);
});

app.get("/api/shop_inventory/:productId", (req, res) => {
  res.send(`inventory for product ${req.params.productId} in proxy server`);
});
app.post("/api/shop_inventory/updateInventory", (req, res) => {
  res.send("update inventory in proxy server");
});

// Banner Microservice
app.get("/api/banner", (req, res) => {
  res.send("banner list in proxy server");
});

app.get("/api/banner/:bannerId", (req, res) => {
  res.send(`banner details for ${req.params.bannerId} in proxy server`);
});

app.get("/api/banner/product/:productId", (req, res) => {
  res.send(`banner for product ${req.params.productId} in proxy server`);
});

app.post("/api/banner", (req, res) => {
  res.send("create banner in proxy server");
});

app.put("/api/banner/:bannerId", (req, res) => {
  res.send(`update banner ${req.params.bannerId} in proxy server`);
});

app.delete("/api/banner/:bannerId", (req, res) => {
  res.send(`delete banner ${req.params.bannerId} in proxy server`);
});

app.listen(8080, () => console.log("Server running"));

