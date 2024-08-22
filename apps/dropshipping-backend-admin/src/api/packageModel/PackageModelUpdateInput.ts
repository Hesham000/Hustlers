import { BookingUpdateManyWithoutPackageModelsInput } from "./BookingUpdateManyWithoutPackageModelsInput";

export type PackageModelUpdateInput = {
  bookings?: BookingUpdateManyWithoutPackageModelsInput;
  description?: string | null;
  name?: string | null;
  price?: number | null;
};
