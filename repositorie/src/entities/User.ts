import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";



@Entity("Users")
 class User {
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;


    @UpdateDateColumn()
    Updated_at: Date;

    constructor() {
        if(!this.id) {
        this.id = uuid();
        }
    }

}

export{ User };
