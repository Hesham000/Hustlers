/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { PackageModelWhereUniqueInput } from "../../packageModel/base/PackageModelWhereUniqueInput";
import { PaymentCreateNestedManyWithoutBookingsInput } from "./PaymentCreateNestedManyWithoutBookingsInput";
import { EnumBookingStatus } from "./EnumBookingStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class BookingCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  bookingDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => PackageModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PackageModelWhereUniqueInput)
  @IsOptional()
  @Field(() => PackageModelWhereUniqueInput, {
    nullable: true,
  })
  packageField?: PackageModelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutBookingsInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutBookingsInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutBookingsInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutBookingsInput;

  @ApiProperty({
    required: false,
    enum: EnumBookingStatus,
  })
  @IsEnum(EnumBookingStatus)
  @IsOptional()
  @Field(() => EnumBookingStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { BookingCreateInput as BookingCreateInput };