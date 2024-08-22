import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  bookingId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentDate?: SortOrder;
  paymentStatus?: SortOrder;
  updatedAt?: SortOrder;
};
