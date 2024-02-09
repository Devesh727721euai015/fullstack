package com.yoga.dev.Service;

import java.util.List;

import com.yoga.dev.Models.Event;
import com.yoga.dev.dto.request.EventRequest;
import com.yoga.dev.dto.response.EventResponse;

public interface EventService{
EventResponse createEvent(EventRequest request);
List<Event> getAllEvents();
EventResponse deleteEvent(Long Id);
    EventResponse updateEvent(Long Id,EventRequest request);
}
