package com.yoga.dev.Service;

import java.util.List;

import com.yoga.dev.Models.Booking;
import com.yoga.dev.dto.request.BookingRequest;
import com.yoga.dev.dto.response.BookingResponse;

public interface BookingService {
    BookingResponse createBooking(BookingRequest request);
    List<Booking> getAllBookings();

}
