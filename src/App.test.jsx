import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';
import { BrowserRouter } from 'react-router'

it('should render app component correctly', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(screen.getByText('OUR APPROACH TO MUSIC')).toBeInTheDocument();
});

describe('Navigation test', () => {
    it('should navigate to the about page correctly', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )

        fireEvent.click(screen.getByText('Home'));
        expect(screen.getByText('OUR APPROACH TO MUSIC')).toBeInTheDocument();
    });

    it('should navigate to the about page correctly', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )

        fireEvent.click(screen.getByText('About'));
        expect(screen.getByText('ABOUT US')).toBeInTheDocument();
    });

    it('should navigate to the login page correctly', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByRole('link', { name: /login/i }));

        expect(screen.getByText('Log In')).toBeInTheDocument();
    });

    it('should navigate to the signup page correctly', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByRole('link', { name: /signup/i }));

        expect(
            screen.getByRole('heading', { level: 1, name: /sign\s*up/i })
        ).toBeInTheDocument();
    });

    it('should navigate to the records page correctly', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )

        fireEvent.click(screen.getByText('Records'));

        expect(
            screen.getByRole('heading', { level: 1, name: /all\s*records\s*\(120\)/i })
        ).toBeInTheDocument();
    });

    it('should navigate to the collections page correctly', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )

        fireEvent.click(screen.getByText('Collections'));

        expect(screen.getByRole('heading', { level: 1, name: "Collections" })).toBeInTheDocument();
    })

});

