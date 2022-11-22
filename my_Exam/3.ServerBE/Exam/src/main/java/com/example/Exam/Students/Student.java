package com.example.Exam.Students;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;

@Entity
public class Student {
    @Id
    @SequenceGenerator(name="student_sequence",sequenceName ="student_sequence")
    @GeneratedValue(strategy= GenerationType.SEQUENCE,generator="student_sequence")
    private Long id;
    private  String name;
    @Column(unique = true)
    private  String email;

    public String getEmail() {
        return email;
    }

    private LocalDate dob;

    public Student() {
    }


    public Student(String name,String email, LocalDate dob) {
        this.name = name;
        this.email=email;
        this.dob = dob;
    }
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public LocalDate getDob() {
        return dob;
    }
    public int getAge(){
        return Period.between(dob,LocalDate.now()).getYears();
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", dob=" + dob +
                '}';
    }
}
