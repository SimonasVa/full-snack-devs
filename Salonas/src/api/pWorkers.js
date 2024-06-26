import { apiClient } from "./apis";

const pWorkerModel = {
  getPWorkerByUserAndProjectId: async (user_id, project_id) => {
    try {
      const response = await apiClient.get(`/pworkers/${user_id}/${project_id}`);
      return response;
    }
    catch (error) {
      console.log(error);
      return error.response;
    }
  },
  getPWorkerByUserId: async (user_id) => {
    try {
      const response = await apiClient.get(`/pworkers/user/${user_id}`);
      return response;
    }
    catch (error) {
      console.log(error);
      return error.response;
    }
  },
  getPWorkerByProjectId: async (project_id) => {
    try {
      const response = await apiClient.get(`/pworkers/project/${project_id}`);
      return response;
    }
    catch (error) {
      console.log(error);
      return error.response;
    }
  },
  updatePWorker: async (pWorker) => {
   
    try {
      const response = await apiClient.put(`/pworkers/`, pWorker);
      return response;
    }
    catch (error) {
      console.log(error);
      return error.response;
    }
  },
  deletePWorker: async (pWorker) => {
   
    try {
      const response = await apiClient.delete(`/pworkers/`, { data: pWorker });
      return response;
    }
    catch (error) {
      console.log(error);
      return error.response;
    }
  },
  createPWorker: async (pWorker) => {
    
    try {
      const response = await apiClient.post(`/pworkers/`, pWorker);
      return response;
    }
    catch (error) {
      console.log(error);
      return error.response;
    }
  },
};

export default pWorkerModel;