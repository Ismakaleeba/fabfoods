export const WHATSAPP_PHONE = "250781050726";

export const WHATSAPP_TEMPLATES = {
    ORDER: "Hello Fab Foods! I would like to place an order.",
    CATERING: "Hello Fab Foods! I would like to inquire about your catering services.",
    EVENT: "Hello Fab Foods! I would like to book an event management service.",
    PROTOTYPE: "Hello Fab Foods! I'm interested in the Prototype Platform and upcoming events.",
    GENERAL: "Hello Fab Foods! I would like more information about your cafe and services.",
};

export const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (message: string) => {
    window.open(getWhatsAppLink(message), '_blank');
};
