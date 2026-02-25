/**
 * Shared navigation utilities.
 */

/** Smooth-scroll to the contact section */
export const scrollToContact = (): void => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

/** Smooth-scroll to any element by ID */
export const scrollToSection = (id: string): void => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};
