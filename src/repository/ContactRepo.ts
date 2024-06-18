import { Contact } from '../model/Contact'

interface IContactRepo {
    save(contact: Contact): Promise<void>;
    update(contact: Contact): Promise<void>;
    delete(contactId: number): Promise<void>;
    findById(contactId: number): Promise<void>;
    findAll(): Promise<void>;
}

export class ContactRepo implements IContactRepo{
    save(contact: Contact): Promise<void> {
       try {
         throw new Error('Method not implemented.');
       } catch (error) {
            throw new Error("Failed to create Contact")
       }
    }
    update(contact: Contact): Promise<void> {
        throw new Error('Method not implemented.');
    }
    delete(contactId: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    findById(contactId: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<void> {
        throw new Error('Method not implemented.');
    }

}