import React, { useState } from 'react';

const BookingDemo = () => {
    const [formData, setFormData] = useState({
        name: '',
        customerType: 'Regular',
        bookingType: 'Service Inquiry',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppNotify = (e) => {
        e.preventDefault();

        // Construct the WhatsApp message
        const phoneNumber = "918610825251"; // Your number
        const text = `*New Booking Request*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Customer Type:* ${formData.customerType}%0A` +
            `*Booking:* ${formData.bookingType}%0A` +
            `*Details:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="booking-demo" className="booking-demo">
            <div className="container">
                <div className="section-header">
                    <h2>Booking Demo (WA Notify)</h2>
                    <p>This demo shows how you can receive notifications directly on your WhatsApp.</p>
                    <div className="underline"></div>
                </div>

                <div className="booking-card glass">
                    <form onSubmit={handleWhatsAppNotify} className="booking-form">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Customer Type</label>
                                <select name="customerType" value={formData.customerType} onChange={handleChange}>
                                    <option value="Regular">Regular</option>
                                    <option value="Premium">Premium</option>
                                    <option value="Business">Business</option>
                                    <option value="New Lead">New Lead</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Booking Type</label>
                                <select name="bookingType" value={formData.bookingType} onChange={handleChange}>
                                    <option value="Consultation">Consultation</option>
                                    <option value="Full Project">Full Project</option>
                                    <option value="Maintenance">Maintenance</option>
                                    <option value="Urgent Fix">Urgent Fix</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Additional Details</label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="What do you need help with?"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            <svg
                                style={{ marginRight: '10px', width: '24px', height: '24px' }}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.63 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Send WhatsApp Notification
                        </button>
                    </form>

                    <div className="demo-note">
                        <p><strong>Dev Note:</strong> Clicking the button will open WhatsApp with a pre-filled message addressed to +91 8610825251.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingDemo;
