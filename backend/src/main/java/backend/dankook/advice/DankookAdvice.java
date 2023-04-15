package backend.dankook.advice;

import backend.dankook.exception.DankookException;
import backend.dankook.exception.ErrorResult;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class DankookAdvice {
    @ExceptionHandler(DankookException.class)
    public ResponseEntity<ErrorResult> handleException(DankookException e){
        ErrorResult errorResult = new ErrorResult(e.getHttpStatus(), e.getMessage(), e.getCode());
        return ResponseEntity.status(errorResult.getStatus())
                .body(errorResult);
    }
}
