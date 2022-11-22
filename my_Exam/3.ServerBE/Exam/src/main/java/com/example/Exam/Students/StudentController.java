package com.example.Exam.Students;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/students")
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping(path = "list")
    public List<Student> list() {
        return studentService.list();
    }

    @PostMapping(path = "item")
    public void add(@RequestBody Student student) {
        studentService.add(student);

    }
    @DeleteMapping(path = "item/{studentId}")
    public void delete(@PathVariable("studentId") Long studentId) {
        studentService.delete(studentId);


    }
    @PutMapping(path = "item")
    public void delete(@RequestBody Student student) {
        studentService.update(student);


    }
}
