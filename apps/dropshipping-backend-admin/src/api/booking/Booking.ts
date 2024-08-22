import { PackageModel } from "../packageModel/PackageModel";
import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type Booking = {
  bookingDate: Date | null;
  createdAt: Date;
  id: string;
  packageField?: PackageModel | null;
  payments?: Array<Payment>;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
