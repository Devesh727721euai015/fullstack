package com.yoga.dev.Service.impl;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.yoga.dev.Models.Booking;
import com.yoga.dev.Repository.BookingRepository;
import com.yoga.dev.Service.BookingService;
import com.yoga.dev.dto.request.BookingRequest;
import com.yoga.dev.dto.response.BookingResponse;

import lombok.RequiredArgsConstructor;
import java.util.*;
@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;


    @Override
    public BookingResponse createBooking(BookingRequest request) {
       
        Long userId = request.getUserId();
        Long venueId = request.getVenueId();

        Booking booking = Booking.builder()
                .no_of_guest(request.getNo_of_guest())
                .ondate(request.getOnDate())
             
                .userId(userId)
                .venueId(venueId)
                .eventType(request.getEventType())
                .paymentStatus(request.getPaymentStatus())
                .build();

        bookingRepository.save(booking);

        return BookingResponse.builder()
                .message("Booking created successfully!")
                .build();
    }
    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

}