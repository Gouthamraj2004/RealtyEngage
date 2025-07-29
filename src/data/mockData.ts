import { Project, Enquiry, Feedback, Payment } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Luxury Residences',
    location: 'Downtown Central',
    price: '₹85 Lakhs - ₹1.2 Crores',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['3-4 BHK', 'Swimming Pool', 'Gym', 'Parking'],
    description: 'Premium luxury apartments with world-class amenities in the heart of the city.',
    status: 'ongoing',
    completionDate: 'Dec 2024'
  },
  {
    id: '2',
    title: 'Green Valley Villas',
    location: 'Suburb Hills',
    price: '₹1.5 Crores - ₹2.8 Crores',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['4-5 BHK', 'Private Garden', 'Club House', '24/7 Security'],
    description: 'Spacious villas surrounded by lush greenery and modern facilities.',
    status: 'upcoming',
    completionDate: 'Jun 2025'
  },
  {
    id: '3',
    title: 'Smart City Apartments',
    location: 'Tech Park Area',
    price: '₹55 Lakhs - ₹95 Lakhs',
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['2-3 BHK', 'Smart Home', 'Co-working Space', 'EV Charging'],
    description: 'Modern smart apartments designed for the tech-savvy urban professional.',
    status: 'completed'
  }
];

export const enquiries: Enquiry[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    phone: '+91 98765 43210',
    projectId: '1',
    message: 'Interested in 3 BHK apartment. Please share more details.',
    status: 'pending',
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya@example.com',
    phone: '+91 87654 32109',
    projectId: '2',
    message: 'Would like to schedule a site visit for the villa project.',
    status: 'responded',
    createdAt: '2024-01-14T14:20:00Z'
  }
];

export const feedback: Feedback[] = [
  {
    id: '1',
    name: 'Amit Kumar',
    email: 'amit@example.com',
    type: 'feedback',
    subject: 'Excellent Service',
    message: 'Very satisfied with the customer support and project quality.',
    status: 'resolved',
    priority: 'low',
    createdAt: '2024-01-13T09:15:00Z'
  },
  {
    id: '2',
    name: 'Sneha Reddy',
    email: 'sneha@example.com',
    type: 'grievance',
    subject: 'Construction Delay',
    message: 'There seems to be a delay in the construction timeline.',
    status: 'in-progress',
    priority: 'high',
    createdAt: '2024-01-12T16:45:00Z'
  }
];

export const payments: Payment[] = [
  {
    id: '1',
    projectId: '1',
    amount: 50000,
    description: 'Booking Amount - Luxury Residences',
    status: 'completed',
    method: 'card',
    createdAt: '2024-01-15T11:00:00Z'
  },
  {
    id: '2',
    projectId: '2',
    amount: 100000,
    description: 'Token Amount - Green Valley Villas',
    status: 'pending',
    method: 'bank',
    createdAt: '2024-01-14T15:30:00Z'
  }
];