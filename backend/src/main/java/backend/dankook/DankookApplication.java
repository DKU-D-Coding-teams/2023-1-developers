package backend.dankook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class DankookApplication {
	public static void main(String[] args) {
		SpringApplication.run(DankookApplication.class, args);
	}

}
