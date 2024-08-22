import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { PaymentUpdateManyWithoutBookingsInput } from "./PaymentUpdateManyWithoutBookingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  bookingDate?: Date | null;
  packageField?: PackageModelWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutBookingsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
