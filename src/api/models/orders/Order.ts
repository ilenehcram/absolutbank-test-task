import Person from "./Person";
import Organisation from "./Organisation";
import Status from "../statuses/Status";

export default interface Order {
    id: number;
    price: number;
    person: Person;
    organisation: Organisation;
    statuses: Array<Status>;
}