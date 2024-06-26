import { checkSchema, param } from 'express-validator';
import { ONGOING, DONE } from '../cfg/Projects.mjs';

export const createProjectValidationSchema = checkSchema({
    name: {
        notEmpty: {
            errorMessage: "Name cannot be empty"
        },
        isString: {
            errorMessage: "Name must be a valid String"
        },
        isLength: {
            options: { min: 3, max: 255 },
            errorMessage: "Name must be at least 3 characters with a max of 255 characters"
        }
    },
    description: {
        notEmpty: {
            errorMessage: "Description cannot be empty"
        },
        isString: {
            errorMessage: "Description must be a valid String"
        },
        isLength: {
            options: { min: 10, max: 500 },
            errorMessage: "Description must be at least 10 characters with a max of 500 characters"
        }
    },

});

export const updateProjectValidationSchema = checkSchema({
    id: {
        isInt: {
            options: { min: 1 },
            errorMessage: "Id must be a valid positive integer"
        }
    },
    name: {
        notEmpty: {
            errorMessage: "name cannot be empty"
        },
        isString: {
            errorMessage: "Name must be a valid string"
        },
        isLength: {
            options: { min: 3, max: 255 },
            errorMessage: "Name must be at least 3 characters with a max of 255 characters"
        }
    },
    description: {
        notEmpty: {
            errorMessage: "Description cannot be empty"
        },
        isString: {
            errorMessage: "Description must be a valid String"
        },
        isLength: {
            options: { min: 10, max: 500 },
            errorMessage: "Description must be at least 10 characters with a max of 500 characters"
        }
    },
    status: {
        notEmpty: {
            errorMessage: "Status cannot be empty"
        },
        isString: {
            errorMessage: "Status must be a valid String"
        },
        custom: {
            options: (value) => {
                if (value != ONGOING && value != DONE) {
                    return false;
                }
                return true;
            },
            errorMessage: "Invalid status provided"
        }
    }

})

export const searchProjectValidationSchema = checkSchema({
    id: {
        in: ["params"],
        isInt: {
            options: { min: 1 },
            errorMessage: "Id must be a valid positive integer"
        }
    },
    search: {
        in: ["query"],
        isString: {
            errorMessage: "Search must be a valid string"
        },
        isLength: {
            options: { min: 1, max: 100 },
            errorMessage: "Search must be atleast 1 character with a max of 100 characters"
        }
    }

});