import express from 'express'
const routes = express.Router();
import todo from '../controller/todoControllers.js';
routes.get('/',todo.todo);
routes.get('/tasks',todo.task)
routes.get("/shows",todo.show)
routes.post('/tasks',todo.createTask)
routes.get('/todo/tasks',todo.getAllDoc);

routes.get('/edit/task/:id',todo.updateDoc)
routes.post('/update/task/:id',todo.updateDocById)
routes.post('/todo/delete/task/:id',todo.deleteDocById)
export default routes;