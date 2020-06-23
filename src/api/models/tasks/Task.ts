import Order from "../orders/Order";
import Tag from "../tags/Tag";

export default interface Task {
    id: number;
    title: string;
    date: number;
    order: Order;
    tags: Array<Tag>;
}