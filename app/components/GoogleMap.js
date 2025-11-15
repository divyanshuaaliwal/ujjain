"use client";

export default function GoogleMap() {
    return (
        <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Mahakaleshwar%20Temple,%20Ujjain&t=&z=15&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0, width: "100%", height: "300px" }}
            allowFullScreen
            loading="lazy"
        ></iframe>
    );
}
