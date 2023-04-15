package backend.dankook.repository;

import backend.dankook.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TagRepository extends JpaRepository<Tag, Long> {
    List<Tag> findByProfileId(Long profileId);
}
