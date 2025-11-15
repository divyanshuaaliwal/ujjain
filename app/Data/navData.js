import { Alltours } from "./completeToursData";
import { allMPTours } from "./madhyaPradeshTourData";
import { pujaData } from "./poojaData";

export const menuLinks = [
    { title: "Home", path: "/", dropdown: false },
    { title: "Ujjain", path: "/ujjain", dropdown: false },
    { title: "Omkareshwar", path: "/omkareshwar", dropdown: false },
    { title: "Maheshwar", path: "/maheshwar", dropdown: false },
    { title: "Khajuraho", path: "/khajuraho", dropdown: false },
    {
        title: "Madhya Pradesh Tour",
        path: "/madhya-pradesh-tour",
        dropdown: true,

        dropdownItems: allMPTours.map( (tour) => (
            {
                title: tour.title,
                path: `/${tour.slug}`
            }
        ))
    },
    { title: "Hotels in MP", path: "/hotels-in-mp", dropdown: false },
    { title: "B2B Registration", path: "/b2b-registration", dropdown: false },
    { title: "Enquiry Form", path: "/enquiry-form", dropdown: false },
    { title: "Pay Online", path: "/pay-online", dropdown: false },
    {
        title: "Use Full Links",
        dropdown: true,
        dropdownItems: [
            { title: "Ujjain", path: "https://ujjain.nic.in/en/tourism/" },
            { title: "Omkareshwar", path: "https://www.shriomkareshwar.org/" },
            { title: "Maheshwar", path: "https://www.mptourism.com/destination-maheshwar.php" },
            { title: "Khajuraho", path: "https://www.mptourism.com/destination-khajuraho.php" },
            { title: "Madhya Pradesh Tourism", path: "https://www.mptourism.com" },
        ]
    },


]


export const navMenu = [
    {   
        title: "Helicopter Ride", 
        path: "/helicopter-ride", 
        dropdown: false, 
    },
    {
        title: "Tours",
        path: "/tours",
        dropdown: true,
        dropdownItems: [
            {
                title: "Ujjain Omkareshwar",
                path: "/tours/?destination=ujjain-omkareshwar",
                innerDropdown: true,
                innerDropdownItems: Alltours.filter( tour => tour.tourFor === "ujjain-omkareshwar").map( tour => (
                        {
                            innerTitle: tour.title,
                            path: `/${tour.slug}`,
                        }
                    )
                )
            },
            {
                title: "Ujjain Omkareshwar Maheshwar",
                path: "/tours/?destination=ujjain-omkareshwar-maheshwar",
                innerDropdown: true,
                innerDropdownItems: Alltours.filter( tour => 
                    tour.tourFor === "ujjain-omkareshwar-maheshwar").map( tour => (
                        {
                            innerTitle: tour.title,
                            path: `/${tour.slug}`,
                        }
                    )
                )
            },
        ],
    },
    {
        title: "Ujjain Hotels",
        path: "/hotels-in-ujjain",
        dropdown: true,
        dropdownItems: [
            { title: "3 Star Hotels in Ujjain", path: "/hotels-in-ujjain/?star=3" },
            { title: "4 Star Hotels in Ujjain", path: "/hotels-in-ujjain/?star=4" },
            { title: "5 Star Hotels in Ujjain", path: "/hotels-in-ujjain/?star=5" },
        ]
    },
    {
        title: "Taxi Booking",
        path: "/taxi-booking",
        dropdown: true,
        dropdownItems: [
            { title: "Car Booking", path: "/taxi-booking/cars" },
            { title: "Bus Booking", path: "/taxi-booking/buses" },
            { title: "Traveller Booking", path: "/taxi-booking/travellers" },
            { title: "Self Drive Booking / Car Rental", path: "/taxi-booking/self-drive" },
        ]
    },
    {
        title: "Registration",
        dropdown: true,
        dropdownItems: [
            { 
                title: "Bhasm Aarti Registration", path: "/bhasm-aarti-registration", 
            },
            { 
                title: "Abhishek Booking", path: "/abhishek-booking" 
            },
            {
                title: "Pooja Booking",
                path: "/pooja-booking",
                innerDropdown: true,
                innerDropdownItems: pujaData.map( pooja => (
                        {
                            innerTitle: pooja.title,
                            path: `/pooja-booking/${pooja.slug}`,
                        }
                    )
                )
            },
        ],
    },
    {
        title: "VIP Darshan",
        path: "/vip-darshan",
        dropdown: false,
    },
    
    {
        title: "Simhastha 2028",
        path: "/simahasta-2028-news",
        dropdown: false,
    },
    {
        title: "Celebrity Corner",
        dropdown: true,
        dropdownItems: [
            { title: "Luxury Cars", path: "/vip/luxury-cars" },
            { title: "Security Services", path: "/vip/security-services" },
        ]
    },
    {
        title: "Explore Ujjain",
        dropdown: true,
        dropdownItems : [
            {
                title: "Things to do",
                path: "/things-to-do",
                dropdown: false,
            },
            {
                title: "Near By Places",
                path: "/places-near-ujjain",
                dropdown: false,
            },
        ],  
    },

];
