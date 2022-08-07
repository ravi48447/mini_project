package com.operative.miniProjectBackend.repository;

import com.operative.miniProjectBackend.model.Professional;
import com.operative.miniProjectBackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Component
public interface UserRepository extends JpaRepository<User, Integer> {

    public User findByEmailId(String emailId);
    public User findByEmailIdAndPassword(String emailId,String password);



}
