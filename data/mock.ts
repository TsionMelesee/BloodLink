import { BloodRequest, Doctor, User } from "@/types";


export const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Mekdes Tadesse",
    hospital: "Tikur Anbessa Specialized Hospital",
    email: "mekdes.tadesse@tikuranbessa.et",
    phone: "+251911223344",
    specialization: "Hematology",
  },
  {
    id: "2",
    name: "Dr. Abebe Fikadu",
    hospital: "St. Paul’s Hospital Millennium Medical College",
    email: "abebe.fikadu@stpauls.et",
    phone: "+251922334455",
    specialization: "Emergency Medicine",
  },
];


export const mockDonors: User[] = [
  {
    id: "1",
    name: "Tesfaye Alemu",
    email: "tesfaye.alemu@example.et",
    bloodType: "O+",
    location: "Addis Ababa",
    lastDonation: "2025-03-10",
    role: "donor",
    phone: "+251911556677",
  },
  {
    id: "2",
    name: "Hana Getachew",
    email: "hana.getachew@example.et",
    bloodType: "A-",
    location: "Adama",
    lastDonation: "2025-02-18",
    role: "donor",
    phone: "+251922667788",
  },
];
export const mockRequests: BloodRequest[] = [
  {
    id: "1",
    bloodType: "O-",
    hospital: "Tikur Anbessa Specialized Hospital",
    location: "Addis Ababa",
    urgency: "High",
    postedAt: "2025-04-01T10:00:00Z",
    contact: "+251911223344",
    details: "Urgent need for surgery scheduled tomorrow morning",
    doctorId: "1",
  },
  {
    id: "2",
    bloodType: "A+",
    hospital: "St. Paul’s Hospital Millennium Medical College",
    location: "Adama",
    urgency: "Medium",
    postedAt: "2025-04-01T09:00:00Z",
    contact: "+251922334455",
    details: "Need for scheduled procedures next week",
    doctorId: "2",
  },
];
