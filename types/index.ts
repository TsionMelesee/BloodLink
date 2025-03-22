export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface User {
  id: string;
  name: string;
  email: string;
  bloodType: BloodType;
  location: string;
  lastDonation?: string;
  role: 'donor' | 'doctor';
  phone?: string;
}

export interface Doctor {
  id: string;
  name: string;
  hospital: string;
  email: string;
  phone: string;
  specialization: string;
}

export interface BloodRequest {
  id: string;
  bloodType: BloodType;
  hospital: string;
  location: string;
  urgency: 'High' | 'Medium' | 'Low';
  postedAt: string;
  contact: string;
  details: string;
  doctorId: string;
}
