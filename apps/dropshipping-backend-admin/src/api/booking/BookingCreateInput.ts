import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { PaymentCreateNestedManyWithoutBookingsInput } from "./PaymentCreateNestedManyWithoutBookingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  bookingDate?: Date | null;
  packageField?: PackageModelWhereUniqueInput | null;
  payments?: PaymentCreateNestedManyWithoutBookingsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
