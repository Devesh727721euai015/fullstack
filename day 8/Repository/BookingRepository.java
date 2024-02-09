package com.yoga.dev.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.yoga.dev.Models.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

}

