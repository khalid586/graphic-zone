import { useState, useEffect } from 'react';

export const useLogoLoader = () => {
    const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);

    useEffect(() => {
        const loadLogo = async () => {
            try {
                const response = await fetch('/Logo.png');
                const blob = await response.blob();
                const reader = new FileReader();
                reader.onload = () => setLogoDataUrl(reader.result as string);
                reader.readAsDataURL(blob);
            } catch (error) {
                // Logo not found, will use text fallback
                setLogoDataUrl(null);
            }
        };

        loadLogo();
    }, []);

    return logoDataUrl;
};