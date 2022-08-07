package com.operative.miniProjectBackend.service;

import com.operative.miniProjectBackend.model.Professional;
import com.operative.miniProjectBackend.model.User;
import com.operative.miniProjectBackend.repository.ProfessionalRepository;
import com.operative.miniProjectBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@ComponentScan(basePackages = {"com.operative.miniProjectBackend.service"})
@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ProfessionalRepository professionalRepository;


    //SaveUser and SaveProfessional Method
    public User saveUser(User user){

        return userRepository.save(user);
    }
    public Professional saveProfessinal(Professional professional){

        return professionalRepository.save(professional);
    }


    //User and Professional Method for fetching emailid
    public User fetchUserByEmailId(String tempEmailId){
        return userRepository.findByEmailId(tempEmailId);
    }
    public Professional fetchProffesionalByEmailId(String tempEmailId){
        return professionalRepository.findByEmailId(tempEmailId);

    }

    //User and Professional Method for fetching emailId and password
    public User fetchUserByEmailIdAndPassword(String emailId, String password) {

        return userRepository.findByEmailIdAndPassword(emailId, password);
    }
    public Professional fetchProfessionalByEmailIdAndPassword(String emailId, String password) {

        return professionalRepository.findByEmailIdAndPassword(emailId, password);
    }

    //Searching Professional All and By City Name
    public List<Professional> getAllProfessional()
    {
        List<Professional> professionals = new ArrayList<Professional>();
        professionalRepository.findAll().forEach(professional -> professionals.add(professional));
        return professionals;
    }

    public List<Professional> getProfessionalByCity(String city){
        return professionalRepository.findByCity(city);
    }



}
