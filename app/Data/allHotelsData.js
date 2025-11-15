
const hotel_1 = 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/allHotels/hotel_1.webp';
const hotel_2 = 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/allHotels/hotel_2.webp';
const hotel_3 = 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/allHotels/hotel_3.webp';
const hotel_4 = 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/allHotels/hotel_4.webp';
const hotel_5 = 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/allHotels/hotel_5.webp';
const hotel_6 = 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/allHotels/hotel_6.webp';
const hotel_7 = 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/allHotels/hotel_7.webp';
const hotel_8 = 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/allHotels/hotel_8.webp';

export const allHotels = [
    {
        id: 1,
        title: "Grand Mahakal Heritage",
        slug: "grand-mahakal-heritage-0",
        subtitle: "Luxury Stay Just 200m from Mahakaleshwar Temple",
        heroImage: hotel_1,
        rating: 5,
        reviews: 20,
        hotelFor: "mp",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Near Mahakal Temple Gate No. 3",
        currentPrice: "8,499/-",
        originalPrice: "10,999/-",
        saving: "2,500/-",
        overview: "Experience divine luxury at our heritage property blending modern comforts with traditional architecture. Perfect for pilgrims seeking proximity to the temple with premium amenities.",
        highlights: [
            "200m walking distance from Mahakal Temple",
            "Rooftop restaurant with temple view",
            "24/7 hot water & generator backup",
            "Ayurvedic massage center",
            "Traditional havan kund for private rituals",
            "Free guided temple tours",
            "Panditji available for daily pujas"
        ],
        roomTypes: [
            {
                name: "Deluxe Room",
                description: "Cozy room with temple-facing window, AC, and attached bathroom",
                size: "220 sq ft",
                occupancy: "2 Adults",
                price: "₹8,499",
                amenities: ["Free WiFi", "TV", "Minibar", "Toiletries"]
            },
            {
                name: "Executive Suite",
                description: "Spacious suite with separate living area and temple view balcony",
                size: "450 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹12,999",
                amenities: ["Free WiFi", "LED TV", "Minibar", "Bathrobe", "Slippers"]
            },
            {
                name: "Premium Room",
                description: "Spacious top-floor room with private terrace and panoramic temple views",
                size: "320 sq ft",
                occupancy: "2 Adults",
                price: "₹10,200",
                amenities: ["AC", "Private Terrace", "Wi-Fi", "Complimentary Breakfast"]
            },

            {
                name: "Maharaja Suite",
                description: "Luxurious heritage-style suite with antique furniture and private pooja room",
                size: "650 sq ft",
                occupancy: "2 Adults + 2 Children",
                price: "₹15,999",
                amenities: ["Butler service", "Jacuzzi", "Personal safe", "Premium toiletries"]
            }
        ],
        amenities: [
            "24-hour front desk",
            "Free parking",
            "Airport transfers (chargeable)",
            "Business center",
            "Doctor on call",
            "Laundry service",
            "Luggage storage",
            "Multilingual staff"
        ],
        diningOptions: [
            {
                name: "Nectar - Multi-cuisine Restaurant",
                type: "Breakfast, Lunch, Dinner",
                description: "Serves traditional Satvik meals along with continental options"
            },
            {
                name: "Amrit - Rooftop Cafe",
                type: "Beverages & Snacks",
                description: "Open-air café with panoramic views of Mahakal Temple"
            },
            {
                name: "Room Service",
                type: "24-hour",
                description: "Extended menu available round the clock"
            }
        ],
        specialServices: [
            "VIP temple darshan arrangements",
            "Rudrabhishek pooja booking",
            "Guided heritage walks",
            "Yoga sessions at sunrise",
            "Cultural performances on weekends"
        ],
        policies: [
            "Check-in: 12 PM | Check-out: 10 AM",
            "Early check-in/late check-out subject to availability",
            "Children below 5 stay free",
            "Photo ID mandatory at check-in",
            "No pets allowed"
        ],
        cancellationPolicy: [
            "Free cancellation until 48 hours before arrival",
            "50% charged for late cancellations",
            "No refund for no-shows"
        ],
        nearbyAttractions: [
            "Mahakaleshwar Temple - 200m",
            "Harsiddhi Mata Temple - 1km",
            "Ram Ghat - 1.2km",
            "Kal Bhairav Temple - 2km",
            "Vikram Kirti Mandir Museum - 3km"
        ],
    },
    {
        id: 2,
        title: "Rudraksh Riverside Retreat",
        slug: "rudraksh-riverside-retreat-1",
        subtitle: "Premium Property on Kshipra River Banks",
        heroImage: hotel_2,
        rating: 4.7,
        reviews: 20,
        hotelFor: "mp",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Ram Ghat Road, Ujjain",
        currentPrice: "6,999/-",
        originalPrice: "8,500/-",
        saving: "1,501/-",
        overview: "A serene riverside property offering spiritual ambiance with modern luxuries. Ideal for those seeking peaceful contemplation after temple visits.",
        highlights: [
            "Private ghat access for morning rituals",
            "Ayurvedic spa with traditional treatments",
            "Organic farm-to-table dining",
            "Meditation garden with yoga shala",
            "Cultural programs every evening",
            "Boat ride arrangements",
            "Eco-friendly practices"
        ],
        roomTypes: [
            {
                name: "Garden View Room",
                description: "Ground floor room opening to herbal gardens",
                size: "250 sq ft",
                occupancy: "2 Adults",
                price: "₹6,999",
                amenities: ["Fan", "TV", "Attached bathroom"]
            },
            {
                name: "River View Room",
                description: "First floor room with balcony overlooking Kshipra river",
                size: "280 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹9,500",
                amenities: ["AC", "TV", "Minibar", "Kettle"]
            },
            {
                name: "Heritage Suite",
                description: "Traditional courtyard-style suite with private sit-out",
                size: "500 sq ft",
                occupancy: "2 Adults + 2 Children",
                price: "₹12,000",
                amenities: ["Living area", "Dining space", "Butler service"]
            }
        ],
        amenities: [
            "Free bicycle rentals",
            "24-hour security",
            "Travel desk",
            "Currency exchange",
            "Gift shop",
            "Free WiFi",
            "Power backup"
        ],
        diningOptions: [
            {
                name: "Annapurna - Pure Vegetarian Restaurant",
                type: "All-day dining",
                description: "Specializes in local Malwa cuisine and Jain food options"
            },
            {
                name: "Ghat-side Tea Lounge",
                type: "Sunrise to Sunset",
                description: "Serves herbal teas and light snacks by the river"
            }
        ],
        specialServices: [
            "Sunrise boat pooja arrangements",
            "Priest services for homas",
            "Astrology consultations",
            "Organic farming workshops"
        ],
        policies: [
            "Check-in: 2 PM | Check-out: 11 AM",
            "No smoking in rooms",
            "Quiet hours after 10 PM",
            "Wedding groups not accepted"
        ],
        cancellationPolicy: [
            "Free cancellation until 72 hours before arrival",
            "1 night charge for late cancellations",
            "Non-refundable advance for peak season"
        ],
        nearbyAttractions: [
            "Ram Ghat - 50m",
            "Sandipani Ashram - 800m",
            "Mangalnath Temple - 1.5km",
            "Mahakaleshwar Temple - 2km"
        ],

    },
    {
        id: 3,
        title: "Shivam Executive Inn",
        slug: "shivam-executive-inn-2",
        subtitle: "Business-Class Hotel Near Railway Station",
        heroImage: hotel_3,
        rating: 3.2,
        reviews: 20,
        hotelFor: "ujjain",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Opposite Railway Station, Ujjain",
        currentPrice: "4,200/-",
        originalPrice: "5,000/-",
        saving: "800/-",
        overview: "Modern hotel offering convenience for business travelers and pilgrims alike. Centrally located with excellent transport connectivity.",
        highlights: [
            "5-minute walk from railway station",
            "24-hour coffee shop",
            "Conference facilities",
            "Travel desk with car rentals",
            "Express check-in/check-out",
            "Power backup",
            "Free station transfers"
        ],
        roomTypes: [
            {
                name: "Standard Room",
                description: "Compact comfortable room with work desk",
                size: "180 sq ft",
                occupancy: "2 Adults",
                price: "₹4,200",
                amenities: ["AC", "TV", "WiFi"]
            },
            {
                name: "Executive Room",
                description: "Spacious room with ergonomic workspace",
                size: "250 sq ft",
                occupancy: "2 Adults",
                price: "₹5,800",
                amenities: ["Work desk", "Tea maker", "Electronic safe"]
            },
            {
                name: "Executive Suite",
                description: "Separate living and bedroom areas",
                size: "400 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹7,500",
                amenities: ["Mini fridge", "Bathrobe", "Premium toiletries"]
            }
        ],
        amenities: [
            "Business center",
            "ATM in lobby",
            "Doctor on call",
            "Laundry service",
            "Elevator access",
            "CCTV security"
        ],
        diningOptions: [
            {
                name: "24/7 Coffee Shop",
                type: "Round-the-clock",
                description: "Serves snacks, beverages and quick meals anytime"
            },
            {
                name: "The Grand Thali",
                type: "Lunch & Dinner",
                description: "Specializes in regional thali meals"
            }
        ],
        specialServices: [
            "Early breakfast for temple-goers",
            "Train ticket assistance",
            "Photocopy/printing services",
            "Meeting room rentals"
        ],
        policies: [
            "Check-in: 12 PM | Check-out: 10 AM",
            "Early arrival/late departure charges apply",
            "Extra bed ₹800 per night"
        ],
        cancellationPolicy: [
            "Free cancellation until 24 hours before arrival",
            "Full charge for same-day cancellations",
            "No refund for no-shows",
        ],
        nearbyAttractions: [
            "Ujjain Railway Station - 200m",
            "Mahakaleshwar Temple - 3km",
            "Kal Bhairav Temple - 2.5km",
            "City Bus Stand - 1km"
        ],

    },
    {
        id: 4,
        title: "Omkar Heritage Haveli",
        slug: "omkar-heritage-haveli-3",
        subtitle: "18th Century Restored Mansion with Modern Amenities",
        heroImage: hotel_4,
        rating: 5,
        reviews: 20,
        hotelFor: "ujjain",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Old City, Ujjain",
        currentPrice: "12,500/-",
        originalPrice: "15,000/-",
        saving: "2,500/-",
        overview: "Step back in time at this meticulously restored haveli offering royal treatment with its courtyards, frescoes and antique decor while providing contemporary comforts.",
        highlights: [
            "300-year-old heritage structure",
            "Hand-painted traditional frescoes",
            "Private temple within property",
            "Royal treatment with butler service",
            "Heritage walks of old Ujjain",
            "Traditional puppet shows",
            "In-house astrologer"
        ],
        roomTypes: [
            {
                name: "Rajwada Room",
                description: "Period-style room with courtyard view",
                size: "300 sq ft",
                occupancy: "2 Adults",
                price: "₹12,500",
                amenities: ["Four-poster bed", "Antique furniture", "Modern bathroom"]
            },
            {
                name: "Sheesh Mahal Suite",
                description: "Mirror-work suite with private jharokha",
                size: "500 sq ft",
                occupancy: "2 Adults",
                price: "₹18,000",
                amenities: ["Sitting area", "Vintage decor", "Premium amenities"]
            },
            {
                name: "Royal Courtyard Suite",
                description: "Two-bedroom suite surrounding private courtyard",
                size: "900 sq ft",
                occupancy: "4 Adults",
                price: "₹25,000",
                amenities: ["Private dining", "Personal butler", "Jacuzzi"]
            }
        ],
        amenities: [
            "Swimming pool",
            "Ayurvedic spa",
            "Library with rare manuscripts",
            "Cultural performances",
            "Cooking classes",
            "Guided heritage tours"
        ],
        diningOptions: [
            {
                name: "Darbar - Royal Dining",
                type: "Multi-cuisine",
                description: "Experience royal recipes from Malwa region"
            },
            {
                name: "Chowk - Courtyard Dining",
                type: "Private meals",
                description: "Personalized dining under the stars"
            }
        ],
        specialServices: [
            "Private aarti arrangements",
            "Costume photoshoots",
            "Turmeric bath rituals",
            "Palanquin rides",
            "Private chef experiences"
        ],
        policies: [
            "Check-in: 3 PM | Check-out: 12 PM",
            "Children above 12 only",
            "No outside food allowed",
            "Traditional dress encouraged"
        ],
        cancellationPolicy: [
            "15+ days before: Full refund",
            "7-14 days before: 50% refund",
            "0-6 days before: No refund"
        ],
        nearbyAttractions: [
            "Mahakaleshwar Temple - 1.5km",
            "Vedh Shala Observatory - 2km",
            "Bhartrihari Caves - 3km",
            "Gopal Mandir - 1km"
        ],

    },
    {
        id: 5,
        title: "Grand Mahakal Heritage",
        slug: "grand-mahakal-heritage-4",
        subtitle: "Luxury Stay Just 200m from Mahakaleshwar Temple",
        heroImage: hotel_5,
        rating: 4.9,
        reviews: 20,
        hotelFor: "ujjain",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Near Mahakal Temple Gate No. 3",
        currentPrice: "8,499/-",
        originalPrice: "10,999/-",
        saving: "2,500/-",
        overview: "Experience divine luxury at our heritage property blending modern comforts with traditional architecture. Perfect for pilgrims seeking proximity to the temple with premium amenities.",
        highlights: [
            "200m walking distance from Mahakal Temple",
            "Rooftop restaurant with temple view",
            "24/7 hot water & generator backup",
            "Ayurvedic massage center",
            "Traditional havan kund for private rituals",
            "Free guided temple tours",
            "Panditji available for daily pujas"
        ],
        roomTypes: [
            {
                name: "Deluxe Room",
                description: "Cozy room with temple-facing window, AC, and attached bathroom",
                size: "220 sq ft",
                occupancy: "2 Adults",
                price: "₹8,499",
                amenities: ["Free WiFi", "TV", "Minibar", "Toiletries"]
            },
            {
                name: "Executive Suite",
                description: "Spacious suite with separate living area and temple view balcony",
                size: "450 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹12,999",
                amenities: ["Free WiFi", "LED TV", "Minibar", "Bathrobe", "Slippers"]
            },
            {
                name: "Maharaja Suite",
                description: "Luxurious heritage-style suite with antique furniture and private pooja room",
                size: "650 sq ft",
                occupancy: "2 Adults + 2 Children",
                price: "₹15,999",
                amenities: ["Butler service", "Jacuzzi", "Personal safe", "Premium toiletries"]
            }
        ],
        amenities: [
            "24-hour front desk",
            "Free parking",
            "Airport transfers (chargeable)",
            "Business center",
            "Doctor on call",
            "Laundry service",
            "Luggage storage",
            "Multilingual staff"
        ],
        diningOptions: [
            {
                name: "Nectar - Multi-cuisine Restaurant",
                type: "Breakfast, Lunch, Dinner",
                description: "Serves traditional Satvik meals along with continental options"
            },
            {
                name: "Amrit - Rooftop Café",
                type: "Beverages & Snacks",
                description: "Open-air café with panoramic views of Mahakal Temple"
            },
            {
                name: "Room Service",
                type: "24-hour",
                description: "Extended menu available round the clock"
            }
        ],
        specialServices: [
            "VIP temple darshan arrangements",
            "Rudrabhishek pooja booking",
            "Guided heritage walks",
            "Yoga sessions at sunrise",
            "Cultural performances on weekends"
        ],
        policies: [
            "Check-in: 12 PM | Check-out: 10 AM",
            "Early check-in/late check-out subject to availability",
            "Children below 5 stay free",
            "Photo ID mandatory at check-in",
            "No pets allowed"
        ],
        cancellationPolicy: [
            "Free cancellation until 48 hours before arrival",
            "50% charged for late cancellations",
            "No refund for no-shows"
        ],
        nearbyAttractions: [
            "Mahakaleshwar Temple - 200m",
            "Harsiddhi Mata Temple - 1km",
            "Ram Ghat - 1.2km",
            "Kal Bhairav Temple - 2km",
            "Vikram Kirti Mandir Museum - 3km"
        ],
    },
    {
        id: 6,
        title: "Rudraksh Riverside Retreat",
        slug: "rudraksh-riverside-retreat-5",
        subtitle: "Premium Property on Kshipra River Banks",
        heroImage: hotel_6,
        rating: 3.7,
        reviews: 20,
        hotelFor: "ujjain",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Ram Ghat Road, Ujjain",
        currentPrice: "6,999/-",
        originalPrice: "8,500/-",
        saving: "1,501/-",
        overview: "A serene riverside property offering spiritual ambiance with modern luxuries. Ideal for those seeking peaceful contemplation after temple visits.",
        highlights: [
            "Private ghat access for morning rituals",
            "Ayurvedic spa with traditional treatments",
            "Organic farm-to-table dining",
            "Meditation garden with yoga shala",
            "Cultural programs every evening",
            "Boat ride arrangements",
            "Eco-friendly practices"
        ],
        roomTypes: [
            {
                name: "Garden View Room",
                description: "Ground floor room opening to herbal gardens",
                size: "250 sq ft",
                occupancy: "2 Adults",
                price: "₹6,999",
                amenities: ["Fan", "TV", "Attached bathroom"]
            },
            {
                name: "River View Room",
                description: "First floor room with balcony overlooking Kshipra river",
                size: "280 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹9,500",
                amenities: ["AC", "TV", "Minibar", "Kettle"]
            },
            {
                name: "Heritage Suite",
                description: "Traditional courtyard-style suite with private sit-out",
                size: "500 sq ft",
                occupancy: "2 Adults + 2 Children",
                price: "₹12,000",
                amenities: ["Living area", "Dining space", "Butler service"]
            }
        ],
        amenities: [
            "Free bicycle rentals",
            "24-hour security",
            "Travel desk",
            "Currency exchange",
            "Gift shop",
            "Free WiFi",
            "Power backup"
        ],
        diningOptions: [
            {
                name: "Annapurna - Pure Vegetarian Restaurant",
                type: "All-day dining",
                description: "Specializes in local Malwa cuisine and Jain food options"
            },
            {
                name: "Ghat-side Tea Lounge",
                type: "Sunrise to Sunset",
                description: "Serves herbal teas and light snacks by the river"
            }
        ],
        specialServices: [
            "Sunrise boat pooja arrangements",
            "Priest services for homas",
            "Astrology consultations",
            "Organic farming workshops"
        ],
        policies: [
            "Check-in: 2 PM | Check-out: 11 AM",
            "No smoking in rooms",
            "Quiet hours after 10 PM",
            "Wedding groups not accepted"
        ],
        cancellationPolicy: [
            "Free cancellation until 72 hours before arrival",
            "1 night charge for late cancellations",
            "Non-refundable advance for peak season"
        ],
        nearbyAttractions: [
            "Ram Ghat - 50m",
            "Sandipani Ashram - 800m",
            "Mangalnath Temple - 1.5km",
            "Mahakaleshwar Temple - 2km"
        ],
    },
    {
        id: 7,
        title: "Shivam Executive Inn",
        slug: "shivam-executive-inn-6",
        subtitle: "Business-Class Hotel Near Railway Station",
        heroImage: hotel_7,
        rating: 5,
        reviews: 20,
        hotelFor: "ujjain",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Opposite Railway Station, Ujjain",
        currentPrice: "4,200/-",
        originalPrice: "5,000/-",
        saving: "800/-",
        overview: "Modern hotel offering convenience for business travelers and pilgrims alike. Centrally located with excellent transport connectivity.",
        highlights: [
            "5-minute walk from railway station",
            "24-hour coffee shop",
            "Conference facilities",
            "Travel desk with car rentals",
            "Express check-in/check-out",
            "Power backup",
            "Free station transfers"
        ],
        roomTypes: [
            {
                name: "Standard Room",
                description: "Compact comfortable room with work desk",
                size: "180 sq ft",
                occupancy: "2 Adults",
                price: "₹4,200",
                amenities: ["AC", "TV", "WiFi"]
            },
            {
                name: "Executive Room",
                description: "Spacious room with ergonomic workspace",
                size: "250 sq ft",
                occupancy: "2 Adults",
                price: "₹5,800",
                amenities: ["Work desk", "Tea maker", "Electronic safe"]
            },
            {
                name: "Executive Suite",
                description: "Separate living and bedroom areas",
                size: "400 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹7,500",
                amenities: ["Mini fridge", "Bathrobe", "Premium toiletries"]
            }
        ],
        amenities: [
            "Business center",
            "ATM in lobby",
            "Doctor on call",
            "Laundry service",
            "Elevator access",
            "CCTV security"
        ],
        diningOptions: [
            {
                name: "24/7 Coffee Shop",
                type: "Round-the-clock",
                description: "Serves snacks, beverages and quick meals anytime"
            },
            {
                name: "The Grand Thali",
                type: "Lunch & Dinner",
                description: "Specializes in regional thali meals"
            }
        ],
        specialServices: [
            "Early breakfast for temple-goers",
            "Train ticket assistance",
            "Photocopy/printing services",
            "Meeting room rentals"
        ],
        policies: [
            "Check-in: 12 PM | Check-out: 10 AM",
            "Early arrival/late departure charges apply",
            "Extra bed ₹800 per night"
        ],
        cancellationPolicy: [
            "Free cancellation until 24 hours before arrival",
            "Full charge for same-day cancellations",
            "No refund for no-shows",
        ],
        nearbyAttractions: [
            "Ujjain Railway Station - 200m",
            "Mahakaleshwar Temple - 3km",
            "Kal Bhairav Temple - 2.5km",
            "City Bus Stand - 1km"
        ],
    },
    {
        id: 8,
        title: "Omkar Heritage Haveli",
        slug: "omkar-heritage-haveli-7",
        subtitle: "18th Century Restored Mansion with Modern Amenities",
        heroImage: hotel_8,
        rating: 4.8,
        reviews: 20,
        hotelFor: "ujjain",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Old City, Ujjain",
        currentPrice: "12,500/-",
        originalPrice: "15,000/-",
        saving: "2,500/-",
        overview: "Step back in time at this meticulously restored haveli offering royal treatment with its courtyards, frescoes and antique decor while providing contemporary comforts.",
        highlights: [
            "300-year-old heritage structure",
            "Hand-painted traditional frescoes",
            "Private temple within property",
            "Royal treatment with butler service",
            "Heritage walks of old Ujjain",
            "Traditional puppet shows",
            "In-house astrologer"
        ],
        roomTypes: [
            {
                name: "Rajwada Room",
                description: "Period-style room with courtyard view",
                size: "300 sq ft",
                occupancy: "2 Adults",
                price: "₹12,500",
                amenities: ["Four-poster bed", "Antique furniture", "Modern bathroom"]
            },
            {
                name: "Sheesh Mahal Suite",
                description: "Mirror-work suite with private jharokha",
                size: "500 sq ft",
                occupancy: "2 Adults",
                price: "₹18,000",
                amenities: ["Sitting area", "Vintage decor", "Premium amenities"]
            },
            {
                name: "Royal Courtyard Suite",
                description: "Two-bedroom suite surrounding private courtyard",
                size: "900 sq ft",
                occupancy: "4 Adults",
                price: "₹25,000",
                amenities: ["Private dining", "Personal butler", "Jacuzzi"]
            }
        ],
        amenities: [
            "Swimming pool",
            "Ayurvedic spa",
            "Library with rare manuscripts",
            "Cultural performances",
            "Cooking classes",
            "Guided heritage tours"
        ],
        diningOptions: [
            {
                name: "Darbar - Royal Dining",
                type: "Multi-cuisine",
                description: "Experience royal recipes from Malwa region"
            },
            {
                name: "Chowk - Courtyard Dining",
                type: "Private meals",
                description: "Personalized dining under the stars"
            }
        ],
        specialServices: [
            "Private aarti arrangements",
            "Costume photoshoots",
            "Turmeric bath rituals",
            "Palanquin rides",
            "Private chef experiences"
        ],
        policies: [
            "Check-in: 3 PM | Check-out: 12 PM",
            "Children above 12 only",
            "No outside food allowed",
            "Traditional dress encouraged"
        ],
        cancellationPolicy: [
            "15+ days before: Full refund",
            "7-14 days before: 50% refund",
            "0-6 days before: No refund"
        ],
        nearbyAttractions: [
            "Mahakaleshwar Temple - 1.5km",
            "Vedh Shala Observatory - 2km",
            "Bhartrihari Caves - 3km",
            "Gopal Mandir - 1km"
        ],
    },
    {
        id: 9,
        title: "Grand Mahakal Heritage",
        slug: "grand-mahakal-heritage-8",
        subtitle: "Luxury Stay Just 200m from Mahakaleshwar Temple",
        heroImage: hotel_1,
        rating: 3.9,
        reviews: 20,
        hotelFor: "ujjain",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Near Mahakal Temple Gate No. 3",
        currentPrice: "8,499/-",
        originalPrice: "10,999/-",
        saving: "2,500/-",
        overview: "Experience divine luxury at our heritage property blending modern comforts with traditional architecture. Perfect for pilgrims seeking proximity to the temple with premium amenities.",
        highlights: [
            "200m walking distance from Mahakal Temple",
            "Rooftop restaurant with temple view",
            "24/7 hot water & generator backup",
            "Ayurvedic massage center",
            "Traditional havan kund for private rituals",
            "Free guided temple tours",
            "Panditji available for daily pujas"
        ],
        roomTypes: [
            {
                name: "Deluxe Room",
                description: "Cozy room with temple-facing window, AC, and attached bathroom",
                size: "220 sq ft",
                occupancy: "2 Adults",
                price: "₹8,499",
                amenities: ["Free WiFi", "TV", "Minibar", "Toiletries"]
            },
            {
                name: "Executive Suite",
                description: "Spacious suite with separate living area and temple view balcony",
                size: "450 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹12,999",
                amenities: ["Free WiFi", "LED TV", "Minibar", "Bathrobe", "Slippers"]
            },
            {
                name: "Maharaja Suite",
                description: "Luxurious heritage-style suite with antique furniture and private pooja room",
                size: "650 sq ft",
                occupancy: "2 Adults + 2 Children",
                price: "₹15,999",
                amenities: ["Butler service", "Jacuzzi", "Personal safe", "Premium toiletries"]
            }
        ],
        amenities: [
            "24-hour front desk",
            "Free parking",
            "Airport transfers (chargeable)",
            "Business center",
            "Doctor on call",
            "Laundry service",
            "Luggage storage",
            "Multilingual staff"
        ],
        diningOptions: [
            {
                name: "Nectar - Multi-cuisine Restaurant",
                type: "Breakfast, Lunch, Dinner",
                description: "Serves traditional Satvik meals along with continental options"
            },
            {
                name: "Amrit - Rooftop Café",
                type: "Beverages & Snacks",
                description: "Open-air café with panoramic views of Mahakal Temple"
            },
            {
                name: "Room Service",
                type: "24-hour",
                description: "Extended menu available round the clock"
            }
        ],
        specialServices: [
            "VIP temple darshan arrangements",
            "Rudrabhishek pooja booking",
            "Guided heritage walks",
            "Yoga sessions at sunrise",
            "Cultural performances on weekends"
        ],
        policies: [
            "Check-in: 12 PM | Check-out: 10 AM",
            "Early check-in/late check-out subject to availability",
            "Children below 5 stay free",
            "Photo ID mandatory at check-in",
            "No pets allowed"
        ],
        cancellationPolicy: [
            "Free cancellation until 48 hours before arrival",
            "50% charged for late cancellations",
            "No refund for no-shows"
        ],
        nearbyAttractions: [
            "Mahakaleshwar Temple - 200m",
            "Harsiddhi Mata Temple - 1km",
            "Ram Ghat - 1.2km",
            "Kal Bhairav Temple - 2km",
            "Vikram Kirti Mandir Museum - 3km"
        ],
    },
    {
        id: 10,
        title: "Rudraksh Riverside Retreat",
        slug: "rudraksh-riverside-retreat-9",
        subtitle: "Premium Property on Kshipra River Banks",
        heroImage: hotel_2,
        rating: 5,
        reviews: 20,
        hotelFor: "ujjain",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Ram Ghat Road, Ujjain",
        currentPrice: "6,999/-",
        originalPrice: "8,500/-",
        saving: "1,501/-",
        overview: "A serene riverside property offering spiritual ambiance with modern luxuries. Ideal for those seeking peaceful contemplation after temple visits.",
        highlights: [
            "Private ghat access for morning rituals",
            "Ayurvedic spa with traditional treatments",
            "Organic farm-to-table dining",
            "Meditation garden with yoga shala",
            "Cultural programs every evening",
            "Boat ride arrangements",
            "Eco-friendly practices"
        ],
        roomTypes: [
            {
                name: "Garden View Room",
                description: "Ground floor room opening to herbal gardens",
                size: "250 sq ft",
                occupancy: "2 Adults",
                price: "₹6,999",
                amenities: ["Fan", "TV", "Attached bathroom"]
            },
            {
                name: "River View Room",
                description: "First floor room with balcony overlooking Kshipra river",
                size: "280 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹9,500",
                amenities: ["AC", "TV", "Minibar", "Kettle"]
            },
            {
                name: "Heritage Suite",
                description: "Traditional courtyard-style suite with private sit-out",
                size: "500 sq ft",
                occupancy: "2 Adults + 2 Children",
                price: "₹12,000",
                amenities: ["Living area", "Dining space", "Butler service"]
            }
        ],
        amenities: [
            "Free bicycle rentals",
            "24-hour security",
            "Travel desk",
            "Currency exchange",
            "Gift shop",
            "Free WiFi",
            "Power backup"
        ],
        diningOptions: [
            {
                name: "Annapurna - Pure Vegetarian Restaurant",
                type: "All-day dining",
                description: "Specializes in local Malwa cuisine and Jain food options"
            },
            {
                name: "Ghat-side Tea Lounge",
                type: "Sunrise to Sunset",
                description: "Serves herbal teas and light snacks by the river"
            }
        ],
        specialServices: [
            "Sunrise boat pooja arrangements",
            "Priest services for homas",
            "Astrology consultations",
            "Organic farming workshops"
        ],
        policies: [
            "Check-in: 2 PM | Check-out: 11 AM",
            "No smoking in rooms",
            "Quiet hours after 10 PM",
            "Wedding groups not accepted"
        ],
        cancellationPolicy: [
            "Free cancellation until 72 hours before arrival",
            "1 night charge for late cancellations",
            "Non-refundable advance for peak season"
        ],
        nearbyAttractions: [
            "Ram Ghat - 50m",
            "Sandipani Ashram - 800m",
            "Mangalnath Temple - 1.5km",
            "Mahakaleshwar Temple - 2km"
        ],
    },
    {
        id: 11,
        title: "Shivam Executive Inn",
        slug: "shivam-executive-inn-10",
        subtitle: "Business-Class Hotel Near Railway Station",
        heroImage: hotel_3,
        rating: 4.2,
        reviews: 20,
        hotelFor: "mp",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Opposite Railway Station, Ujjain",
        currentPrice: "4,200/-",
        originalPrice: "5,000/-",
        saving: "800/-",
        overview: "Modern hotel offering convenience for business travelers and pilgrims alike. Centrally located with excellent transport connectivity.",
        highlights: [
            "5-minute walk from railway station",
            "24-hour coffee shop",
            "Conference facilities",
            "Travel desk with car rentals",
            "Express check-in/check-out",
            "Power backup",
            "Free station transfers"
        ],
        roomTypes: [
            {
                name: "Standard Room",
                description: "Compact comfortable room with work desk",
                size: "180 sq ft",
                occupancy: "2 Adults",
                price: "₹4,200",
                amenities: ["AC", "TV", "WiFi"]
            },
            {
                name: "Executive Room",
                description: "Spacious room with ergonomic workspace",
                size: "250 sq ft",
                occupancy: "2 Adults",
                price: "₹5,800",
                amenities: ["Work desk", "Tea maker", "Electronic safe"]
            },
            {
                name: "Executive Suite",
                description: "Separate living and bedroom areas",
                size: "400 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹7,500",
                amenities: ["Mini fridge", "Bathrobe", "Premium toiletries"]
            }
        ],
        amenities: [
            "Business center",
            "ATM in lobby",
            "Doctor on call",
            "Laundry service",
            "Elevator access",
            "CCTV security"
        ],
        diningOptions: [
            {
                name: "24/7 Coffee Shop",
                type: "Round-the-clock",
                description: "Serves snacks, beverages and quick meals anytime"
            },
            {
                name: "The Grand Thali",
                type: "Lunch & Dinner",
                description: "Specializes in regional thali meals"
            }
        ],
        specialServices: [
            "Early breakfast for temple-goers",
            "Train ticket assistance",
            "Photocopy/printing services",
            "Meeting room rentals"
        ],
        policies: [
            "Check-in: 12 PM | Check-out: 10 AM",
            "Early arrival/late departure charges apply",
            "Extra bed ₹800 per night"
        ],
        cancellationPolicy: [
            "Free cancellation until 24 hours before arrival",
            "Full charge for same-day cancellations",
            "No refund for no-shows"
        ],
        nearbyAttractions: [
            "Ujjain Railway Station - 200m",
            "Mahakaleshwar Temple - 3km",
            "Kal Bhairav Temple - 2.5km",
            "City Bus Stand - 1km"
        ],
    },
    {
        id: 12,
        title: "Omkar Heritage Haveli",
        slug: "omkar-heritage-haveli-11",
        subtitle: "18th Century Restored Mansion with Modern Amenities",
        heroImage: hotel_4,
        rating: 3.8,
        reviews: 20,
        hotelFor: "mp",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Old City, Ujjain",
        currentPrice: "12,500/-",
        originalPrice: "15,000/-",
        saving: "2,500/-",
        overview: "Step back in time at this meticulously restored haveli offering royal treatment with its courtyards, frescoes and antique decor while providing contemporary comforts.",
        highlights: [
            "300-year-old heritage structure",
            "Hand-painted traditional frescoes",
            "Private temple within property",
            "Royal treatment with butler service",
            "Heritage walks of old Ujjain",
            "Traditional puppet shows",
            "In-house astrologer"
        ],
        roomTypes: [
            {
                name: "Rajwada Room",
                description: "Period-style room with courtyard view",
                size: "300 sq ft",
                occupancy: "2 Adults",
                price: "₹12,500",
                amenities: ["Four-poster bed", "Antique furniture", "Modern bathroom"]
            },
            {
                name: "Sheesh Mahal Suite",
                description: "Mirror-work suite with private jharokha",
                size: "500 sq ft",
                occupancy: "2 Adults",
                price: "₹18,000",
                amenities: ["Sitting area", "Vintage decor", "Premium amenities"]
            },
            {
                name: "Royal Courtyard Suite",
                description: "Two-bedroom suite surrounding private courtyard",
                size: "900 sq ft",
                occupancy: "4 Adults",
                price: "₹25,000",
                amenities: ["Private dining", "Personal butler", "Jacuzzi"]
            }
        ],
        amenities: [
            "Swimming pool",
            "Ayurvedic spa",
            "Library with rare manuscripts",
            "Cultural performances",
            "Cooking classes",
            "Guided heritage tours"
        ],
        diningOptions: [
            {
                name: "Darbar - Royal Dining",
                type: "Multi-cuisine",
                description: "Experience royal recipes from Malwa region"
            },
            {
                name: "Chowk - Courtyard Dining",
                type: "Private meals",
                description: "Personalized dining under the stars"
            }
        ],
        specialServices: [
            "Private aarti arrangements",
            "Costume photoshoots",
            "Turmeric bath rituals",
            "Palanquin rides",
            "Private chef experiences"
        ],
        policies: [
            "Check-in: 3 PM | Check-out: 12 PM",
            "Children above 12 only",
            "No outside food allowed",
            "Traditional dress encouraged"
        ],
        cancellationPolicy: [
            "15+ days before: Full refund",
            "7-14 days before: 50% refund",
            "0-6 days before: No refund"
        ],
        nearbyAttractions: [
            "Mahakaleshwar Temple - 1.5km",
            "Vedh Shala Observatory - 2km",
            "Bhartrihari Caves - 3km",
            "Gopal Mandir - 1km"
        ],
    },
    {
        id: 13,
        title: "Grand Mahakal Heritage",
        slug: "grand-mahakal-heritage-12",
        subtitle: "Luxury Stay Just 200m from Mahakaleshwar Temple",
        heroImage: hotel_5,
        rating: 5,
        reviews: 20,
        hotelFor: "mp",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Near Mahakal Temple Gate No. 3",
        currentPrice: "8,499/-",
        originalPrice: "10,999/-",
        saving: "2,500/-",
        overview: "Experience divine luxury at our heritage property blending modern comforts with traditional architecture. Perfect for pilgrims seeking proximity to the temple with premium amenities.",
        highlights: [
            "200m walking distance from Mahakal Temple",
            "Rooftop restaurant with temple view",
            "24/7 hot water & generator backup",
            "Ayurvedic massage center",
            "Traditional havan kund for private rituals",
            "Free guided temple tours",
            "Panditji available for daily pujas"
        ],
        roomTypes: [
            {
                name: "Deluxe Room",
                description: "Cozy room with temple-facing window, AC, and attached bathroom",
                size: "220 sq ft",
                occupancy: "2 Adults",
                price: "₹8,499",
                amenities: ["Free WiFi", "TV", "Minibar", "Toiletries"]
            },
            {
                name: "Executive Suite",
                description: "Spacious suite with separate living area and temple view balcony",
                size: "450 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹12,999",
                amenities: ["Free WiFi", "LED TV", "Minibar", "Bathrobe", "Slippers"]
            },
            {
                name: "Maharaja Suite",
                description: "Luxurious heritage-style suite with antique furniture and private pooja room",
                size: "650 sq ft",
                occupancy: "2 Adults + 2 Children",
                price: "₹15,999",
                amenities: ["Butler service", "Jacuzzi", "Personal safe", "Premium toiletries"]
            }
        ],
        amenities: [
            "24-hour front desk",
            "Free parking",
            "Airport transfers (chargeable)",
            "Business center",
            "Doctor on call",
            "Laundry service",
            "Luggage storage",
            "Multilingual staff"
        ],
        diningOptions: [
            {
                name: "Nectar - Multi-cuisine Restaurant",
                type: "Breakfast, Lunch, Dinner",
                description: "Serves traditional Satvik meals along with continental options"
            },
            {
                name: "Amrit - Rooftop Café",
                type: "Beverages & Snacks",
                description: "Open-air café with panoramic views of Mahakal Temple"
            },
            {
                name: "Room Service",
                type: "24-hour",
                description: "Extended menu available round the clock"
            }
        ],
        specialServices: [
            "VIP temple darshan arrangements",
            "Rudrabhishek pooja booking",
            "Guided heritage walks",
            "Yoga sessions at sunrise",
            "Cultural performances on weekends"
        ],
        policies: [
            "Check-in: 12 PM | Check-out: 10 AM",
            "Early check-in/late check-out subject to availability",
            "Children below 5 stay free",
            "Photo ID mandatory at check-in",
            "No pets allowed"
        ],
        cancellationPolicy: [
            "Free cancellation until 48 hours before arrival",
            "50% charged for late cancellations",
            "No refund for no-shows"
        ],
        nearbyAttractions: [
            "Mahakaleshwar Temple - 200m",
            "Harsiddhi Mata Temple - 1km",
            "Ram Ghat - 1.2km",
            "Kal Bhairav Temple - 2km",
            "Vikram Kirti Mandir Museum - 3km"
        ],
    },
    {
        id: 14,
        title: "Rudraksh Riverside Retreat",
        slug: "rudraksh-riverside-retreat-13",
        subtitle: "Premium Property on Kshipra River Banks",
        heroImage: hotel_6,
        rating: 4.7,
        reviews: 20,
        hotelFor: "mp",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Ram Ghat Road, Ujjain",
        currentPrice: "6,999/-",
        originalPrice: "8,500/-",
        saving: "1,501/-",
        overview: "A serene riverside property offering spiritual ambiance with modern luxuries. Ideal for those seeking peaceful contemplation after temple visits.",
        highlights: [
            "Private ghat access for morning rituals",
            "Ayurvedic spa with traditional treatments",
            "Organic farm-to-table dining",
            "Meditation garden with yoga shala",
            "Cultural programs every evening",
            "Boat ride arrangements",
            "Eco-friendly practices"
        ],
        roomTypes: [
            {
                name: "Garden View Room",
                description: "Ground floor room opening to herbal gardens",
                size: "250 sq ft",
                occupancy: "2 Adults",
                price: "₹6,999",
                amenities: ["Fan", "TV", "Attached bathroom"]
            },
            {
                name: "River View Room",
                description: "First floor room with balcony overlooking Kshipra river",
                size: "280 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹9,500",
                amenities: ["AC", "TV", "Minibar", "Kettle"]
            },
            {
                name: "Heritage Suite",
                description: "Traditional courtyard-style suite with private sit-out",
                size: "500 sq ft",
                occupancy: "2 Adults + 2 Children",
                price: "₹12,000",
                amenities: ["Living area", "Dining space", "Butler service"]
            }
        ],
        amenities: [
            "Free bicycle rentals",
            "24-hour security",
            "Travel desk",
            "Currency exchange",
            "Gift shop",
            "Free WiFi",
            "Power backup"
        ],
        diningOptions: [
            {
                name: "Annapurna - Pure Vegetarian Restaurant",
                type: "All-day dining",
                description: "Specializes in local Malwa cuisine and Jain food options"
            },
            {
                name: "Ghat-side Tea Lounge",
                type: "Sunrise to Sunset",
                description: "Serves herbal teas and light snacks by the river"
            }
        ],
        specialServices: [
            "Sunrise boat pooja arrangements",
            "Priest services for homas",
            "Astrology consultations",
            "Organic farming workshops"
        ],
        policies: [
            "Check-in: 2 PM | Check-out: 11 AM",
            "No smoking in rooms",
            "Quiet hours after 10 PM",
            "Wedding groups not accepted"
        ],
        cancellationPolicy: [
            "Free cancellation until 72 hours before arrival",
            "1 night charge for late cancellations",
            "Non-refundable advance for peak season"
        ],
        nearbyAttractions: [
            "Ram Ghat - 50m",
            "Sandipani Ashram - 800m",
            "Mangalnath Temple - 1.5km",
            "Mahakaleshwar Temple - 2km"
        ],
    },
    {
        id: 15,
        title: "Shivam Executive Inn",
        slug: "shivam-executive-inn-14",
        subtitle: "Business-Class Hotel Near Railway Station",
        heroImage: hotel_7,
        rating: 3,
        reviews: 20,
        hotelFor: "mp",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Opposite Railway Station, Ujjain",
        currentPrice: "4,200/-",
        originalPrice: "5,000/-",
        saving: "800/-",
        overview: "Modern hotel offering convenience for business travelers and pilgrims alike. Centrally located with excellent transport connectivity.",
        highlights: [
            "5-minute walk from railway station",
            "24-hour coffee shop",
            "Conference facilities",
            "Travel desk with car rentals",
            "Express check-in/check-out",
            "Power backup",
            "Free station transfers"
        ],
        roomTypes: [
            {
                name: "Standard Room",
                description: "Compact comfortable room with work desk",
                size: "180 sq ft",
                occupancy: "2 Adults",
                price: "₹4,200",
                amenities: ["AC", "TV", "WiFi"]
            },
            {
                name: "Executive Room",
                description: "Spacious room with ergonomic workspace",
                size: "250 sq ft",
                occupancy: "2 Adults",
                price: "₹5,800",
                amenities: ["Work desk", "Tea maker", "Electronic safe"]
            },
            {
                name: "Executive Suite",
                description: "Separate living and bedroom areas",
                size: "400 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹7,500",
                amenities: ["Mini fridge", "Bathrobe", "Premium toiletries"]
            }
        ],
        amenities: [
            "Business center",
            "ATM in lobby",
            "Doctor on call",
            "Laundry service",
            "Elevator access",
            "CCTV security"
        ],
        diningOptions: [
            {
                name: "24/7 Coffee Shop",
                type: "Round-the-clock",
                description: "Serves snacks, beverages and quick meals anytime"
            },
            {
                name: "The Grand Thali",
                type: "Lunch & Dinner",
                description: "Specializes in regional thali meals"
            }
        ],
        specialServices: [
            "Early breakfast for temple-goers",
            "Train ticket assistance",
            "Photocopy/printing services",
            "Meeting room rentals"
        ],
        policies: [
            "Check-in: 12 PM | Check-out: 10 AM",
            "Early arrival/late departure charges apply",
            "Extra bed ₹800 per night"
        ],
        cancellationPolicy: [
            "Free cancellation until 24 hours before arrival",
            "Full charge for same-day cancellations",
            "No refund for no-shows"
        ],
        nearbyAttractions: [
            "Ujjain Railway Station - 200m",
            "Mahakaleshwar Temple - 3km",
            "Kal Bhairav Temple - 2.5km",
            "City Bus Stand - 1km"
        ],
    },
    {
        id: 16,
        title: "Omkar Heritage Haveli",
        slug: "omkar-heritage-haveli-15",
        subtitle: "18th Century Restored Mansion with Modern Amenities",
        heroImage: hotel_8,
        rating: 5,
        reviews: 20,
        hotelFor: "mp",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Old City, Ujjain",
        currentPrice: "12,500/-",
        originalPrice: "15,000/-",
        saving: "2,500/-",
        overview: "Step back in time at this meticulously restored haveli offering royal treatment with its courtyards, frescoes and antique decor while providing contemporary comforts.",
        highlights: [
            "300-year-old heritage structure",
            "Hand-painted traditional frescoes",
            "Private temple within property",
            "Royal treatment with butler service",
            "Heritage walks of old Ujjain",
            "Traditional puppet shows",
            "In-house astrologer"
        ],
        roomTypes: [
            {
                name: "Rajwada Room",
                description: "Period-style room with courtyard view",
                size: "300 sq ft",
                occupancy: "2 Adults",
                price: "₹12,500",
                amenities: ["Four-poster bed", "Antique furniture", "Modern bathroom"]
            },
            {
                name: "Sheesh Mahal Suite",
                description: "Mirror-work suite with private jharokha",
                size: "500 sq ft",
                occupancy: "2 Adults",
                price: "₹18,000",
                amenities: ["Sitting area", "Vintage decor", "Premium amenities"]
            },
            {
                name: "Royal Courtyard Suite",
                description: "Two-bedroom suite surrounding private courtyard",
                size: "900 sq ft",
                occupancy: "4 Adults",
                price: "₹25,000",
                amenities: ["Private dining", "Personal butler", "Jacuzzi"]
            }
        ],
        amenities: [
            "Swimming pool",
            "Ayurvedic spa",
            "Library with rare manuscripts",
            "Cultural performances",
            "Cooking classes",
            "Guided heritage tours"
        ],
        diningOptions: [
            {
                name: "Darbar - Royal Dining",
                type: "Multi-cuisine",
                description: "Experience royal recipes from Malwa region"
            },
            {
                name: "Chowk - Courtyard Dining",
                type: "Private meals",
                description: "Personalized dining under the stars"
            }
        ],
        specialServices: [
            "Private aarti arrangements",
            "Costume photoshoots",
            "Turmeric bath rituals",
            "Palanquin rides",
            "Private chef experiences"
        ],
        policies: [
            "Check-in: 3 PM | Check-out: 12 PM",
            "Children above 12 only",
            "No outside food allowed",
            "Traditional dress encouraged"
        ],
        cancellationPolicy: [
            "15+ days before: Full refund",
            "7-14 days before: 50% refund",
            "0-6 days before: No refund"
        ],
        nearbyAttractions: [
            "Mahakaleshwar Temple - 1.5km",
            "Vedh Shala Observatory - 2km",
            "Bhartrihari Caves - 3km",
            "Gopal Mandir - 1km"
        ],
    },
    {
        id: 17,
        title: "Grand Mahakal Heritage",
        slug: "grand-mahakal-heritage-16",
        subtitle: "Luxury Stay Just 200m from Mahakaleshwar Temple",
        heroImage: hotel_1,
        rating: 4,
        reviews: 20,
        hotelFor: "mp",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Near Mahakal Temple Gate No. 3",
        currentPrice: "8,499/-",
        originalPrice: "10,999/-",
        saving: "2,500/-",
        overview: "Experience divine luxury at our heritage property blending modern comforts with traditional architecture. Perfect for pilgrims seeking proximity to the temple with premium amenities.",
        highlights: [
            "200m walking distance from Mahakal Temple",
            "Rooftop restaurant with temple view",
            "24/7 hot water & generator backup",
            "Ayurvedic massage center",
            "Traditional havan kund for private rituals",
            "Free guided temple tours",
            "Panditji available for daily pujas"
        ],
        roomTypes: [
            {
                name: "Deluxe Room",
                description: "Cozy room with temple-facing window, AC, and attached bathroom",
                size: "220 sq ft",
                occupancy: "2 Adults",
                price: "₹8,499",
                amenities: ["Free WiFi", "TV", "Minibar", "Toiletries"]
            },
            {
                name: "Executive Suite",
                description: "Spacious suite with separate living area and temple view balcony",
                size: "450 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹12,999",
                amenities: ["Free WiFi", "LED TV", "Minibar", "Bathrobe", "Slippers"]
            },
            {
                name: "Maharaja Suite",
                description: "Luxurious heritage-style suite with antique furniture and private pooja room",
                size: "650 sq ft",
                occupancy: "2 Adults + 2 Children",
                price: "₹15,999",
                amenities: ["Butler service", "Jacuzzi", "Personal safe", "Premium toiletries"]
            }
        ],
        amenities: [
            "24-hour front desk",
            "Free parking",
            "Airport transfers (chargeable)",
            "Business center",
            "Doctor on call",
            "Laundry service",
            "Luggage storage",
            "Multilingual staff"
        ],
        diningOptions: [
            {
                name: "Nectar - Multi-cuisine Restaurant",
                type: "Breakfast, Lunch, Dinner",
                description: "Serves traditional Satvik meals along with continental options"
            },
            {
                name: "Amrit - Rooftop Café",
                type: "Beverages & Snacks",
                description: "Open-air café with panoramic views of Mahakal Temple"
            },
            {
                name: "Room Service",
                type: "24-hour",
                description: "Extended menu available round the clock"
            }
        ],
        specialServices: [
            "VIP temple darshan arrangements",
            "Rudrabhishek pooja booking",
            "Guided heritage walks",
            "Yoga sessions at sunrise",
            "Cultural performances on weekends"
        ],
        policies: [
            "Check-in: 12 PM | Check-out: 10 AM",
            "Early check-in/late check-out subject to availability",
            "Children below 5 stay free",
            "Photo ID mandatory at check-in",
            "No pets allowed"
        ],
        cancellationPolicy: [
            "Free cancellation until 48 hours before arrival",
            "50% charged for late cancellations",
            "No refund for no-shows"
        ],
        nearbyAttractions: [
            "Mahakaleshwar Temple - 200m",
            "Harsiddhi Mata Temple - 1km",
            "Ram Ghat - 1.2km",
            "Kal Bhairav Temple - 2km",
            "Vikram Kirti Mandir Museum - 3km"
        ],
    },
    {
        id: 18,
        title: "Rudraksh Riverside Retreat",
        slug: "rudraksh-riverside-retreat-17",
        subtitle: "Premium Property on Kshipra River Banks",
        heroImage: hotel_2,
        rating: 3,
        reviews: 20,
        hotelFor: "mp",
        duration: "2 Days & 1 Night",
        guests: "Up to 4 Persons",
        location: "Ram Ghat Road, Ujjain",
        currentPrice: "6,999/-",
        originalPrice: "8,500/-",
        saving: "1,501/-",
        overview: "A serene riverside property offering spiritual ambiance with modern luxuries. Ideal for those seeking peaceful contemplation after temple visits.",
        highlights: [
            "Private ghat access for morning rituals",
            "Ayurvedic spa with traditional treatments",
            "Organic farm-to-table dining",
            "Meditation garden with yoga shala",
            "Cultural programs every evening",
            "Boat ride arrangements",
            "Eco-friendly practices"
        ],
        roomTypes: [
            {
                name: "Garden View Room",
                description: "Ground floor room opening to herbal gardens",
                size: "250 sq ft",
                occupancy: "2 Adults",
                price: "₹6,999",
                amenities: ["Fan", "TV", "Attached bathroom"]
            },
            {
                name: "River View Room",
                description: "First floor room with balcony overlooking Kshipra river",
                size: "280 sq ft",
                occupancy: "2 Adults + 1 Child",
                price: "₹9,500",
                amenities: ["AC", "TV", "Minibar", "Kettle"]
            },
            {
                name: "Heritage Suite",
                description: "Traditional courtyard-style suite with private sit-out",
                size: "500 sq ft",
                occupancy: "2 Adults + 2 Children",
                price: "₹12,000",
                amenities: ["Living area", "Dining space", "Butler service"]
            }
        ],
        amenities: [
            "Free bicycle rentals",
            "24-hour security",
            "Travel desk",
            "Currency exchange",
            "Gift shop",
            "Free WiFi",
            "Power backup"
        ],
        diningOptions: [
            {
                name: "Annapurna - Pure Vegetarian Restaurant",
                type: "All-day dining",
                description: "Specializes in local Malwa cuisine and Jain food options"
            },
            {
                name: "Ghat-side Tea Lounge",
                type: "Sunrise to Sunset",
                description: "Serves herbal teas and light snacks by the river"
            }
        ],
        specialServices: [
            "Sunrise boat pooja arrangements",
            "Priest services for homas",
            "Astrology consultations",
            "Organic farming workshops"
        ],
        policies: [
            "Check-in: 2 PM | Check-out: 11 AM",
            "No smoking in rooms",
            "Quiet hours after 10 PM",
            "Wedding groups not accepted"
        ],
        cancellationPolicy: [
            "Free cancellation until 72 hours before arrival",
            "1 night charge for late cancellations",
            "Non-refundable advance for peak season"
        ],
        nearbyAttractions: [
            "Ram Ghat - 50m",
            "Sandipani Ashram - 800m",
            "Mangalnath Temple - 1.5km",
            "Mahakaleshwar Temple - 2km"
        ]
    },
];