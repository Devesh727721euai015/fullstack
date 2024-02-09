package com.yoga.dev.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yoga.dev.Models.Event;

public interface EventRepository extends JpaRepository<Event,Long> 
    {

    }


