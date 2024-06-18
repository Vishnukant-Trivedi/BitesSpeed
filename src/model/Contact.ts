import {
    Column,
    DataType,
    Table,
    Model
  } from "sequelize-typescript";
  
  @Table({
    tableName: Contact.CONTACT_TABLE_NAME,
    timestamps: true,
    paranoid: true,
  })
  export class Contact extends Model {
    public static CONTACT_TABLE_NAME = "contact" as string;
    public static CONTACT_ID = "id" as string;
    public static CONTACT_PHONE_NUMBER = "phoneNumber" as string;
    public static CONTACT_EMAIL = "email" as string;
    public static CONTACT_LINKED_ID = "linkedId" as string;
    public static CONTACT_LINKED_PRECEDENCE = "linkPrecedence" as string;
    public static CONTACT_CREATED_AT = "createdAt" as string;
    public static CONTACT_UPDATED_AT = "updatedAt" as string;
    public static CONTACT_DELETED_AT = "deletedAt" as string;
  
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: Contact.CONTACT_ID,
    })
    id!: number;
  
    @Column({
      type: DataType.STRING(10),
      field: Contact.CONTACT_PHONE_NUMBER,
      allowNull: true
    })
    phoneNumber?: string;
  
    @Column({
      type: DataType.STRING(100),
      field: Contact.CONTACT_EMAIL,
      allowNull: true,
    })
    email?: string;
  
    @Column({
      type: DataType.INTEGER,
      field: Contact.CONTACT_LINKED_ID,
      allowNull: true,
    })
    linkedId?: number;
  
    @Column({
      type: DataType.STRING(10),
      field: Contact.CONTACT_LINKED_PRECEDENCE,
    })
    linkPrecedence!: string;
  
    @Column({
      type: DataType.DATE,
      field: Contact.CONTACT_CREATED_AT,
      defaultValue: DataType.NOW,
    })
    createdAt!: Date;
  
    @Column({
      type: DataType.DATE,
      field: Contact.CONTACT_UPDATED_AT,
      defaultValue: DataType.NOW,
    })
    updatedAt!: Date;
  
    @Column({
      type: DataType.DATE,
      field: Contact.CONTACT_DELETED_AT,
      allowNull: true,
    })
    deletedAt!: Date | null;
  }
  