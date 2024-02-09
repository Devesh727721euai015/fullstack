package com.yoga.dev.Service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.yoga.dev.Models.Event;
import com.yoga.dev.Repository.EventRepository;
import com.yoga.dev.Service.EventService;
import com.yoga.dev.dto.request.EventRequest;
import com.yoga.dev.dto.response.EventResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService{
    private final EventRepository eventrepo;

    @Override
    public EventResponse createEvent(EventRequest request){
        Event event=Event.builder()
        .EventType(request.getEventType())
        .ParticipantCount(request.getParticipantCount())
        .Description(request.getDescription())
        .charges(request.getCharges())
        .build();
        eventrepo.save(event);
        return EventResponse.builder()
        .message("Event added!")
        .build();
        

    }
    @Override
    public List<Event> getAllEvents(){
        return eventrepo.findAll();
    }
    @Override
    public EventResponse updateEvent(Long eventId, EventRequest request) {
        EventResponse response = new EventResponse();
    Optional<Event> optionalEvent = eventrepo.findById(eventId);

    if (optionalEvent.isPresent()) {
        Event updateEvent = optionalEvent.get();
        updateEvent.setEventType(request.getEventType());
        updateEvent.setParticipantCount(request.getParticipantCount());
        updateEvent.setCharges(request.getCharges());
        updateEvent.setDescription(request.getDescription());
        
        eventrepo.save(updateEvent);

        response.setMessage("Event updated successfully");
    } 
    else {
        response.setMessage("Event not found");
    }

    return response;
}
@Override
public EventResponse deleteEvent(Long eventId) {
    EventResponse response = new EventResponse();
    Optional<Event> optionalEvent = eventrepo.findById(eventId);

    if (optionalEvent.isPresent()) {
        Event eventToDelete = optionalEvent.get();
       
        eventrepo.delete(eventToDelete);

        response.setMessage("Event deleted successfully");
    } else {
        response.setMessage("Event not found");
    }

    return response;
}
    

}
