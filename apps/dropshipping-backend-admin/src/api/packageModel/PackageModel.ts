import { Booking } from "../booking/Booking";

export type PackageModel = {
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
