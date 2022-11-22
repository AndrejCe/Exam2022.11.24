package com.example.Exam.Students;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentConfiguration {
    @Bean
    public CommandLineRunner commandLineRunner(StudentRepository studentRepository) {
        return args -> {
            studentRepository.saveAll(List.of(
                    new Student("Andre", "andre@gmail@com",LocalDate.of(2021, Month.JANUARY, 22)),
                    new Student("Egle", "egle@gmail@com",LocalDate.of(2010, Month.MARCH, 2)),
                    new Student("Marija","masa@gmail@com", LocalDate.of(1999, Month.NOVEMBER, 12))
                    ));
        };
    }
}
