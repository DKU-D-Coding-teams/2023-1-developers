package backend.dankook.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum TagEnum {
    FRONTEND("FRONTEND"), BACKEND("BACKEND"), MOBILE("MOBILE"), GAME("GAME"), BLOCKCHAIN("BLOCKCHAIN"), SECURITY("SECURITY");

    @JsonValue
    private final String tag;
}
