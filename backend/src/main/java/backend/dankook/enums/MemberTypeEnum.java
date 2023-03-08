package backend.dankook.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum MemberTypeEnum {
    DKU("DKU"), GUEST("GUEST");

    @JsonValue
    private final String memberType;
}
