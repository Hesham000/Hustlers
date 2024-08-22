import { BookingCreateNestedManyWithoutPackageModelsInput } from "./BookingCreateNestedManyWithoutPackageModelsInput";

export type PackageModelCreateInput = {
  bookings?: BookingCreateNestedManyWithoutPackageModelsInput;
  description?: string | null;
  name?: string | null;
  price?: number | null;
};
