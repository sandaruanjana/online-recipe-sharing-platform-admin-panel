import axios from 'axios';
import authHeader from './auth-header';

class RecipeService {
    getAll() {
        return axios.get(import.meta.env.VITE_BASE_URL + '/recipe/unapproved', { headers: authHeader() });
    }

    updateApproved(updateRecipeApprove) {
        return axios.patch(import.meta.env.VITE_BASE_URL + `/recipe/approve`, updateRecipeApprove, { headers: authHeader() });
    }

    delete(id) {
        return axios.delete(import.meta.env.VITE_BASE_URL + `/recipe/${id}`, { headers: authHeader() });
    }
}

export default new RecipeService();