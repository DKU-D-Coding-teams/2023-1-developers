package backend.dankook.exception;

import org.springframework.http.HttpStatus;

public class DankookException extends RuntimeException{
    private HttpStatus httpStatus;
    private String message;

    public DankookException(String message) {
        this.message = message;
    }

    public DankookException(HttpStatus httpStatus, String message) {
        this.httpStatus = httpStatus;
        this.message = message;
    }
}
