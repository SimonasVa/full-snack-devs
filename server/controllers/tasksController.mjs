import { validationResult } from "express-validator";

import tasksModel from "../models/tasksModel.mjs";
import project_workersModel from "../models/project_workersModel.mjs";
import userModel from "../models/userModel.mjs"
import { ADMIN, OWNER } from "../cfg/Roles.mjs";

const tasksController = {

    createTask: async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json("Unauthorized access");
            }

            const { name, description, project_id, planned_end_date } = req.body;

            const pWorker = await project_workersModel.getProjectWorker(req.user.id, project_id);
            if (!pWorker) {
                return res.status(401).json("You dont have privileges to perform this action");
            }

            const { role } = pWorker;
            if (role != ADMIN && role != OWNER) {
                return res.status(401).json("You dont have privileges to perform this action");
            }

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const task = {
                name,
                description,
                created_on: new Date(),
                planned_end_date: new Date(planned_end_date),
                project_id
            };

            const result = await tasksModel.createTask(task);

            return res.status(201).json(result);
        }
        catch (error) {
            next(error);
        }
    },

    getTasksByProjectId: async (req, res, next) => {
        try {
            const id = req.params.project_id;

            let result = await tasksModel.getTasksByProjectId(id);
            result = await Promise.all(result.map(async (value) => {
                if (value.worker_id) {
                    const user = await userModel.getUserById(value.worker_id);
                    const { username: worker_username } = user;
                    value.worker_username = worker_username;
                }
                else {
                    value.worker_username = "";
                }
                delete value.worker_id;
                return value;
            }));
            return res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    },

    getTasksByUserId: async (req, res, next) => {
        try {
            const id = req.params.user_id;

            let result = await tasksModel.getTasksByUserId(id);
            result = await Promise.all(result.map(async (value) => {
                if (value.worker_id) {
                    const user = await userModel.getUserById(value.worker_id);
                    const { username: worker_username } = user;
                    value.worker_username = worker_username;
                }
                else {
                    value.worker_username = "";
                }
                delete value.worker_id;
                return value;
            }));


            return res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    },

    updateTask: async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json("Unauthorized access");
            }
            const { id, name, description, project_id, status, planned_end_date, worker_username } = req.body;
            const pWorker = await project_workersModel.getProjectWorker(req.user.id, project_id);
            if (!pWorker) {
                return res.status(401).json("You dont have privileges to perform this action");
            }

            const { role } = pWorker;
            if (role != ADMIN && role != OWNER) {
                return res.status(401).json("You dont have privileges to perform this action");
            }

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            let worker_id = null;
            if (worker_username) {
                const user = await userModel.getUserByUsername(worker_username);
                if (!user) {
                    return res.status(400).json({
                        errors: [{
                            path: "worker_username",
                            msg: "User with the given username does not exist"
                        }]
                    })
                }

                const pWorker = await project_workersModel.getProjectWorker(user.id, project_id);
                if (!pWorker) {
                    return res.status(400).json({
                        errors: [{
                            path: "worker_username",
                            msg: "This user is not a project member"
                        }]
                    })
                }

                worker_id = user.id;
            }

            const task = {
                id, name, description, status, planned_end_date, worker_id
            }

            const result = await tasksModel.updateTask(task);

            delete result.worker_id
            result.worker_username = worker_username;

            return res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    },

    updateTaskStatus: async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json("Unauthorized access");
            }

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { id, status } = req.body;

            const task = await tasksModel.getTaskByTaskAndUserId(id, req.user.id);

            if (!task) {
                return res.status(401).json("You dont have privileges to perform this action");
            }

            let result = await tasksModel.updateTaskStatus(id, status);

            return res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    },

    updateTaskWorker: async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { id, worker_id } = req.body;

            const task = await tasksModel.getTaskById(id);

            if (!task) {
                return res.status(400).json("Task does not exist");
            }
            const { project_id } = task;

            if (!req.user) {
                return res.status(401).json("Unauthorized access");
            }

            const pWorker = await project_workersModel.getProjectWorker(req.user.id, project_id);

            if (!pWorker) {
                return res.status(401).json("You dont have privileges to perform this action");
            }

            const { role } = pWorker;

            if (role != ADMIN && role != OWNER) {
                return res.status(401).json("You dont have privileges to perform this action");
            }


            const result = await tasksModel.updateTaskWorker(id, worker_id);

            return res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    },

    deleteTask: async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json("Unauthorized access");
            }
            const id = req.params.id;

            const task = await tasksModel.getTaskById(id);

            if (!task) {
                return res.status(400).json("Task does not exist");
            }
            const { project_id } = task;
            const pWorker = await project_workersModel.getProjectWorker(req.user.id, project_id);

            if (!pWorker) {
                return res.status(401).json("You dont have privileges to perform this action");
            }

            const { role } = pWorker;

            if (role != ADMIN && role != OWNER) {
                return res.status(401).json("You dont have privileges to perform this action");
            }


            await tasksModel.deleteTask(id);

            return res.status(200).json();
        }
        catch (error) {
            next(error);
        }
    }
};

export default tasksController;