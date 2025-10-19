package com.laddu.todo_app.repository;

import com.laddu.todo_app.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
