package com.operative.miniProjectBackend.repository;

import com.operative.miniProjectBackend.model.Professional;
import com.operative.miniProjectBackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProfessionalRepository extends JpaRepository<Professional, Integer> {

    public Professional findByEmailId(String emailId);
    public Professional findByEmailIdAndPassword(String emailId,String password);

//    public Professional findAllByCity(String city);
      List<Professional> findByCity(String city);


}
