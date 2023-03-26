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

    public DankookException(Throwable cause, HttpStatus httpStatus, String message) {
        super(cause);
        this.httpStatus = httpStatus;
        this.message = message;
    }
}
