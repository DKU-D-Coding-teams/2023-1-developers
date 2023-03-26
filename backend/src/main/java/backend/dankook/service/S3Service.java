package backend.dankook.service;

import backend.dankook.exception.DankookException;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.ObjectMetadata;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class S3Service {
    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucketName;

    public String uploadFile(MultipartFile multipartFile, String dirName, String subDirName){
        String key = dirName + "/" + subDirName + "/" + UUID.randomUUID() + multipartFile.getOriginalFilename();

        ObjectMetadata objMeta = new ObjectMetadata();
        try {
            objMeta.setContentLength(multipartFile.getInputStream().available());
            amazonS3Client.putObject(bucketName, key, multipartFile.getInputStream(), objMeta);
        } catch (IOException e) {
            throw new DankookException(e, HttpStatus.CONFLICT, "AWS S3 접근 실패");
        }

        return amazonS3Client.getUrl(bucketName, key).toString();
    }


}
