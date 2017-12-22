import {Index,Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class Events {


   /* @Column("int",{
        generated:true,
        nullable:false,
        primary:true, 
        }) */

    @PrimaryGeneratedColumn()
    idEvents:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50, 
        })
    eventName:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:35, 
        })
    addressOfEvent:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:12, 
        })
    addressLatitude:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:12, 
        })
    addressLongitude:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:15, 
        })
    exactDate:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:10, 
        })
    startTime:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:10, 
        })
    finishTime:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:15, 
        })
    eventStartInterval:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:15, 
        })
    eventFinishInterval:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45, 
        })
    citizenName:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100, 
        })
    citizenPhoto:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:15, 
        })
    companyName:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100, 
        })
    companyLogo:string;
        

    @Column("int",{ 
        nullable:false, 
        })
    telNumberPrime:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:30, 
        })
    usersEmail:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45, 
        })
    sitePrime:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:300, 
        })
    aboutEvent:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:20, 
        })
    personToContact:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100, 
        })
    placePicture:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:35, 
        })
    meetingPlace:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:12, 
        })
    meetingPlaceLatitude:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:12, 
        })
    meetingPlaceLongitude:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:200, 
        })
    getToPlace:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:200, 
        })
    whatToDo:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:200, 
        })
    equipment:string;
        

    @Column("int",{ 
        nullable:true, 
        })
    minPeople:number;
        

    @Column("int",{ 
        nullable:true, 
        })
    maxPeople:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:300, 
        })
    smthElse:string;
        
}