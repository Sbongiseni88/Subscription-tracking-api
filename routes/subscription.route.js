import { Router } from "express";

const subRouter = Router();

subRouter.get("/", (req, res) => res.send({ tile: 'Get all subscriptions' }));
subRouter.get("/:id", (req, res) => res.send({ title: `Get subscription with id: ${req.params.id}` }));
subRouter.post("/", (req, res) => res.send({ title: "Create new subscription", body: req.body }));
subRouter.put("/:id", (req, res) => res.send({ title: `Update subscription's with id: ${req.params.id}` }));
subRouter.delete("/:id", (req, res) => res.send({ title: `Delete subscription with id: ${req.params.id}` }));
subRouter.get("/user/:userId", (req, res) => res.send({ title: `Get subscriptions for user with id: ${req.params.userId}` }));
subRouter.put("/renew/:id", (req, res) => res.send({ title: `Renew subscription with id: ${req.params.id}` }));

export default subRouter;