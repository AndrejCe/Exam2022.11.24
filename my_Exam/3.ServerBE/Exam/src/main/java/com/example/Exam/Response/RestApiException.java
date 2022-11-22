package com.example.Exam.Response;

public class RestApiException extends RuntimeException{
    public RestApiException(String message) {
        super(message);
    }
}
