import { IsString, IsInt, IsEmail } from 'class-validator';

export class CreateEventDto {

  @IsString()
  readonly eventName: string;
  @IsString()
  readonly addressOfEvent: string;
  @IsString()
  readonly addressLatitude: string;
  @IsString()
  readonly addressLongitude: string;
  @IsString()
  readonly exactDate: string;
  @IsString()
  readonly startTime: string;
  @IsString()
  readonly finishTime: string;
  @IsString()
  readonly eventStartInterval: string;
  @IsString()
  readonly eventFinishInterval: string;
  @IsString()
  readonly citizenName: string;
  @IsString()
  readonly citizenPhoto: string;
  @IsString()
  readonly companyName: string;
  @IsString()
  readonly companyLogo: string;
  @IsInt()
  readonly telNumberPrime: number;
  @IsString()
  @IsEmail()
  readonly usersEmail: string;
  @IsString()
  readonly sitePrime: string;
  @IsString()
  readonly aboutEvent: string;
  @IsString()
  readonly personToContact: string;
  @IsString()
  readonly placePicture: string;
  @IsString()
  readonly meetingPlace: string;
  @IsString()
  readonly meetingPlaceLatitude: string;
  @IsString()
  readonly meetingPlaceLongitude: string;
  @IsString()
  readonly getToPlace: string;
  @IsString()
  readonly whatToDo: string;
  @IsString()
  readonly equipment: string;
  @IsInt()
  readonly minPeople: number;
  @IsInt()
  readonly maxPeople: number;
  @IsString()
  readonly smthElse: string;
}