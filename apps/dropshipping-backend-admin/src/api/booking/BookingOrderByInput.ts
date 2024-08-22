import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  bookingDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  packageFieldId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
