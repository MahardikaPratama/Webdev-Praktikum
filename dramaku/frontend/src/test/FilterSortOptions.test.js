import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import FilterSortOptions from "../components/FilterSortOptions";
import '@testing-library/jest-dom';

import { getAll as getGenres } from "../services/genre.service";
import { getAll as getAwards } from "../services/award.service";
import { getAll as getPlatforms } from "../services/platform.service";

jest.mock("../services/genre.service");
jest.mock("../services/award.service");
jest.mock("../services/platform.service");

const queryClient = new QueryClient();

const renderWithQueryClient = (ui) => {
    return render(
        <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );
};

describe("FilterSortOptions Komponen", () => {
    const mockOnFilterChange = jest.fn();
    const mockOnSortChange = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        getGenres.mockResolvedValue({
            data: [{ genre_name: "Action" }],
            totalEntries: 1,
        });
        getAwards.mockResolvedValue({ data: [{ award_name: "Best Actor" }] });
        getPlatforms.mockResolvedValue({ data: [{ platform_name: "Netflix" }] });
    });

    test("Render awal menampilkan pesan loading", () => {
        renderWithQueryClient(
            <FilterSortOptions
                onFilterChange={mockOnFilterChange}
                onSortChange={mockOnSortChange}
            />
        );

        expect(screen.getByText(/Loading data.../i)).toBeInTheDocument();
    });

    test("Menampilkan pesan error saat terjadi kesalahan fetch data", async () => {
        getGenres.mockRejectedValue(new Error("Failed to fetch genres"));

        renderWithQueryClient(
            <FilterSortOptions
                onFilterChange={mockOnFilterChange}
                onSortChange={mockOnSortChange}
            />
        );

        expect(
            await screen.findByText(/Error loading data/i)
        ).toBeInTheDocument();
    });

    test("Menampilkan data yang berhasil di-fetch", async () => {
        renderWithQueryClient(
            <FilterSortOptions
                onFilterChange={mockOnFilterChange}
                onSortChange={mockOnSortChange}
            />
        );

        expect(await screen.findByText(/Action/i)).toBeInTheDocument();
        expect(screen.getByText(/Netflix/i)).toBeInTheDocument();
    });

    test("Tombol filter menampilkan opsi filter", () => {
        renderWithQueryClient(
            <FilterSortOptions
                onFilterChange={mockOnFilterChange}
                onSortChange={mockOnSortChange}
            />
        );

        const filterButton = screen.getByRole("button", { name: /filter/i });
        fireEvent.click(filterButton);

        expect(screen.getByText(/Filtered by:/i)).toBeInTheDocument();
    });

    test("Tombol clear filter memanggil fungsi onFilterChange dan onSortChange", () => {
        renderWithQueryClient(
            <FilterSortOptions
                onFilterChange={mockOnFilterChange}
                onSortChange={mockOnSortChange}
            />
        );

        const clearFilterButton = screen.getByRole("button", {
            name: /clear filter/i,
        });
        fireEvent.click(clearFilterButton);

        expect(mockOnFilterChange).toHaveBeenCalled();
        expect(mockOnSortChange).toHaveBeenCalled();
    });
});
