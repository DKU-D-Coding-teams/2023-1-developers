package backend.dankook.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;
@Getter
public class DankookException extends RuntimeException{
    private int httpStatus;
    private String message;
    private String code;

    public DankookException(DankookErrorCode dankookErrorCode){
        this.httpStatus = dankookErrorCode.getStatus();
        this.message = dankookErrorCode.getMessage();
        this.code = dankookErrorCode.getCode();
    }

    public DankookException(Throwable cause, DankookErrorCode dankookErrorCode) {
        super(cause);
        this.httpStatus = dankookErrorCode.getStatus();
        this.message = dankookErrorCode.getMessage();
        this.code = dankookErrorCode.getCode();
    }
}
