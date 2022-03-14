# Restful Api

## API should have name(string), age(integer), message(string) and createDate(Date)

### Routes

```javascript
    router.get("/all", controller.getUsers);
    router.get("/:id", controller.get);
    router.post("/", controller.create);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.delete);
```

### code can be found in the modules

- modules
    - user
        -handler
        -model
        -route
-app.js
