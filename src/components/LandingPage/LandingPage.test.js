import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
    test('renders without errors', () => {
        render(<LandingPage />);
        // Ensure that the component renders without errors
        expect(screen.getByTestId('landing-page')).toBeInTheDocument();
    });

    test('displays the name "Juan Vazquez"', () => {
        render(<LandingPage />);
        // Ensure that the name "Juan Vazquez" is displayed on the page
        expect(screen.getByText('Juan Vazquez.')).toBeInTheDocument();
    });

    test('displays social media links', () => {
        render(<LandingPage />);

        // Ensure that the heading text is present
        const heading = screen.getByText(/Follow Me on social media/i);
        expect(heading).toBeInTheDocument();

        // Find social media links by their class name
        const socialMediaLinks = document.querySelectorAll('.social-icon');
        expect(socialMediaLinks).toHaveLength(6);

        // Replace these URLs with the actual URLs from your component
        const expectedUrls = [
            'https://www.instagram.com/juangunner4/',
            'https://twitter.com/Juangunner4/',
            'https://github.com/Juangunner4/',
            'https://www.youtube.com/@JuanJVG/',
            'https://www.linkedin.com/in/juan-vazquez1019/',
            'https://www.twitch.tv/juangunner4/',
        ];

        socialMediaLinks.forEach((link, index) => {
            expect(link).toHaveAttribute('href', expectedUrls[index]);
        });
    });


    // Add more tests for other sections and functionality as needed
});
