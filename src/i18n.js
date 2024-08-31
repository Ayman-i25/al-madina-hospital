// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from './locale/en.json';
import arabic from './locale/ar.json';

// Initialize i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: english
            },
            ar: {
                translation: arabic
            }
        },
        lng: "en", // Default language
        fallbackLng: "en", // Fallback language
        interpolation: {
            escapeValue: false 
        },
        react: {
            useSuspense: false, 
        }
    });

export default i18n;
