import axios from 'axios';
import { API_URL } from '../../config';
import TaskListResponse from '../models/tasks/TaskListResponse';
import ServerResponse from '../models/ServerResponse';

export const getTasks = () => 
    axios.request<ServerResponse<TaskListResponse>>({
        method: 'GET',
        url: API_URL
    }).then(r => {
        return r.data
    })