import ServerResponse from "../models/ServerResponse";
import TaskListResponse from "../models/tasks/TaskListResponse";

const getOrganisation = () => ({
    "id": 1,
    "name": "ООО \"ТехИнвест\"",
    "tin": "2901142357"
});

const getPerson = () => ({
    "id": 1,
    "name": "Иван",
    "surname": "Ивановов",
    "patronymic": "Иванович"
});

const getStatuses = () => [
    {
        "id": 1,
        "label": "Исполнение"
    },
    {
        "id": 2,
        "label": "Новая"
    },
    {
        "id": 3,
        "label": "На экспертизе"
    }
];

const getFirstOrder = () => ({
    "id": 1,
    "price": 2000000,
    "person": getPerson(),
    "organisation": getOrganisation(),
    "statuses": getStatuses()
});

const getSecondOrder = () => ({
    "id": 2,
    "price": 154000000,
    "person": getPerson(),
    "organisation": getOrganisation(),
    "statuses": getStatuses()
});

const getTags = () => [
    {
        "id": 1,
        "label": "Какой-то тег"
    }
];

const getTask = (id: number) => ({
    "id": id,
    "date": 1515358800000,
    "title": "Проверить данные клиента",
    "order": id % 2 !== 0 ? getFirstOrder() : getSecondOrder(),
    "tags": getTags()
});

const firstTaskId = 234567;

const getTasks = () => new Array(15).fill(1).map((n, i) => firstTaskId + i).map(id => getTask(id));

const GetTaskListServerResponseMock: ServerResponse<TaskListResponse> = {
    data: {
        tasks: getTasks()
    }
}

export const generateGetTaskListServerResponce = () => JSON.stringify(GetTaskListServerResponseMock);