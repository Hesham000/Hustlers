import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  id?: StringFilter;
  packageField?: PackageModelWhereUniqueInput;
  payments?: PaymentListRelationFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
