import { Person } from "./person.js";

export const mapToPersonObjects = ({ picture, name, email, phone, location, currentime }) => {
    return new Promise((resolve, reject) => {
        const isValidData = picture && name;
        if (isValidData) {
            const personObject = new Person(picture, name);
            personObject.email = email;
            personObject.phone = phone;
            personObject.location = location;
            personObject.currentime = currentime;

            resolve(personObject);
        } else {
            const errorMessage = 'Invalid data.';
            reject(errorMessage);
        }
    });
};