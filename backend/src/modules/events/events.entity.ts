import {Index,Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {IsOptional, IsNotEmpty, IsInt, IsString, IsPositive, Max, Min, IsEmail, IsFQDN, Length} from 'class-validator';

@Entity()
export class Events {

    @PrimaryGeneratedColumn()
    idEvents:number;
        
    @Column("varchar",{ 
        nullable:false,
        length:50, 
        })
    @IsNotEmpty()
    @IsString()
    @Length(20, 49)
    eventName:string;
        
    @Column("varchar",{ 
        nullable:false,
        length:35, 
        })
    @IsNotEmpty()
    @IsString()
    @Length(15, 34)
    addressOfEvent:string;
        
    @Column("varchar",{ 
        nullable:false,
        length:12, 
        })
    @IsNotEmpty()
    @IsString()
    addressLatitude:string;
        
    @Column("varchar",{ 
        nullable:false,
        length:12, 
        })
    @IsNotEmpty()
    @IsString()
    addressLongitude:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:15, 
        })
    @IsOptional()
    @IsString()
    @Length(7, 14)
    exactDate:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:10, 
        })
    @IsOptional()
    @IsString()
    @Length(4, 9)
    startTime:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:10, 
        })
    @IsOptional()
    @IsString()
    @Length(4, 9)
    finishTime:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:15, 
        })
    @IsOptional()
    @IsString()
    @Length(7, 14)
    eventStartDate:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:15, 
        })
    @IsOptional()
    @IsString()
    @Length(7, 14)
    eventFinishDate:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:45, 
        })
    @IsOptional()
    @IsString()
    @Length(1, 44)
    contactName:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:100, 
        })
    @IsOptional()
    @IsString()
    @Length(5, 99)
    contactPhoto:string;
        
    @Column("int",{ 
        nullable:false, 
        })
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    @Min(111111111)
    @Max(999999999999)
    telNumberAdd0:number;
        
    @Column("int",{ 
        nullable:false, 
        })
    @IsOptional()
    @IsInt()
    @IsPositive()
    @Min(111111111)
    @Max(999999999999)
    telNumberAdd1:number;

    @Column("int",{ 
        nullable:false, 
        })
    @IsOptional()
    @IsInt()
    @IsPositive()
    @Min(111111111)
    @Max(999999999999)
    telNumberAdd2:number;

    @Column("varchar",{ 
        nullable:false,
        length:30, 
        })
    @IsNotEmpty()
    @IsEmail()
    @Length(8, 29)
    usersEmail:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:45, 
        })
    @IsOptional()
    @IsFQDN()
    @Length(6, 44)
    siteAdd0:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:45, 
        })
    @IsOptional()
    @IsFQDN()
    @Length(6, 44)
    siteAdd1:string;

    @Column("varchar",{ 
        nullable:true,
        length:45, 
        })
    @IsOptional()
    @IsFQDN()
    @Length(6, 44)
    siteAdd2:string;

    @Column("varchar",{ 
        nullable:true,
        length:45, 
        })
    @IsOptional()
    @IsFQDN()
    @Length(6, 44)
    siteAdd3:string;

    @Column("varchar",{ 
        nullable:true,
        length:45, 
        })
    @IsOptional()
    @IsFQDN()
    @Length(6, 44)
    siteAdd4:string;

    @Column("varchar",{ 
        nullable:true,
        length:300, 
        })
    @IsOptional()
    @IsString()
    @Length(50, 299)
    aboutEvent:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:20, 
        })
    @IsOptional()
    @IsString()
    @Length(1, 19)
    personToContact:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:100, 
        })
    @IsOptional()
    @IsString()
    @Length(5, 99)
    placePicture:string;
        
    @Column("varchar",{ 
        nullable:false,
        length:35, 
        })
    @IsNotEmpty()
    @IsString()
    @Length(15, 34)
    meetingPlace:string;
        
    @Column("varchar",{ 
        nullable:false,
        length:12, 
        })
    @IsNotEmpty()
    @IsString()
    meetingPlaceLatitude:string;
        
    @Column("varchar",{ 
        nullable:false,
        length:12, 
        })
    @IsNotEmpty()
    @IsString()
    meetingPlaceLongitude:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:200, 
        })
    @IsOptional()
    @IsString()
    @Length(15, 199)
    getToPlace:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:200, 
        })
    @IsOptional()
    @IsString()
    @Length(15, 199)
    whatToDo:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:200, 
        })
    @IsOptional()
    @IsString()
    @Length(10, 199)
    equipment:string;
        
    @Column("int",{ 
        nullable:true, 
        })
    @IsOptional()
    @IsInt()
    @IsPositive()
    @Max(900)
    minPeople:number;
        
    @Column("int",{ 
        nullable:true, 
        })
    @IsOptional()
    @IsInt()
    @IsPositive()
    @Max(1000)
    maxPeople:number;
        
    @Column("varchar",{ 
        nullable:true,
        length:300, 
        })
    @IsOptional()
    @IsString()
    @Length(15, 299)
    smthElse:string;

    @Column("varchar",{ 
        nullable:true,
        length:300, 
        })
    @IsNotEmpty()
    @IsString()
    @Length(16, 299)
    eventCoordinates:string;

    @Column("varchar",{ 
        nullable:true,
        length:300, 
        })
    @IsNotEmpty()
    @IsString()
    @Length(16, 299)
    meetingCoordinates:string;       
}