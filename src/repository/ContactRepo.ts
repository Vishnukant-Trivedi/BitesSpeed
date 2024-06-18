import { Contact } from '../model/Contact'

interface IContactRepo {
    save(contact: Contact): Promise<void>;
    update(contact: Contact): Promise<void>;
    delete(contactId: number): Promise<void>;
    findById(contactId: number): Promise<Contact>;
    findAll(): Promise<Contact[]>;
}

export class ContactRepo implements IContactRepo{
    async save(contact: Contact): Promise<void> {
       try {
         await Contact.create({
            phoneNumber: contact.phoneNumber,
            email: contact.email,
            linkedId: contact.linkedId,
            linkPrecedence: contact.linkPrecedence
         })
       } catch (error) {
            throw new Error("Failed to create Contact")
       }
    }
    async update(contact: Contact): Promise<void> {
        try {
            const new_contact = await Contact.findOne({
                where: {
                    id: contact.id,
                },
            })
            if(!new_contact){
                throw new Error("Contact not found")
            }
            new_contact.phoneNumber = contact.phoneNumber
            new_contact.email = contact.email
            new_contact.linkedId = contact?.linkedId
            new_contact.linkPrecedence = contact.linkPrecedence
            await new_contact.save();
          } catch (error) {
               throw new Error("Failed to create Contact")
          }
    }
    async delete(contactId: number): Promise<void> {
        try {
            const new_contact = await Contact.findOne({
                where: {
                    id: contactId,
                },
            })
            if(!new_contact){
                throw new Error("Contact not found")
            }
            await new_contact.destroy();
        } catch (error) {
             throw new Error("Failed to create Contact")
        }
    }
     async findById(contactId: number): Promise<Contact> {
        try {
            const new_contact = await Contact.findOne({
                where: {
                    id: contactId,
                },
            })
            if(!new_contact){
                throw new Error("Contact not found")
            }
            return new_contact;
        } catch (error) {
             throw new Error("Failed to create Contact")
        }
    }
    async findAll(): Promise<Contact[]> {
        try {
            const new_contact = await Contact.findAll()
            return new_contact;
        } catch (error) {
             throw new Error("Failed to create Contact")
        }
    }

}