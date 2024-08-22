import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  booking?: BookingWhereUniqueInput;
  id?: StringFilter;
  paymentDate?: DateTimeNullableFilter;
  paymentStatus?: "Option1";
};
