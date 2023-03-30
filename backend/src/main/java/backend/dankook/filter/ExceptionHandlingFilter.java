package backend.dankook.filter;

import backend.dankook.exception.DankookException;
import backend.dankook.exception.ErrorResult;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class ExceptionHandlingFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            filterChain.doFilter(request, response);
        } catch (DankookException e){
            ErrorResult errorResult = new ErrorResult(e.getHttpStatus(), e.getMessage(), e.getCode());
            response.setStatus(e.getHttpStatus());
            response.setCharacterEncoding("UTF-8");
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);

            ObjectMapper objectMapper = new ObjectMapper();
            String exceptionMessage = objectMapper.writeValueAsString(errorResult);
            response.getWriter().write(exceptionMessage);
        }
    }
}
